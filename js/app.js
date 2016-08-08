var quiz = [{
		question: "Question 1: When was New York founded",
		answers: [1776, 1864, 1624, 1704, 1927],
		correctAnswer: 2
}, {
		question: "Question 2: What is the capital of New York?",
		answers: ["Albany", "New York City", "Manhattan", "Buffalo", "Brooklyn"],
		correctAnswer: 0
},  {
		question: "Question 3: What is New York City frequently known as?",
		answers: ["The Subway State", "The Windy City", "Land of Enchantment", "Melting Pot", "Sunshine State"],
		correctAnswer: 3
	}, {
		question: "Question 4: What are the 5 boroughs of New York City?",
		answers: ["Manhattan, the Bronx, Brooklyn, Albany, Staten Island",
			  "Manhattan, Ellis Island, Brooklyn, Queens, Staten Island",
			  "Albany, the Bronx, Brooklyn, Queens, Staten Island",
			  "Manhattan, SoHo, Brooklyn, Queens, Albany",
			  "Manhattan, the Bronx, Brooklyn, Queens, Staten Island"],
		correctAnswer: 4
	}, {
		question: "Question 5: What was New York City originally called?",
		answers: ["New England", "New Amsterdam", "The Big Apple", "New America", "Land of Liberty"],
		correctAnswer: 1
	}]

var i = 0;
var score = 0;

$(document).ready(function() {
 $('.choices').hide();
 $('#next').hide();	
 $('#results').hide();
 $('#start').on('click',function(){
 	$('#questions').text(quiz[i].question);
 	$('#zero').text(quiz[i].answers[0]);
 	$('#one').text(quiz[i].answers[1]);
 	$('#two').text(quiz[i].answers[2]);
 	$('#three').text(quiz[i].answers[3]);
 	$('#four').text(quiz[i].answers[4]);
 	$('#start').remove();
 	$('.choices').show('slow');
 	$('#next').show('slow');
   });

$(document).ready(function() {
	$(document).on('click', '#next',function() {
		var answer = $('input[name="answers"]:checked').val();
		var answerString = quiz[i].answers[answer];
			$('p[class="userAnswer"][value=' + i + ']').text(answerString);
		var correctAnswer = quiz[i].correctAnswer;
			$('p[class="correctAnswer"][value=' + i + ']').text(quiz[i].answers[correctAnswer]);
		if(answer == quiz[i].correctAnswer) {
			$('tr[class="row"][name=' + i + ']').css('background','#34c38d');
			score++;
		} else {
			$('tr[class="row"][name=' + i + ']').css('background','#ff4949');
		}			
		if(!$('input[name="answers"]').is(':checked')) {
			alert("Please choose an answer!");
			return undefined;
		}
		i++;
		$('#next').show('slow');

		if(i<5) {
			$('.choices').css('display','none');
			$('#questions').text(quiz[i].question);
			$('#zero').text(quiz[i].answers[0]);
			$('#one').text(quiz[i].answers[1]);
			$('#two').text(quiz[i].answers[2]);
			$('#three').text(quiz[i].answers[3]);
			$('#four').text(quiz[i].answers[4]);
			$('#five').text(quiz[i].answers[5]);
			$('.choices').show('slow');
			$('input[name="answers"]').prop('checked',false);
		}
		if(i>4) {
			$('#quiz').remove();
			$('#score').text("Congratulations! You have completed the quiz. You scored " + score +'/5 correctly: ' + score/5 * 100 +'%');
			$('#results').fadeIn('fast');
		}
	});


});//end of js






}); //end of code