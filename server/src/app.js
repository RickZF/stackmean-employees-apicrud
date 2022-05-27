const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {mongoose} = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/employees", require("./routes/employeeRoutes"));

module.exports = app;