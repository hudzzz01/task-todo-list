import express from "express"
import router from "./router/router.js"
import cors from "cors"
const port = 5000;
const app = express();
app.use(express.json());
app.use(router);
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get('/', function (req, res) {
  //res.send('Hello World');
  res.send({"key":"it's work"})
})

app.listen(port)
console.log(`listen in ${port}`)