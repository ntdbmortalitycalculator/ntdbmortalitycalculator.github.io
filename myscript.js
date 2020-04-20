window.onload = (event) => {
	checkboxChange();
	sliderChange();
}

function calculate() {

	console.log(document.getElementById('gcsVerb').value)
	console.log(document.getElementById('smokerBox').value)

	var score = 
	((document.getElementById('gcsVerb').value - 1)/4) * -1.315 +
	((document.getElementById('gcsMot').value - 1)/5) * -0.58 +
	document.getElementById('smokerBox').value * -0.083+
	document.getElementById('balBox').value * -0.051 +
	document.getElementById('acsBox').value * -0.022 +
	document.getElementById('sahBox').value * 0.052 +
	document.getElementById('sdhBox').value * 0.113 +
	((document.getElementById('age').value)/90) * 0.994 +
	((document.getElementById('iss').value -1)/74) * 1.462

	if (score<0.5){
		document.getElementById("RiskGroup").innerHTML = "Grade I (Predicted Mortality < 5%)"
	}
	else if (score<0.75){
		document.getElementById("RiskGroup").innerHTML = "Grade II (Predicted Mortality 5-15%)"
	}
	else if (score<1.0){
		document.getElementById("RiskGroup").innerHTML = "Grade III (Predicted Mortality 15-40%)"
	}
	else {
		document.getElementById("RiskGroup").innerHTML = "Grade IV (Predicted Mortality >40%)"
	}
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

function checkboxChange() {
	document.getElementById('sahBox').value = + document.getElementById('sahBox').checked
	document.getElementById('sdhBox').value = + document.getElementById('sdhBox').checked
	document.getElementById('smokerBox').value = + document.getElementById('smokerBox').checked
	document.getElementById('balBox').value = + document.getElementById('balBox').checked
	document.getElementById('acsBox').value = + document.getElementById('acsBox').checked
	calculate()
}

