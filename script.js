function fibonacci(num) {
// your code here
	var a = 0, b = 1;
	if(num == 1) 
		return a;
	else if(num == 2)
		return b;
	for(var i = 1; i <= num-2; i++){
		var temp = b;
		b = a + b;
		a = temp;
	}
	return b;
}

module.exports = fibonacci;
