<html>
<head>
	<script src="myscript.js"></script>
	<link rel="stylesheet" href="styles.css">
</head>

<h1> NTDB Mortality Risk Calculator </h1>
<hr>

<form action="" id="calc" onsubmit="return false;">
	<div class="sliders">
		<div class="slidecontainer">
			<label for="gcsVerb">GCS: Verbal</label><br/>
	  		<input type="range" min="1" max="5" value="5" class="slider" id="gcsVerb" name="gcsVerb" onchange="sliderChange()">
	  		<output id="gcsVerbOutput"></output>
		</div>
		<div class="slidecontainer">
			<label for="gcsMot">GCS: Motor</label><br/>
	  		<input type="range" min="1" max="6" value="6" class="slider" id="gcsMot" name="gcsMot" onchange="sliderChange()"> 
	  		<output id="gcsMotOutput"></output>
		</div>
		<div class="slidecontainer">
			<label for="age">Age</label><br/>
	  		<input type="range" min="1" max="90" value="50" class="slider" id="age" name="age" onchange="sliderChange()"> 
	  		<output id="ageOutput"></output>
		</div>
		<div class="slidecontainer">
			<label for="iss">ISS</label><br/>
	  		<input type="range" min="1" max="75" value="75" class="slider" id="iss" name="iss" onchange="sliderChange()"> 
	  		<output id="issOutput"></output>
		</div>
	</div>
<hr id="mid">
<div class="checkboxes">
	<input type="checkbox" id="sahBox" name="sahBox" value="1" onchange="checkboxChange()">
	<label for="sahBox"> Subarachnoid Hemorrhage </label><br>
	<input type="checkbox" id="sdhBox" name="sdhBox" value="1" onchange="checkboxChange()">
	<label for="sdhBox"> Subdural Hemorrhage </label><br>
	<input type="checkbox" id="smokerBox" name="smokerBox" value="1" onchange="checkboxChange()">
	<label for="smokerBox"> Patient: Smoker</label><br>
	<input type="checkbox" id="balBox" name="balBox" value="1" onchange="checkboxChange()">
	<label for="balBox"> Blood Alcohol Level: Beyond Legal Limits </label><br>
	<input type="checkbox" id="acsBox" name="acsBox" value="1" onchange="checkboxChange()">
	<label for="acsBox"> Facility: ACS Level I</label><br>
</div>

<hr id="end">

<h2 id="RiskGroup"></h2>
<h4>Raw score: <text id="score">#</text> </h4>

</form>
</html>
