import { Request, Response, NextFunction } from 'express';
import HttpStatusCode from "../helpers/http-status";
import { UnauthorizedError } from "../errors";
import PasswordHashAdapter from "../../adapters/password-hash-adapter";
import { authConfig } from "../../config";

const onlyWithAccessAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers['authorization']?.split('Bearer ')[1];

  if (!token) return res
    .status(HttpStatusCode.UNAUTHORIZED)
    .send(new UnauthorizedError());
  try {
    const validToekn = new PasswordHashAdapter().validateToken(token, authConfig.secret);

    if (!validToekn) return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .send(new UnauthorizedError());

    // if alright, go ahead
    next();
  } catch (error) {
    return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .send(new UnauthorizedError());
  }
}

export default onlyWithAccessAuthMiddleware;
