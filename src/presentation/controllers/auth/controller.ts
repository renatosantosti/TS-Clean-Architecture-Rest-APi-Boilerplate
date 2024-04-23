import { Body, Controller, Get, Route, SuccessResponse } from "tsoa";
import AuthResponse from "../../../core/interface/use-cases/auth/auth-response";
import AuthRequest from "../../../core/interface/use-cases/auth/auth-request";
import AuthUseCase from "../../../core/usecases/auth/use-case";
import UserMockRepository from "../../../persistence/users/mock-user-repository";
import PasswordHashAdapter from "../../../adapters/password-hash-adapter";
import HttpStatusCode from "../../helpers/http-status";

/**
 * @swagger
 * /auth/token:
 *  post:
 *    tags:
 *      - Auth
 *    summary: Retuns a valid token
 *    description: Check given email and password and returns a new token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: enter your email
 *                example: andi17x
 *              password:
 *                type: string
 *                description: enter your password
 *                example: adminpassword12
 *    responses:
 *      200:
 *        description: A new valid token.
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: valid token created successfully  
 *                data:
 *                  type: object
 *                  properties:
 *                    token:
 *                      type: string
 *                      description: hash token
 *                      example: bghsghsdfarwerthjjkgfhfghdfghdfhstt
 *                  item:
 *                    $ref: '#/components/schemas/Auth'
 * 
 */
export default class AuthController extends Controller {
  public async getToken(request: AuthRequest): Promise<AuthResponse> {
    const passwordHashAdapter = new PasswordHashAdapter();
    const loginUseCase = new AuthUseCase(new UserMockRepository(passwordHashAdapter), passwordHashAdapter);
    try {
      const auth = await loginUseCase.handler(request);
      return auth;
    }
    catch (err) {
      throw err;
    }
  }


  /**
 * @swagger
 * /restricted-feature:
 *  get:
 *    tags:
 *      - Restricted Feature
 *    summary: Retuns a granted route
 *    description: Check given token and grant access to route
 *    responses:
 *      200:
 *        description: Success access with valid token.
 */
  public async getRestrictedFeature(request: null): Promise<string> {
    return "access granted!"
  }
}