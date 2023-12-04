const colors = {
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  green: "\x1b[32m",
  reset: "\x1B[0m",
};

const log = (
  message: string,
  level: "ERROR" | "INFO" | "DEBUG" | "TRACE",
  err?: Error
) => {
  let levelText;
  let finalMessage = `${new Date().toTimeString()} :: ${message} `;
  switch (level) {
    case "INFO":
      levelText = `[${colors.cyan}${level}${colors.reset}] `;
      break;
    case "DEBUG":
      levelText = `[${colors.green}${level}${colors.reset}] `;
      break;
    case "ERROR":
      levelText = `[${colors.red}${level}${colors.reset}] `;
      finalMessage = finalMessage.slice(0, finalMessage.lastIndexOf("\r"));
      finalMessage = finalMessage.concat(` :: ${err?.stack}`);
      break;
    case "TRACE":
      levelText = `[${colors.white}${level}${colors.white}] `;
      break;
    default: {
      const error = new Error("Invalid log level");
      levelText = `[${colors.red}${level}${colors.reset}] `;
      finalMessage = finalMessage.concat(`:: ${error?.message}`);
      finalMessage = finalMessage.concat(`:: ${error?.stack}`);
    }
  }
  finalMessage = levelText + finalMessage;
  console.log(finalMessage);
};

export default log;
