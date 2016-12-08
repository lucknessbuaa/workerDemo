/**
 * 1.shared worker and dedicated worker
 */

// dedicated worker
// var worker = new Worker('../worker/share.js');

// var username = document.querySelector("#name");
// var result = document.querySelector("#result");

// username.onchange = function() {
// 	worker.postMessage({
// 		type: "name",
// 		value: username.value
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

var username = document.querySelector("#name");
var result = document.querySelector("#result");

username.onchange = function() {
	worker.port.postMessage({
		type: "name",
		value: username.value
	});
}

worker.port.onmessage = function(message) {
	var data = message.data;
	result.innerHTML = data;
}

worker.port.onerror = function(error) {
	console.log(error);
}