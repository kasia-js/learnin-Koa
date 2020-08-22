'use strict'
// npm init -y (in the same directory as index.js)
//npm i koa koa-bodyparser nodemon @koa/router koa-static handlebars
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const serve = require('koa-static');
const Handlebars = require('handlebars');

app.use(serve('./client'));
app.use(bodyParser());
app.use(router.routes()) //access all routes 
//app.use(router.allowedMethods());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});

