var result = document.getElementById("result");
var calculation = 0;
var value_1 = 0;
var value_2 = 0;
var valueS = "";
var dLength = 0;
var sign;
var valueLength;

function reset() {
	value_1 = 0;
	value_2 = 0;
	valueS = "";
	sign = null;
	valueLength = 0;
}

document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
	var keyCode = e.keyCode;
	if (keyCode >= 96 && keyCode <= 105) {input(keyCode - 96);}
	 else if (keyCode >= 48 && keyCode <= 57) {input(keyCode - 48);}
	 else if (keyCode == 107) {input('+');}
	 else if (keyCode == 109) {input('-');}
	 else if (keyCode == 106) {input('x');}
	 else if (keyCode == 111) {input('/');}
	 else if (keyCode == 190 || keyCode == 110) {input('.');}
	 else if (keyCode == 27) {input('clearAll');}
	 else if (keyCode == 46) {input('clearEntry');}
	 else if (keyCode == 187 || keyCode == 13) {input('=')}
	 else if (keyCode == 8) {input('del');}
	 else if (keyCode == 120) {input('plusMinus');}
}

function input(n) {
	if (Number.isInteger(n) == true || n == '.') {
		valueS += n;
		console.log("ValueS: " + valueS + "");
		console.log("dLength: " + dLength + "");
		result.innerHTML = valueS;
	}
	if ((n == '+' || n == '-' || n == 'x' || n == '/') && (sign == '+' || sign == '-' || sign == 'x' || sign == '/')) {
		value_2 = parseFloat(valueS);
		valueS = "";
		console.log("Value 2: " + value_2 + "");
		if (sign == '+') {
			value_1 = value_1 + value_2;
		} else if (sign == '-') {
			value_1 = value_1 - value_2;
		} else if (sign == 'x') {
			value_1 = value_1 * value_2;
		} else if (sign == '/') {
			value_1 = value_1 / value_2;
		}
		console.log("Value 1(continue): " + value_1 + "");
		sign = n;
		console.log("Sign(new): " + sign + "");
		result.innerHTML = sign;
	} else if (n == '+' || n == '-' || n == 'x' || n == '/') {
		value_1 = parseFloat(valueS);
		console.log("Value 1: " + value_1 + "");
		valueS = "";
		plusMinus = false;
		sign = n;
		console.log("Sign: " + sign + "");
		result.innerHTML = sign;
	}
	if (n == '=') {
		value_2 = parseFloat(valueS);
		valueS = "";
		console.log("Value 2: " + value_2 + "");
		if (sign == '+') {
			calculation = value_1 + value_2;
		} else if (sign == '-') {
			calculation = value_1 - value_2;
		} else if (sign == 'x') {
			calculation = value_1 * value_2;
		} else if (sign == '/') {
			calculation = value_1 / value_2;
		}
		console.log("Answer: " + calculation + "");
		reset();
		valueS += calculation;
		result.innerHTML = valueS;
	}
	if (n == 'plusMinus') {
		if (valueS.includes('-') == true) {
			valueLength = valueS.length;
			console.log("Value length(plusMinus): " + valueLength + "");
			valueS = valueS.replace('-', '');
			console.log("valueS(plusMinus): " + valueS + "");
			result.innerHTML = valueS;
		} else {
			valueS = "-" + valueS;
			console.log("ValueS(plusMinus): " + valueS + "");
			result.innerHTML = valueS;
		}
	}
	if (n == 'del') {
		valueLength = valueS.length - 1;
		console.log("Value length(del): "  + valueLength + "");
		valueS = valueS.slice(0, valueLength);
		console.log("ValueS(del): " + valueS + "");
		result.innerHTML = valueS;
	}
	if (n == 'clearAll') {
		reset();
		console.log("All variable restored to default");
		result.innerHTML = 0;
	}
	if (n == 'clearEntry') {
		valueS = "";
		console.log("clearEntry");
		result.innerHTML = 0;
	}
}