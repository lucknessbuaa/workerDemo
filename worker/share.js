// dedicated worker
// var username = "";
// var age = "";

// onmessage = function(message) {
// 	var data = message.data;
// 	var type = data.type;
// 	var value = data.value;
// 	if (type === "name") {
// 		username = value || "";
// 	} else {
// 		age = value || "";
// 	}

// 	var result = "姓名: " + username + "  年龄: " + age;
// 	postMessage(result);
// }

// shared worker
// firefox can share username and age, but not automatic refresh
var username = "";
var age = "";
onconnect = function(e) {
	var port = e.ports[0];
	dump(e.ports);
	
	port.start();

	port.onmessage = function(message) {
		var data = message.data;
		var type = data.type;
		var value = data.value;
		if (type === "name") {
			username = value || "";
		} else {
			age = value || "";
		}
		
		var result = "姓名: " + username + "  年龄: " + age;
		dump(result);
		port.postMessage(result);
	}
}
