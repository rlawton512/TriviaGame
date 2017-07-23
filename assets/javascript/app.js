$(document).ready(function(){

  $("#done-button").hide();

  $("#start-button").click(function() {
    $("#start-button").remove();
    $("#done-button").show();

 

  //create a timer 
    var number = 45;
    var intervalId;

    // create a function that sets an interval 
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //create function that decrements once a second.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #timer tag.
      $("#timer").html("<h2> Time Remaining:  " + number + "</h2>");

      //  Once number hits zero...
      if (number === 0) {


      //  Alert the user how many questions were answered
      $("#timer").hide();
      $("#done-button").hide();
      answerCheck();
      $("#questions").html("<h2> Thanks for playing!</h2>" + "<br>" + "Correct Answers: " + correctAnswers + "<br>" + "<br>" + "Incorrect Answers: " + wrongAnswers)
      }         
    }

function answerCheck(){

        for(var i=0; i<questionArray.length; i++){

        
            var value = $('input[type=radio][name=question-'+i+']:checked').val();
            // console.log(value);

            if(value == questionArray[i].answer){
              correctAnswers++
            } else {
              wrongAnswers++
            }
        }
  }
   $("#done-button").click(function() {
      clearInterval(intervalId);
      answerCheck();
      $("#done-button").hide();
      $("#timer").hide();
      $("#questions").html("<h2> Thanks for playing!</h2>" + "<br>" + "Correct Answers: " + correctAnswers + "<br>" + "<br>" + "Incorrect Answers: " + wrongAnswers);
    }) 

    //  Execute the run function.
    run();

  
    // variables for correct and incorrect answers
    var correctAnswers = 0
    var wrongAnswers = 0
    //create multiple choice questions; player can pick only one answer
    var questionArray = [{
                question: "1) What are the forerunners of humanity known as in Prometheus?",
                choices: ["The Explorers","The Originators", "The Pioneers","The Engineers"],
                answer: 'The Engineers'
              },
              {
                question: "2) Where is Alien 3 set?",
                choices: ["Castle","Mining rig", "Monastery","Prison"],
                answer: 'Prison'
              },
              {
                question: "3) What game does Ripley play with the space pirates in Alien Resurrection?",
                choices: ["Knife throwing","Hockey", "Russian roulette","Basketball"],
                answer: 'Basketball'
              },
              {
                question: "4) What number clone was Ripley in Alien Resurrection?",
                choices: ["9","10", "8","7"],
                answer: '8'
              },
              {
                question: "5) Which of these did Ripley NOT duct-tape togther to make her DIY super-weapon in Aliens?",
                choices: ["Location tracker","Motion sensor", "Pulse rifle","Incinerator unit"],
                answer: 'Motion sensor'
              },
          ]
          
      //create questions and load them to document page
      function createQuestions() {

          for (var i = 0; i < questionArray.length; i++){
            
            $("#questions").append("<h4>" + questionArray[i].question + "</h4>");

              for(var j=0; j<questionArray[i].choices.length; j++){
                        $("#questions").append("<input type = 'radio' name = 'question-"+i+"' value = '" + questionArray[i].choices[j] + "'>  " + questionArray[i].choices[j]);
                      }
          }   

      }; 
      
      createQuestions();
      
    
   });

}); 