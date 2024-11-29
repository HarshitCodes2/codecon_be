import express from "express";
import cors from "cors";
import controller from "./routes/controller";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", controller);

app.listen(3000, () => console.log("Listening at port : " + 3000));

export default app;
