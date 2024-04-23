import AuthResponse from "./auth-response";
import IUseCaseRequestHandler from "../../base/base-use-case-request-handler";
import AuthRequest from "./auth-request";

export default interface IAuthUseCase extends IUseCaseRequestHandler<AuthRequest, AuthResponse> {
  // Assign AuthRequest as required 
  handler(request: AuthRequest): Promise<AuthResponse> | AuthResponse;
};