var fs=require('fs');
var events=require('events');
var proxy = new events.EventEmitter();
var status="ready";

var test = function() {
  console.log("test");
};

var select = function () {
  proxy.once("select", test);
  if ( status === "ready" ) {

    status = "pending";
    fs.readFile("tmp.txt", function(error, content) {
      if (error) {
        console.log("error");
      }
      else {
        console.log("ok");
        proxy.emit("select", content);
      }
    });

  }
};

select();
select();
