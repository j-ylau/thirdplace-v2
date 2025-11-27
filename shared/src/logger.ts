type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: Record<string, unknown>;
}

function formatLog(entry: LogEntry): string {
  const dataStr = entry.data !== undefined ? ` ${JSON.stringify(entry.data)}` : "";
  return `[${entry.timestamp}] [${entry.level.toUpperCase()}] ${entry.message}${dataStr}`;
}

function createLogEntry(
  level: LogLevel,
  message: string,
  data?: Record<string, unknown>
): LogEntry {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
  };

  if (data !== undefined) {
    entry.data = data;
  }

  return entry;
}

function shouldLog(level: LogLevel): boolean {
  if (process.env["NODE_ENV"] === "production" && level === "debug") {
    return false;
  }
  return true;
}

export const logger = {
  info(message: string, data?: Record<string, unknown>): void {
    const entry = createLogEntry("info", message, data);
    if (shouldLog("info")) {
      console.info(formatLog(entry));
    }
  },

  warn(message: string, data?: Record<string, unknown>): void {
    const entry = createLogEntry("warn", message, data);
    if (shouldLog("warn")) {
      console.warn(formatLog(entry));
    }
  },

  error(message: string, data?: Record<string, unknown>): void {
    const entry = createLogEntry("error", message, data);
    if (shouldLog("error")) {
      console.error(formatLog(entry));
    }
  },

  debug(message: string, data?: Record<string, unknown>): void {
    const entry = createLogEntry("debug", message, data);
    if (shouldLog("debug")) {
      console.debug(formatLog(entry));
    }
  },
};
