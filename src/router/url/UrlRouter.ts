import express from "express";
import { UrlController } from "../../controllers/url/url.controller";

const urlController = new UrlController();

const urlRouter: express.Router = express.Router();

urlRouter.get("/", urlController.getShortUrls);

export default urlRouter;
