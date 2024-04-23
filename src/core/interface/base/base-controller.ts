import IBaseHttpResponse from "./base-http-response";

export default interface IBaseController<IRequest, IResponse> {
  handler: (request: IRequest | any) => Promise<IBaseHttpResponse<IResponse>>;
};
