function TempTracker() {
	//Properties:
	this.tempArr = [];
	this.maxVal = 0;
	this.minVal = 0;
	this.avgVal = 0;
	this.tempValue = 0;
	this.modeValue = 0;
	var SUM = 0;


	//insert method: records a new temperature set
	this.insert = function(tempInput) {
		if (typeof tempInput === "number") { //check if tempInput is a num
			this.tempArr.push(tempInput);
			this.tempValue = tempInput; //append to temp value array
		}
	// console.log("most recently entered temp: " + this.tempValue);

	}

	// //returns the highest temp we've seen so far
	this.getMax = function() {
		for (var i = 0; i < (this.tempArr.length); i++) {
			this.maxVal = Math.max.apply(Math, this.tempArr);
		}
		console.log("max: " + this.maxVal);

 	}
	// //returns the lowest temp we've seen so far
	this.getMin = function() {
		for (var i = 0; i < (this.tempArr.length); i++) {
			this.minVal = Math.min.apply(Math, this.tempArr);
		}	
		console.log("min: " + this.minVal);

	}
	// //returns the average of all the temps we've seen so far
	this.getMean = function() {
		for (var i = 0; i < (this.tempArr.length); i++) {
			SUM += this.tempArr[i];
		}
		this.avgVal = SUM / this.tempArr.length;
		console.log("mean: " + this.avgVal);

	}
	// //returns a mode of all the temps we've seen so far (mode = value that occurs most often)
	this.getMode = function() {
		var countTimes = [];
		var mostOften = 0;

		this.tempArr.forEach(function findMode(val) {
			countTimes[val] = (countTimes[val] || 0) +1;

			if(mostOften < countTimes[val]) {
				mostOften = countTimes[val];
				this.modeValue = val;
			}
		});
		var modeFinal = +this.modeValue;
		console.log("mode: " + modeValue);
		}



}
var getTemp = new TempTracker();
getTemp.insert(13);
getTemp.insert(6);
getTemp.insert(8);
getTemp.insert(6);
getTemp.insert(4);
getTemp.insert(11);
getTemp.insert(11);
getTemp.insert(6);
getTemp.insert(8);

getTemp.getMax();
getTemp.getMin();
getTemp.getMean();
getTemp.getMode();
