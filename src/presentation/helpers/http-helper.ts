import IBaseHttpResponse from "../../core/interface/base/base-http-response"
import { ServerError, UnauthorizedError } from "../errors"

export const badRequest = (error: Error): IBaseHttpResponse<Error> => ({
  description: "Bad Request",
  statusCode: 400,
  data: error
});

export const forbidden = (error: Error): IBaseHttpResponse<Error> => ({
  description: "Forbidden Access",
  statusCode: 403,
  data: error
});

export const unauthorized = (): IBaseHttpResponse<UnauthorizedError> => ({
  description: "Unauthorized Access",
  statusCode: 401,
  data: new UnauthorizedError()
});

export const serverError = (error: Error): IBaseHttpResponse<ServerError> => ({
  description: "Internal Server Error",
  statusCode: 500,
  data: new ServerError(error.stack ?? "unknow internal error")
});

export const ok = <T>(data: T, description: string = "Success"): IBaseHttpResponse<T> => ({
  description,
  statusCode: 200,
  data: data
});

export const noContent = (): IBaseHttpResponse<undefined | null> => ({
  description: null,
  statusCode: 204,
  data: null
});
