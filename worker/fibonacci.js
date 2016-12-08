/**
 * self reference to worker global object
 * chrome not support Worker in Worker
 */

var results = [];

onmessage = function(event) {
	var n = parseInt(event.data);
	if (n == 0 || n == 1) {
		postMessage(n);
		return;
	}

	for (var i = 1; i <= 2; i++) {
		// "Worker" is undefined in chrome, only firefox support
		var worker = new Worker("fibonacci.js");
		worker.onmessage = function(event) {
			results.push(parseInt(event.data));
			if (results.length == 2) {
				postMessage(results[0] + results[1]);
			}
		}

		worker.onerror = function(event) {
			throw event.data;
		}

		worker.postMessage(n - i);
	}
}