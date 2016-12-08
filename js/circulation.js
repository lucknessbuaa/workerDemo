/**
 * 1.worker wouldn't block main thread
 * 2.if work not finish task, it would't trigger next
 */

var start = document.querySelector("#start");
var result = document.querySelector("#result");

var worker = new Worker("../worker/circulation.js");

start.onclick = function() {
	worker.postMessage(1);
}

worker.onmessage = function(message) {
	var data = message.data;
	result.innerHTML = data;
}

/**
 * not use worker
 */
// start.onclick = function() {
// 	// worker.postMessage(1);
// 	var start = 1;
// 	while (true) {
// 		start++;
// 	}
// }