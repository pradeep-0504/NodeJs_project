import dotenv from 'dotenv'

dotenv.config()
// Loads .env file contents into process.env by default.

export const env={
    port:Number(process.env.PORT ?? 4000),
    isProduction:(process.env.NODE_ENV ?? "development")==="production",
    logLevel:process.env.LOG_LEVEL ?? 'info',
    node_Env:process.env.NODE_ENV ?? "development"
} as const;