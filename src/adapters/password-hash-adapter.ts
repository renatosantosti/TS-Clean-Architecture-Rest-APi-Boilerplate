import bcrypt from 'bcrypt';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import IPasswordHash from "../core/interface/adapters/password-hashing";
import { authConfig } from "../config";

export default class PasswordHashAdapter implements IPasswordHash {
  /***
   * @description Generate a new hash 
   */
  async createHash(password: string, salt: number): Promise<string> {
    return await bcrypt.hash(password, authConfig.saltRounds);
  }

  /**
   * @description validate  hash code if de target hash is valid with source hash
   * @param hashSource 
   * @param hashTarget 
   * @returns 
   */
  validateHash(textPlain: string, hashCode: string): boolean {
    return bcrypt.compareSync(textPlain, hashCode);
  }

  /**
   * @description create a new token 
   * @param source 
   * @returns boolean
   */
  createToken<T>(source: T): string {
    const token = jwt.sign(source as object, authConfig.secret, {
      expiresIn: authConfig.expires,
    });

    return token;
  };

  /**
 * @description validate token if it was generated by secret
 * @param hashSource 
 * @param hashTarget 
 * @returns string | any
 */
  validateToken(token: string, secret: string): string | any {
    return jwt.verify(token, secret);
  }
}