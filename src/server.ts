//This is the root file forr the application

import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./lib/logger";

const app=createApp();

app.listen(env.port,()=>{
    logger.info(`server is now running on port ${env.port}`);
})