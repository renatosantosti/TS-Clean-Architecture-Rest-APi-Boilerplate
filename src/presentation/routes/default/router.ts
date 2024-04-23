import express from "express";

const defaultRouter = express.Router();

// define default route to the Swagger page for api documentation
defaultRouter.get('/', (req, res) => {
  res.redirect("/api-docs");
})

export default defaultRouter;
