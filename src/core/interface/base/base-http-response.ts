export default interface IBaseHttpResponse<IResponse> {
  description: string | null
  statusCode: number
  data: IResponse
};
