import express, { Response } from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (_, res: Response) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
