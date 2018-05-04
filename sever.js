/**
 * Created by ukerxi on 2017/6/19.
 */
var express = require("express");
var firstStep = require("./src/index");
var app = express();

app.get('/', function(req, res){
  res.send("hello word");
});

// 设置静态文件路径
app.use(express.static('src'));

// 初始化各级路由
firstStep.init(app);

var server = app.listen(8080, function(){
  var address = server.address();
  var host = address.address;
  var port = address.port;
  console.log("地址：http://%s:%s", host, port);
});

