require('dotenv').config({path:'./.env'});
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const mw = require('./middleware')

// Permitir requests desde otros puertos
const cors = require('cors');
app.use(cors())

// Autenticación
const passport = require('passport')

// Modelos
require('./app_api/models/db')

// Estrategia de autenticación
require('./app_api/config/passport')  



// Permitir Requests desde aplicacion Angular Local
/*
app.use('/api', (req,res,next) => {
  // res.header('Access-Control-Allow-Origin', 'https://bye-bonitos-y-esponjositos.herokuapp.com');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
*/




// Ruteadores
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');




// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));
// Incluye Angular app
app.use(express.static(path.join(__dirname, 'app_public')));


app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api', apiRouter);

// error handlers
// Catch unauthorized errors
app.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError'){
    res
      .status(401)
      .json({"message": err.name + ": " + err.message});
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
