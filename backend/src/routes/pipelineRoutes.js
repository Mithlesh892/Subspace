import express from "express";
import {
  runPipelineController,
  sendEmailsController,
} from "../controllers/pipelineController.js";

const router = express.Router();

router.post("/run", runPipelineController);

router.post("/send", sendEmailsController);

export default router;
