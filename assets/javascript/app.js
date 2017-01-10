	var timer = {

		 time: 30,

		 start: function(){
		   interval = setInterval(timer.count, 1 * 1000);
		 },

		 count: function(){
		   timer.time--;
		   $('#time').html("Time Remaining: " + timer.time);

		   if (timer.time === 0){
		     clearInterval(interval);
		     currentGame.endGame();
		   }

		   console.log(timer.time);
		 }
};


function submitAnswers(){
	var total = 5;
	var score = 0;

	//Gathering User Input

	var q1 = document.forms["quizForm"]["q1"].value;

	var q2 = document.forms["quizForm"]["q2"].value;

	var q3 = document.forms["quizForm"]["q3"].value;

	var q4 = document.forms["quizForm"]["q4"].value;

	var q5 = document.forms["quizForm"]["q5"].value;

	//validate
	for (i = 1; i <= total;i++) {
		if (eval('q'+1) == null || eval('q'+i) == ''){
			alert('Please answer question ' + i);
			return false;
		}
	}

	//Correct Answers
	var answers = ["c", "d", "b", "a", "b"];

	//Check answers

	for(i=1;i <=total;i++){
		if(eval('q'+ i) == answers[i-1]){
			score++;
			console.log(score);
		}
	}

}

$('#submit').click(function(){

	$('.container').html('');
	alert(score);

});
