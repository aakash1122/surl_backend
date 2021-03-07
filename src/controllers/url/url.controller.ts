import { Request, Response } from "express";
import { Url } from "../../interfaces/Url";

export class UrlController {
  getShortUrls(req: Request, res: Response) {
    res.send([
      {
        id: "DAF",
        label: "dafaf",
        url: "http://fdafdsfasdf",
        shortUrl: "Fdasfds",
      },
    ]);
  }
}
