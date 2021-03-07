// import the required modules
const express = require('express');
const mongoose = require('mongoose');
const { render } = require('ejs');
const bodyParser = require('body-parser');
const appController = require('./controllers/appController.js');
const config = require('./config/config.js');

const port = process.env.PORT || 3000;

// Set up express
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// connect to MongoDB
const dbURI = `mongodb+srv://${config.user}:${config.password}@${config.cluster}.ffgxc.mongodb.net/${config.db_name}`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    app.listen(port);
    console.log(`Successfully connected to port ${port}`);
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

// Route requests from frontend
app.get('/school/:id', appController.school_get);
app.get('/all_schools', appController.all_schools_get);
app.post('/create', appController.create_post);
app.put('/edit/:id', appController.edit_put);