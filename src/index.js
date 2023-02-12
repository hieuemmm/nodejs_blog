const path = require('path');
const express = require('express');
const morgan = require('morgan'); //dev
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// Static resource
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', handlebars.engine(
    { extname: '.hbs' }
));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resources/views"));

// Router
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});

// Open port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});