//combine all routes in here

import { Router } from "express";
import { healthRouter } from "./health.routes";

export const apiRouter=Router()

apiRouter.use(healthRouter)