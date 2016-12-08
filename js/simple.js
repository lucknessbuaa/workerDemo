var worker = new Worker('../worker/simple.js');

var username = document.querySelector("#name");
var age = document.querySelector("#age");
var result = document.querySelector("#result");

// use name as parameter will fail
username.onchange = function() {
	worker.postMessage({
		name: username.value,
		age: age.value
	});
}

age.onchange = function() {
	worker.postMessage({
		name: username.value,
		age: age.value
	});
}

worker.onmessage = function(message) {
	var data = message.data;
	result.innerHTML = data;
}



/**
 * second example
 * user name as parameter
 * why use name as paramter will fail
 */ 
// var worker = new Worker('../worker/simple.js');

// var name = document.querySelector("#name");
// var age = document.querySelector("#age");
// var result = document.querySelector("#result");

// name.onchange = function() {
// 	worker.postMessage({
// 		name: name.value,
// 		age: age.value
// 	});
// 	console.log("Message posted to worker");
// }

// age.onchange = function() {
// 	worker.postMessage({
// 		name: name.value,
// 		age: age.value
// 	});
// 	console.log("Message posted to worker");
// }

// worker.onmessage = function(message) {
// 	var data = message.data;
// 	result.innerHTML = data;
// }


/**
 * jquery type
 */
// $(function() {
// 	var worker = new Worker('../worker/simple.js');

// 	var name = $("#name");
// 	var age = $("#age");
// 	var result = $("#result");

// 	name.on('change', function() {
// 		worker.postMessage({
// 			name: name.val(),
// 			age: age.val()
// 		});
// 		console.log("Message posted to worker");
// 	});

// 	age.on('change', function() {
// 		worker.postMessage({
// 			name: name.val(),
// 			age: age.val()
// 		});
// 		console.log("Message posted to worker");
// 	});

// 	worker.onmessage = function(message) {
// 		var data = message.data;
// 		result.text(data);
// 	}
// });