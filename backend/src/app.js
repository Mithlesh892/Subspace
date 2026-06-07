import express from "express";
import cors from "cors";

import pipelineRoutes from "./routes/pipelineRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/pipeline", pipelineRoutes);

export default app;
