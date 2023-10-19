import express from "express"
import router from "./router/router.js"
const port = 5000;
const app = express();
app.use(express.json());
app.use(router);

app.get('/', function (req, res) {
  //res.send('Hello World');
  res.send({"key":"it's work"})
})

app.listen(port)
console.log(`listen in ${port}`)