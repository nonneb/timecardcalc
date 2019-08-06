function calc() {
	var mondayClockIn = getHrMin(document.getElementById("mondayIn").value);
	var mondayClockOut =getHrMin( document.getElementById("mondayOut").value);
	var tuesdayClockIn =getHrMin(document.getElementById("tuesdayIn").value);
	var tuesdayClockOut = getHrMin(document.getElementById("tuesdayOut").value);
	var wednesdayClockIn = getHrMin(document.getElementById("wednesdayIn").value);
	var wednesdayClockOut = getHrMin(document.getElementById("wednesdayOut").value);
	var thursdayClockIn = getHrMin(document.getElementById("thursdayIn").value);
	var thursdayClockOut = getHrMin(document.getElementById("thursdayOut").value);
	var fridayClockIn = getHrMin(document.getElementById("fridayIn").value);
	var fridayClockOut = getHrMin(document.getElementById("fridayOut").value);
	var saturdayClockIn = getHrMin(document.getElementById("saturdayIn").value);
	var saturdayClockOut = getHrMin(document.getElementById("saturdayOut").value);
	var sundayClockIn = getHrMin(document.getElementById("sundayIn").value);
	var sundayClockOut = getHrMin(document.getElementById("sundayOut").value);

	var mondayTime = getDiff(mondayClockIn, mondayClockOut);
	var tuesdayTime = getDiff(tuesdayClockIn, tuesdayClockOut);
	var wednesdayTime = getDiff(wednesdayClockIn, wednesdayClockOut);
	var thursdayTime = getDiff(thursdayClockIn, thursdayClockOut);
	var fridayTime = getDiff(fridayClockIn, fridayClockOut);
	var saturdayTime = getDiff(saturdayClockIn, saturdayClockOut);
	var sundayTime = getDiff(sundayClockIn, sundayClockOut);
	

	var totalMinutes = +mondayTime[1] + +tuesdayTime[1] + +wednesdayTime[1] + +thursdayTime[1] + +fridayTime[1] + +saturdayTime[1] + sundayTime[1];


	var totalHours = +mondayTime[0] + +tuesdayTime[0] + +wednesdayTime[0] + +thursdayTime[0] + +fridayTime[0] + +saturdayTime[0] + sundayTime[0];

	if (totalMinutes >=60) {
		totalHours = totalHours + (totalMinutes - (totalMinutes % 60))/60;
		totalMinutes = totalMinutes % 60;
	}
	//alert(totalHours + ':' + totalMinutes);			
	document.getElementById("totalHours").innerHTML = totalHours + 'hrs ' + totalMinutes + 'mins' + '<br>' + (Number(totalHours) + Number((totalMinutes/60).toFixed(2)));

}

function checkNumber(a) {
	a = +a || 0;
}

function getHrMin(time) {
	var digits = time.split("");
	return [digits[0] + digits[1] || 0, digits[2] + digits[3] ||  0];
}

function getDiff(timein, timeout) {
	if (timein[1] > timeout[1]) {
		timeout[0]--;
		timeout[1]=Number(timeout[1]) + 60;;
	}
	if (Number(timeout[0]) < Number(timein[0])) {
		alert(`Please make sure clock-out times are later than clock-in times`);
		return;
	}
	return[(timeout[0] - timein[0]), (timeout[1] - timein [1])]
}

function test() {
	alert(`The button is working.`);
}
