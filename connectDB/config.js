import 'dotenv/config.js'

export const APP_CONSTANT = {
    connectionURL: process.env.MONGODB_URI,
    port: process.env.APP_PORT
}
