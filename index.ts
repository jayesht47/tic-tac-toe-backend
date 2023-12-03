import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import HttpStatusCode from "./src/utils/HttpStatusCodes";
import customRouter from "./src/routes/custom.routes";
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(HttpStatusCode.OK);
  res.send("Welcome to Express & TypeScript Server");
});

app.use("/custom", customRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
