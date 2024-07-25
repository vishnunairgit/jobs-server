var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectToDatabase = require('./config/Db');
const cors = require('cors');
const dotenv = require('dotenv').config();

// Error handling for dotenv configuration

if (dotenv.error) {
  throw dotenv.error
}
console.log(process.env.JWT_PASSWORD, "-----jwt password-----");

// var indexRouter = require('./routes/index');

// const usersRouter = require('./routes/UsersRouter');
const authRouter = require('./routes/authRouter'); 
const jobsRouter = require('./routes/jobsRouter'); 
const userRouter = require('./routes/userRouter');


connectToDatabase()

var app = express();

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// app.use('/', indexRouter);
// app.use('/auth', authRouter);
// app.use('/users', usersRouter);


app.use(authRouter);
app.use(jobsRouter);
app.use(userRouter);



// app.use('/auth', authRouter); // Mount authRouter under /auth
// app.use('/api/jobs', jobsRouter); // Mount jobsRouter under /api/jobs




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
