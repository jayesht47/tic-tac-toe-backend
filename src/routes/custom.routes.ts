import express from "express";
import log from "../middlewares/logging";
const customRouter = express.Router();

customRouter.get("/", (req, res, next) => {
  try {
    log("/custom path invoked", "INFO");
    throw new Error("Test error");
  } catch (error: any) {
    log("test", "ERROR", error);
  }
  res.end();
});

export default customRouter;
