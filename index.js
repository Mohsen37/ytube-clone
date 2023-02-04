import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

const PORT = 4000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()), app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hola Amigo!👋");
});

function listenPortLog() {
  console.log(`The server is Running on -> http://localhost:${PORT}`);
}
app.listen(PORT, listenPortLog);
