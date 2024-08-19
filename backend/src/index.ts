import express from "express";
import cors from "cors";
import workerRouter from "./routes/worker";
import studentRouter from "./routes/student";

const app= express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/student",studentRouter);
app.use("/api/v1/worker",workerRouter);

app.listen(3000);