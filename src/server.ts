import express from "express";
import urlRouter from "./router/url/UrlRouter";

const app: express.Application = express();
const port: number = 3000 || process.env.PORT;

app.use("/url", urlRouter);

app.listen(port, () => console.log("server running on port: ", port));
