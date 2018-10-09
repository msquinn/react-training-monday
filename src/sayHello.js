exports.greet = function greet(name){
	if (name===undefined) {
		return "Hello, World!";
	}
	return "Hello, "+name;
};
