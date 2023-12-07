// const jsonServer = require('json-server')
// const auth = require('json-server-auth')

// const app = jsonServer.create()
// const router = jsonServer.router('login-post.json')

// // /!\ Bind the router db to the app
// app.db = router.db

// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.listen(3000)
const jsonServer = require("json-server");
const auth = require("json-server-auth");


const server = jsonServer.create();
const router = jsonServer.router("login-post.json"); // 這裡是你的數據庫文件
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(auth); // 添加 auth 支持
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});