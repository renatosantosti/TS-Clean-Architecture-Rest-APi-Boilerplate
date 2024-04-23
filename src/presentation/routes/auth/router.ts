import express from "express";
import AuthController from "../../controllers/auth/controller";
import HttpStatusCode from "../../helpers/http-status";
import { ok, unauthorized } from "../../helpers/http-helper";
import onlyWithAccessAuthMiddleware from "../../http-middlewares/only-access-auth";
const authRouter = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Auth:
 *        type: object
 *        properties:
 *          token:
 *            type: string
 *            description: An jwt token
 *            example: bghsghsdfarwerthjjkgfhfghdfghdfhstt
 */
authRouter.post("/auth/token", async (req, res) => {
  const controller = new AuthController();
  try {
    const response = await controller.getToken(req.body);
    return res.send(response);
  }
  catch (err) {
    return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .send(unauthorized())
  }
});


// /**
//  *  @swagger
//  *  components:
//  *    schemas:
//  *      Auth:
//  *        type: object
//  *        properties:
//  *          token:
//  *            type: string
//  *            description: Validate a jwt token
//  *            example: bghsghsdfarwerthjjkgfhfghdfghdfhstt
//  */
authRouter.get("/restricted-feature", onlyWithAccessAuthMiddleware, async (req, res) => {
  const _ = req;
  const controller = new AuthController();
  const response = await controller.getRestrictedFeature(null);
  return res
    .status(HttpStatusCode.OK)
    .send(ok(response));
});
export default authRouter;
