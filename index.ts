import express from "express";
import bodyParser from 'body-parser';
import axios from 'axios';
const PORT = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=72ac02221377e1141a1a6aa90a230cfd&units=metric&lang=vi';
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);

        if (data) {
            res.render("weather", {data: data})
        } else {
            res.end('<h1>Error<h1>')
        }
    } catch (err) {
        res.end('<h1>Error<h1>')
    }
})


app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
})
