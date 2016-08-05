var quiz = [{
		question: "When was New York founded",
		answers: [1776, 1864, 1624, 1704, 1927],
		correctAnswer: 2
}, {
		question: "What is the capital of New York?",
		answers: ["Albany, New York City, Manhattan, Buffalo, Brooklyn"],
		correctAnswer: 1
}, {
		question: "What are the 5 boroughs of New York?",
		answers: [{"Manhattan, the Bronx, Brooklyn, Albany, Staten Island"},
			  {"Manhattan, Ellis Island, Brooklyn, Queens, Staten Island"},
			  {"Albany, the Bronx, Brooklyn, Queens, Staten Island"},
			  {"Manhattan, SoHo, Brooklyn, Queens, Albany"},
			  {"Manhattan, the Bronx, Brooklyn, Queens, Staten Island"}],
		correctAnswer: 4
	}, {
		question: "What is New York frequently known as?",
		answers: ["The Subway State, The Windy City, Land of Enchantment, Melting Pot, Sunshine State"],
		correctAnswer: 3
	}, {
		question: "What was New York City originally called?",
		answers: ["New England, New Amsterdam, The Big Apple, New America, Land of Liberty"],
		correctAnswer: 1
	}, {
		question: "New York City was the nation's capital from 1789-1790.",
		answers: ["True, False"],
		correctAnswer: 0
}]

var i = 0;
var score = 0;

$(document).ready(function() {
 $('#start').on('click',function(){
 	$('#questions').text(quiz[i].question);
 	$('#zero').text(quiz[i].answers[0]);
 	$('#one').text(quiz[i].answers[1]);
 	$('#two').text(quiz[i].answers[2]);
 	$('#three').text(quiz[i].answers[3]);
 	$('#four').text(quiz[i].answers[4]);
 	$('#five').text(quiz[i].answers[5]);
 	$('#start').remove();
 	$('.choices').show('slow');
 	$('#next').show('slow');
   });







}); //end of code