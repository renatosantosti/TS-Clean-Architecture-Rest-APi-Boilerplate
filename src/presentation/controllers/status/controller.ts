import { Get, Route } from "tsoa";
import IStatusResponse from "../../../core/interface/use-cases/status/status-response";

@Route("status")
export default class StatusController {
  @Get("/status")
  public async getMessage(): Promise<IStatusResponse> {
    return {
      status: true,
    };
  }
}