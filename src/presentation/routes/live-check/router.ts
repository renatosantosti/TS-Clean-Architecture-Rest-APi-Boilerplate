import express from "express";
import LiveController from "../../controllers/live/controller";
import LiveUseCase from "../../../core/usecases/live/use-case";

const liveCheckRouter = express.Router();

/**
 * @openapi
 * /live:
 *   get:
 *     description: Just inform if api server is live
 *     responses:
 *       200:
 *         description: Returns true if api is ready.
 */
liveCheckRouter.get("/live", async (_req, res) => {
  const controller = new LiveController(new LiveUseCase());
  const response = await controller.handler();
  return res.send(response);
});

export default liveCheckRouter;