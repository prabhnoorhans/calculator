var result = document.getElementById("result");
var calculation = 0;
var value_1 = 0;
var value_2 = 0;
var valueS = "";
var valueSLength = 0;
var valueLength = 0;
var sign;
var fontSize = parseFloat(window.getComputedStyle(result, null).getPropertyValue("font-size"));

function reset() {
	value_1 = 0;
	value_2 = 0;
	valueS = "";
	sign = null;
	valueSLength = 0;
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
	if ((Number.isInteger(n) == true || n == '.') && valueLength < 16) {
		if (valueS == "" && n == ".") {
			valueS += 0;
		}
		valueS += n;
		console.log("ValueS: " + valueS + "");
		valueSLength = valueS.length;
		console.log("valueSLength: " + valueSLength + "");
		valueLength = valueSLength;
		if (valueS.includes('-') == true) {
			console.log("(-): true");
			valueLength -= 1;
		}
		if (valueS.includes('.') == true) {
			console.log("(.): true");
			valueLength -= 1;
		}
		if (valueS.includes('e+') == true) {
			var x = valueSLength - valueS.indexOf("e+");
			console.log("x: " + x + "");
			console.log("(e+): true");
			valueLength -= x;
		}
		console.log("valueLength: " + valueLength + "");
		result.innerHTML = valueS;
		if (valueSLength > 12 || valueLength > 10) {
			var diff = valueSLength - 10;
			console.log("Diff: " + diff + "");
			var twoDiff = diff * 2;
			console.log("twoDiff: " + twoDiff + "");
			result.style.fontSize = (fontSize - twoDiff) + 'px';
		}
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
	} else if ((n == '+' || n == '-' || n == 'x' || n == '/') && valueS == "") {
		value_1 = 0;
		console.log("Value 1: " + value_1 + "");
		valueS = "";
		plusMinus = false;
		sign = n;
		console.log("Sign: " + sign + "");
		result.innerHTML = sign;
	} else if ((n == '+' || n == '-' || n == 'x' || n == '/') && valueS != "") {
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
		valueSLength = valueS.length;
		console.log("valueSLength: " + valueSLength + "");
		valueLength = valueSLength;
		if (valueS.includes('-') == true) {
			console.log("(-): true");
			valueLength -= 1;
		}
		if (valueS.includes('.') == true) {
			console.log("(.): true");
			valueLength -= 1;
		}
		if (valueS.includes('e+') == true) {
			var x = valueSLength - valueS.indexOf("e+");
			console.log("x: " + x + "");
			console.log("(e+): true");
			valueLength -= x;
		}
		result.innerHTML = valueS;
		console.log("valueLength: " + valueLength + "");
		if (valueSLength > 12 || valueLength > 10) {
			var diff = valueSLength - 10;
			console.log("Diff: " + diff + "");
			var twoDiff = diff * 2;
			console.log("twoDiff: " + twoDiff + "");
			result.style.fontSize = (fontSize - twoDiff) + 'px';
		}
	}
	if (n == 'plusMinus') {
		if (valueS.includes('-') == true) {
			valueSLength = valueS.length;
			console.log("ValueS length(plusMinus): " + valueSLength + "");
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
		valueSLength = valueS.length - 1;
		console.log("Value length(del): "  + valueSLength + "");
		valueS = valueS.slice(0, valueSLength);
		console.log("ValueS(del): " + valueS + "");
		valueLength = valueSLength;
		if (valueS.includes('-') == true) {
			console.log("(-): true");
			valueLength -= 1;
		}
		if (valueS.includes('.') == true) {
			console.log("(.): true");
			valueLength -= 1;
		}
		if (valueS.includes('e+') == true) {
			var x = valueSLength - valueS.indexOf("e+");
			console.log("x: " + x + "");
			console.log("(e+): true");
			valueLength -= x;
		}
		console.log("valueLength: " + valueLength + "");
		result.innerHTML = valueS;
		if (valueSLength > 12 || valueLength > 10) {
			fontSize = parseFloat(window.getComputedStyle(result, null).getPropertyValue("font-size"));
			result.style.fontSize = (fontSize + 2) + 'px';
		} else {
			result.style.fontSize = '37px';
		}
		if (valueS == "") {
			result.innerHTML = 0;
		}
	}
	if (n == 'clearAll') {
		reset();
		console.log("All variable restored to default");
		result.innerHTML = 0;
		result.style.fontSize = '37px';
	}
	if (n == 'clearEntry') {
		valueS = "";
		console.log("clearEntry");
		result.innerHTML = 0;
		result.style.fontSize = '37px';
	}
}