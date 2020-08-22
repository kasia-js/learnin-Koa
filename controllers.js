'use strict'
const link = require('./models')


exports.getImage = function (ctx) {
  try {
    console.log(link)
    ctx.body = link;
  } catch (e) {
    console.log(e)
  }
}




