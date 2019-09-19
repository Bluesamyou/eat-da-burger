const express = require('express');
const expressHandlebars = require('express-handlebars');
var routes = require("./controllers/burgers_controllers");

const app = express()
const PORT = process.env.port || 8000

app.use(express.static('./assets'))

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