import { Get, Route, SuccessResponse } from "tsoa";
import ILiveUseCase from "../../../core/interface/use-cases/live/live-usecase";
import IBaseController from "../../../core/interface/base/base-controller";
import LiveDto from "../../../core/interface/use-cases/live/live-response";
import IBaseHttpResponse from "../../../core/interface/base/base-http-response";
import { ok } from "../../helpers/http-helper";
import HttpStatusCode from "../../helpers/http-status";

@Route("live")
export default class LiveController implements IBaseController<any, LiveDto> {
  constructor(
    private readonly checkLive: ILiveUseCase
  ) { }

  @Get("/live")
  @SuccessResponse(HttpStatusCode.OK, "Is API live?")
  public async handler(): Promise<IBaseHttpResponse<LiveDto>> {
    const result = await this.checkLive.handler();
    return ok(result);
  }
}