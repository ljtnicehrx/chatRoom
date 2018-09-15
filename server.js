var http = require("http");//node 引入一个模块
var fs = require("fs");//引入文件系统模块
var ws = require("socket.io");

var server = http.createServer(function(req,res){

	var html = fs.readFileSync("./client.html");
  res.end(html);
}).listen("3000");//创建服务端实例方法

var io = ws(server);//把socket服务挂在到http服务中
io.on("connection",function(socket){//监听到客户端的消息之后要做的事
	console.log("new user"); 
    socket.on("message",function(mes){
    	console.log(mes);
    	io.emit("message",mes);//广播消息
    });//监听每一个socket客户端发送消息

  
});//监听 连接事件