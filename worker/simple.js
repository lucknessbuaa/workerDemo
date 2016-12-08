onmessage = function(message) {
	var data = message.data;
	var name = data.name || '';
	var age = data.age || '';
	var result = "姓名: " + name + "  年龄: " + age;
	postMessage(result);
}