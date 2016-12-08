// dedicated worker
// var worker = new Worker('../worker/share.js');

// var age = document.querySelector("#age");
// var result = document.querySelector("#result");

// age.onchange = function() {
// 	worker.postMessage({
// 		type: "age",
// 		value: age.value
// 	});
// }

// worker.onmessage = function(message) {
// 	var data = message.data;
// 	result.innerHTML = data;
// }


// shared worker
var worker = new SharedWorker('../worker/share.js');
var port = worker.port;
// worker.port.start();

var age = document.querySelector("#age");
var result = document.querySelector("#result");

age.onchange = function() {
	worker.port.postMessage({
		type: "age",
		value: age.value
	});
}

worker.port.onmessage = function(message) {
	var data = message.data;
	result.innerHTML = data;
}

worker.port.onerror = function(error) {
	console.log(error);
}