import IPasswordHash from "../../core/interface/adapters/password-hashing";
import IUserRepository from "../../core/interface/repositories/user";
import User from "../../core/model/user";
import { authConfig } from "../../config/index"
export default class UserMockRepository implements IUserRepository {
  constructor(private readonly hashAdapter: IPasswordHash) { }

  /*** */
  async getUser(email: string): Promise<User> {
    const password = "123";
    return {
      name: "Renato",
      email,
      password: await this.hashAdapter.createHash(password, authConfig.saltRounds),
    }
  }
}