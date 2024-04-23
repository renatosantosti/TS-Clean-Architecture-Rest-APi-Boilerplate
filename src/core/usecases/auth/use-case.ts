import PasswordHashAdapter from "../../../adapters/password-hash-adapter";
import UserMockRepository from "../../../persistence/users/mock-user-repository";
import UserDto from "../../dto/auth/user";
import IPasswordHash from "../../interface/adapters/password-hashing";
import IUserRepository from "../../interface/repositories/user";
import AuthRequest from "../../interface/use-cases/auth/auth-request";
import AuthResponse from "../../interface/use-cases/auth/auth-response";
import IAuthUseCase from "../../interface/use-cases/auth/auth-usecase";
import User from "../../model/user";

export default class AuthUseCase implements IAuthUseCase {
  constructor(readonly userRepository: IUserRepository, readonly hashAdapter: IPasswordHash) {
  }

  async handler(request: AuthRequest): Promise<AuthResponse> {
    const user: User = await new UserMockRepository(new PasswordHashAdapter()).getUser(request.email);

    if (user.email.toLowerCase() !== request.email.toLocaleLowerCase()) {
      throw Error("Invalid email");
    }

    // Check password if ok
    if (!this.hashAdapter.validateHash(request.password, user.password)) {
      throw Error("Invalid password");
    }

    const token = this.hashAdapter.createToken<UserDto>(user as UserDto);

    return { token };
  };
}
