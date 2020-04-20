<script src="myscript.js"></script>
<h1> NTDB Calculator </h1>

<form action="" id="calc" onsubmit="return false;">
	<div class="sliders">
		<div class="slidecontainer">
			<label for="gcsVerb">GCS: Verbal</label><br/>
	  		<input type="range" min="1" max="5" value="5" class="slider" id="gcsVerb" name="gcsVerb" onchange="updateTextInput(this.value, textInput);"> <input type="text" id="textInput" value="">
		</div>
		<div class="slidecontainer">
			<label for="gcsMot">GCS: Motor</label><br/>
	  		<input type="range" min="1" max="6" value="6" class="slider" id="gcsMot" name="gcsMot" onchange="updateTextInput(this.value, textInput2);"> <input type="text" id="textInput2" value="">
		</div>
		<div class="slidecontainer">
			<label for="age">Age</label><br/>
	  		<input type="range" min="1" max="90" value="50" class="slider" id="age" name="age" onchange="updateTextInput(this.value, textInput3);"> <input type="text" id="textInput3" value="">
		</div>
		<div class="slidecontainer">
			<label for="iss">ISS</label><br/>
	  		<input type="range" min="1" max="75" value="75" class="slider" id="iss" name="iss" onchange="updateTextInput(this.value, textInput4);"> <input type="text" id="textInput4" value="">
		</div>
	</div>

<div class="checkboxes">
	<input type="checkbox" id="sahBox" name="sahBox" value="SAH" onchange="calculate()">
	<label for="sahBox"> Subarachnoid Hemorrhage </label><br>
	<input type="checkbox" id="sdhBox" name="sdhBox" value="SDH" onchange="calculate()">
	<label for="sdhBox"> Subdural Hemorrhage </label><br>
	<input type="checkbox" id="smokerBox" name="smokerBox" value="Smoker" onchange="calculate()">
	<label for="smokerBox"> Patient: Smoker</label><br>
	<input type="checkbox" id="balBox" name="balBox" value="BAL" onchange="calculate()">
	<label for="balBox"> Blood Alcohol Level: Beyond Legal Limits </label><br>
	<input type="checkbox" id="acsBox" name="acsBox" value="ACS" onchange="calculate()">
	<label for="acsBox"> Facility: ACS Level I</label><br>
</div>

<button onclick="calculate()"> Check </button>
<h3>"Score is:" + <text id="score">score</text> </h3>
</form>

