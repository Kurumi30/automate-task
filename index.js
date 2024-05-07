const axios = require("axios").default
const cron = require("node-cron")
const Logger = require("./logger")

const logger = new Logger()

cron.schedule(
  "*/20 * * * *",
  async () => {
    try {
      if (!process.env.WEBSITE_URL) throw new Error("WEBSITE_URL is required")

      const response = await axios.get(process.env.WEBSITE_URL)

      logger.info(`\nStatus: ${response.status}\nHeaders: ${response.headers}`)
    } catch (err) {
      logger.error(err.message)
    }
  },
)
