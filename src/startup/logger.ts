// import winston, { transports } from "winston";

// const winstonLogger = winston.createLogger({
//   format: combine(timestamp(), prettyPrint()),
//   transports: [
//     new transports.Console(),
//     new transports.File({ filename: path.join(__dirname, "../logfile.log") }),
//   ],
//   exitOnError: false,
// });
// winstonLogger.exceptions.handle(
//   new transports.File({
//     filename: path.join(__dirname, "../exceptions.log"),
//     level: "error",
//   })
// );
