

function calculate() {
	score = document.getElementById('gcsVerb').value * -1.315 +
	document.getElementById('gcsMot').value * -0.58 +
	document.getElementById('smokerBox').value * -0.083+
	document.getElementById('balBox').value * -0.051 +
	document.getElementById('acsBox').value * -0.022 +
	document.getElementById('sahBox').value * 0.052 +
	document.getElementById('sdhBox').value * 0.113 +
	document.getElementById('age').value * 0.994 +
	document.getElementById('iss').value * 1.462 +

	document.getElementById("score").innerHTML=score;
}
function updateTextInput(val, id) {
          document.getElementById(id).value=val; 
          calculate()
}

