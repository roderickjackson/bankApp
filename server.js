
// Express Application
var express = require('express');
var app = express();

// Dependencies
var path = require('path');
var passport = require('passport')

// Database
require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport config
require('./config/passport')(passport)

// Passport Middleware
app.use(passport.initialize())


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler ----> May remove also!
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
