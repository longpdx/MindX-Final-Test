function numberOneTriangle() {
	var num = document.getElementById("num").value;
	var result = document.getElementById("result2");
	var output = "";

	if (num < 1 || num > 10) {
		output = "Chỉ nhập một số nguyên từ 1 đến 10.";
	} else {
		for (var i = 1; i <= num; i++) {
			for (var j = 1; j <= i; j++) {
				output += "* ";
			}
			output += "<br>";
		}
	}

	result.innerHTML = output;
}
