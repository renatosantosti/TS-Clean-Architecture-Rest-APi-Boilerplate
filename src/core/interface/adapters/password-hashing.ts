export default interface IPasswordHash {
  createHash: (password: string, saltRounds: number) => string | Promise<string>;
  validateHash: (textPlain: string, hashCode: string) => boolean;
  createToken: <T>(object: T) => string;
  validateToken: (token: string, secret: string) => string | any;
}