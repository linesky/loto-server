var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("loto server")
});

function Connection(connection){
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var vv="";
		var v=0
		for(v=0;v<10;v++)vv=vv+(Math.floor(Math.random()*49+1)).toString()+" "
		console.log(vv.toString());
		connection.end(vv.toString())
			
	}
	function onClose(){
		connection.destroy();
	}
	function onError(data){
		console.log(data);
		connection.destroy();
	}



}
