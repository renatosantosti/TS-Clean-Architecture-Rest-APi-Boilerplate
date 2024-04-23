import LiveDto from "./live-response";
import IUseCaseRequestHandler from "../../base/base-use-case-request-handler";

export default interface ILiveUseCase extends IUseCaseRequestHandler<null, LiveDto> {
};