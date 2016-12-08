onmessage = function(e) {
	var start = e.data;
	console.log(start);
	while(true) {
		start++;
	}
	postMessage(start);
}

// onmessage = function(e) {
// 	var start = e.data;
// 	console.log(start);
// 	while(start < 5000000000) {
// 		start++;
// 	}
// 	postMessage(start);
// }