var worker = new Worker("../worker/fibonacci.js");
var result = document.querySelector('#result');

worker.onmessage = function(event) {
	result.textContent = event.data;
}

worker.onerror = function(error) {

}

worker.postMessage("5");