import express from "express";
import StatusController from "../../controllers/status/controller";

const statusCheckRouter = express.Router();

/**
 * @openapi
 * /status:
 *   get:
 *     description: Just inform api status
 *     responses:
 *       200:
 *         description: Returns true if api is ready.
 */
statusCheckRouter.get("/status", async (_req, res) => {
  const controller = new StatusController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default statusCheckRouter;
