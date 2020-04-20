

function calculate() {
	var score = document.getElementById('gcsVerb').value * -1.315 +
	document.getElementById('gcsMot').value * -0.58 +
	document.getElementById('smokerBox').value * -0.083+
	document.getElementById('balBox').value * -0.051 +
	document.getElementById('acsBox').value * -0.022 +
	document.getElementById('sahBox').value * 0.052 +
	document.getElementById('sdhBox').value * 0.113 +
	document.getElementById('age').value * 0.994 +
	document.getElementById('iss').value * 1.462

    console.log(document.getElementById('balBox').value)
    console.log(document.getElementById('sahBox').value)
    console.log(document.getElementById('gcsVerb').value)

	document.getElementById("score").innerHTML=score;
}

function sliderChange() {
   var gcsMot = document.getElementById("gcsMot").value //gets the oninput value
   var gcsVerb = document.getElementById("gcsVerb").value
   var age = document.getElementById("age").value
   var iss = document.getElementById("iss").value
   document.getElementById('gcsMotOutput').innerHTML = gcsMot //displays this value to the html page
   document.getElementById('gcsVerbOutput').innerHTML = gcsVerb //displays this value to the html page
   document.getElementById('ageOutput').innerHTML = age //displays this value to the html page
   document.getElementById('issOutput').innerHTML = iss //displays this value to the html page
   calculate()
}

function convertBinary(id) {
	document.getElementById(id).value = + document.getElementById(id).checked
}

