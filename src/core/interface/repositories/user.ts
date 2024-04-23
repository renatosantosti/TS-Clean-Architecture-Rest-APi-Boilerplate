import User from "../../model/user";

export default interface IUserRepository {
  getUser: (email: string) => User | Promise<User>;
}