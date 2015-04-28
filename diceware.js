function diceware(n){
	console.log(n);
}



$(document).ready(function() {

	$("form").submit(function( event ) {
		// get input from text box
		var n = $("input:text").val();
		// check if it's a number
		var digitRegex = /^\d+$/;
		if (!digitRegex.test(n)) {	
			// TODO change alert to text
			alert("Not a valid number\nTry something between 4 and 10");
			event.preventDefault();
			return;
		};
		// call function to get diceware words
		diceware(n);
		event.preventDefault();	// stops form from submitting
	});

});
