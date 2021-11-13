const Mali = require('mali')

function sayHello (ctx) {
  ctx.res = { message: `Hello ${ctx.req.name}` }
}

function main () {
  const app = new Mali('helloworld.proto')
  app.use({ sayHello })
  app.start('0.0.0.0:50051')
}
