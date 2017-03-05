var answers = ['D', 'G', 'K', 'N'], // correct answers
  data = $('input'), // all inputs from the DOM
  correctAnswer = 0, // correct answer
  wrongAnswer = 0, // wrong answer
  empty = 0, // empty ones
  counter = 40; // counter


function startGame(){
  // hide questions until the user click to start
  $('.data').css('display', 'none');

  
  for(var i = 0; i < data.length; i++){

    if(data[i].checked){

      //count correct answer
      if(answers.indexOf(data[i].value) !== -1){
        correctAnswer++;
      }

      // count wrong answer
      else{
        wrongAnswer++;
      }
    } 
  } 


  // number of unanswered question 
  var result = correctAnswer + wrongAnswer;

  if(result !== 4){
    empty = 4 - result;
  }


  // show the results to the DOM 
  $('.correct').html("You got " + correctAnswer + " correct answers!!!!!");
  $('.incorrect').html("You got " + wrongAnswer + " wrong answers");
  $('.empty').html("You have " + empty + " questions unanswered");
  $('.result p').addClass('stylish');

} 


$('.start').on('click', function(){
  // hide / show elements to the DOM
  $('.start').css('display', 'none');
  $('.data').css('display', 'block');


  // start counter
  var startCounter = setInterval(function(){
    counter--; 
    

    // not adding an extra 0 if the counter is greater than 9
    if(counter > 9){
      $('.counter').html("You have " + counter + " seconds remain to answer");
    }

    // adding an extra 0 if the counter is less than 9
    else if(counter <= 9){
      $('.counter').html("You have " + counter + " seconds remain to answer");
    }


    // If the counter is equal to 0, stop the game
    if(counter <= 0){
      clearInterval(startCounter); 
      startGame();

    }
  }, 1000); // end of the counter


  $('.done').on('click', function(){
    clearInterval(startCounter); // stop the counter
    startGame(); 
  });
});