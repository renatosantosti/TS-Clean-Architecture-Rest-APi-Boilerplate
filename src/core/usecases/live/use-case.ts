import LiveDto from "../../interface/use-cases/live/live-response"
import ILiveUseCase from "../../interface/use-cases/live/live-usecase"
export default class LiveUseCase implements ILiveUseCase {
  async handler(): Promise<LiveDto> {
    const liveStatus: LiveDto = { live: true };
    return liveStatus;
  };
}