const colors = {
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  green: "\x1b[22m",
  reset: "\x1B[0m",
};

const log = (
  message: string,
  level: "ERROR" | "INFO" | "DEBUG" | "TRACE",
  err?: Error
) => {
  let levelText = `[${colors.cyan}${level}${colors.reset}] `;
  let finalMessage = `${new Date().toTimeString()} :: ${message} \r\n`;
  switch (level) {
    case "INFO":
      levelText = `[${colors.cyan}${level}${colors.reset}] `;
      break;
    case "DEBUG":
      levelText = `[${colors.green}${level}${colors.reset}] `;
      break;
    case "ERROR":
      levelText = `[${colors.red}${level}${colors.reset}] `;
      finalMessage.concat(`:: ${err?.message}`);
      finalMessage.concat(`:: ${err?.stack}`);
      break;
    case "TRACE":
      levelText = `[${colors.red}${level}${colors.white}] `;
      break;
    default:
      const error = new Error("Invalid log level");
      levelText = `[${colors.red}${level}${colors.reset}] `;
      finalMessage.concat(`:: ${error?.message}`);
      finalMessage.concat(`:: ${error?.stack}`);
  }
  finalMessage = levelText + levelText;
  console.log(finalMessage);
};

export default log;
