function generalLog(type, color, message) {
  const time = new Date().toLocaleTimeString()
  
  return console[type.toLowerCase()](color, `${time} - ${type.toUpperCase()}: ${message}`)
}

class Logger {
  log(message) {
    generalLog("log", "\x1b[36m%s\x1b[0m", message)
  }

  info(message) {
    generalLog("info", "\x1b[32m%s\x1b[0m", message)
  }

  warn(message) {
    generalLog("warn", "\x1b[33m%s\x1b[0m", message)
  }

  error(message) {
    generalLog("error", "\x1b[31m%s\x1b[0m", message)
  }

  debug(message) {
    generalLog("debug", "\x1b[35m%s\x1b[0m", message)
  }
}

module.exports = Logger
