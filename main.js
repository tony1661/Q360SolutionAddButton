function add() {
	console.log('Add Button Clicked');
	document.getElementById('modal-box').style.display = "block";
}
// $(function () {
//     $('#datetimepicker1').datetimepicker();
// });
// $('#datetimepicker3').datetimepicker({
//     format: 'LT'
// });


$(function () {
	$('.datepicker').datepicker({
	    format: 'mm/dd/yyyy',
	    todayHighlight: 'True',
	    keyboardNavigation: 'True',
	    assumeNearbyYear: 'True'
	});
	$('.timepicker').datetimepicker({
	    stepping: 30,
	    sideBySide: true
	});
});
$("#submitsolution").click(function() {
	var goahead = 0;
	if (!$("#datetime").val()) {
		$("div.datetime").addClass("has-error");
		$("#datetime").removeClass("glyphicon-time");
		$("#datetime").addClass("glyphicon-remove");

	} else {
		$("div.datetime").removeClass("has-error");
		$("#datetime").addClass("glyphicon-time");
		$("#datetime").removeClass("glyphicon-remove");
		goahead = goahead + 1;
	};
	if (!$("#initials").val()) {
		$("div.initials").addClass("has-error");
		$("#initials").removeClass("glyphicon-time");
		$("#initials").addClass("glyphicon-remove");

	} else {
		$("div.initials").removeClass("has-error");
		$("#initials").addClass("glyphicon-time");
		$("#initials").removeClass("glyphicon-remove");
		goahead = goahead + 2;
	};
	if (!$("#location").val()) {
		$("div.location").addClass("has-error");
		$("#location").removeClass("glyphicon-time");
		$("#location").addClass("glyphicon-remove");

	} else {
		$("div.location").removeClass("has-error");
		$("#location").addClass("glyphicon-time");
		$("#location").removeClass("glyphicon-remove");
		goahead = goahead + 3;
	};
	if (!$("#notes").val()) {
		$("div.notes").addClass("has-error");
		$("#notes").removeClass("glyphicon-time");
		$("#notes").addClass("glyphicon-remove");

	} else {
		$("div.notes").removeClass("has-error");
		$("#notes").addClass("glyphicon-time");
		$("#notes").removeClass("glyphicon-remove");
		goahead = goahead + 4;
	};
	if (!$("#parts").val()) {
		$("div.parts").addClass("has-error");
		$("#parts").removeClass("glyphicon-time");
		$("#parts").addClass("glyphicon-remove");

	} else {
		$("div.parts").removeClass("has-error");
		$("#parts").addClass("glyphicon-time");
		$("#parts").removeClass("glyphicon-remove");
		goahead = goahead + 5;
	};
	console.log(goahead);
	if (goahead == 15) {
		console.log('submitted');
		console.log(goahead);
		var newentry = $("#solution").val() + "\n" + $("#datetime").val() + " - " + $("#initials").val() + " " + $("#location").val() + " " + $("#notes").val() + " \n        Parts:\n" + $("#parts").val();
		$("#solution").val(newentry);
		document.getElementById('modal-box').style.display = "none";
	};
});


