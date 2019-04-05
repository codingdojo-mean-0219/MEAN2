const cookieParser = require('cookie-parser');
const session = require('express-session');
const parser = require('body-parser');
const express = require('express');
const path = require('path');

const { PORT: port = 8000 } = process.env;
const app = express();

require('./server/config/database');

app.use(express.static(path.resolve('dist/public')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cookieParser('askdjfnaskldjfnalskjdfnalskjdfnlaksdjfn'));
app.use(
  session({
    saveUninitialized: true,
    secret: 'sessionSekret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 36000000,
    },
  })
);
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
