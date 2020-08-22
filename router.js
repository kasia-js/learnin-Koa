'use strict'
const Router = require("@koa/router");
const router = new Router()
//const router = new require("@koa/router")(); 
const  image = require('./controllers');

router.get("/images", image.getImage);


// router.post();
module.exports = router;

// const Router = require('koa-router');
// const router = new Router();
// module.exports = router;
// app.use(router.routes());