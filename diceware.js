/* global $, document */

// 
function diceware(n, id) {
    var i, j;
    $(id).empty();
	$.getJSON("words.json", function (data) {
        for (i = 0; i < n; i++) {
            var index = "";
            for (j = 0; j < 5; j++) {
                index = index.concat(String(Math.floor((Math.random() * 6) + 1)));
            }
            $(id).append(data[index]);
            $(id).append(" ");
        }
    });
}



$(document).ready(function() {
    
    diceware(6, "#result");

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
		}
		// call function to get diceware words
		diceware(n, "#result");
		event.preventDefault();	// stops form from submitting
	});

    $("#refresh").click( function() {
       diceware(6, "#result"); 
    }); 
});
