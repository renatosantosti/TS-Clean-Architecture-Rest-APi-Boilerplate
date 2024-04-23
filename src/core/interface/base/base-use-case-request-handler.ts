// export default interface IBaseUseCaseHandler<IResponse> {
//   handler: () => Promise<IResponse>
// };

export default interface IBaseUseCaseHandler<IRequest, IResponse> {
  handler(request?: IRequest): Promise<IResponse> | IResponse;
}