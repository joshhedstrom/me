const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost: ${PORT}`);
})