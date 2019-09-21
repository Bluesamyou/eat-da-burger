const express = require('express');
const expressHandlebars = require('express-handlebars');
const routes = require("./controllers/burgers_controllers");
const path = require('path')

const app = express()
const PORT = process.env.port

app.use(express.static(__dirname + '/public/assets'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

app.use(routes)

app.listen(PORT, function (err) {
    if (err) throw err

    console.log(`MAGIC HAPPENS ON PORT :${PORT}`)
}
)