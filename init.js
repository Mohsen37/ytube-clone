import app from "./app";

const PORT = 4000;

function listenPortLog() {
  console.log(`The server is Running on -> ✅ http://localhost:${PORT}`);
}
app.listen(PORT, listenPortLog);
