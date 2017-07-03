$(document).ready(function(){

  $("#done-button").hide();

  $("#start-button").click(function() {
    $("#start-button").hide();
    $("#done-button").show();

 

  //create a timer 
    var number = 30;
    var intervalId;

    // create a function that sets an interval 
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //create function that decrements once a second.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2> Time Remaining:  " + number + "</h2>");

      //  Once number hits zero...
      if (number === 0) {

      //  ...run the stop function.
        stop();

      //  Alert the user how many questions were answered
      $("#timer").hide();
      $("#done-button").hide();
      $("#questions").html("<h2> Thanks for playing!</h2>" + "<br>" + "<p>Correct Answers: </p>" + "<br>" + "Incorrect Answers: ")
      }
    }

    $("#done-button").click(function() {
      clearInterval(intervalId);
      $("#done-button").hide();
      $("#timer").hide();
      $("#questions").html("<h2> Thanks for playing!</h2>" + "<br>" + "<p>Correct Answers: </p>" + "<br>" + "Incorrect Answers: ")


    })

    //  Execute the run function.
    run();

  
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

      
      function createQuestions() {

          for (var i = 0; i < questionArray.length; i++){
            
            $("#questions").append(questionArray[i].question + "<br>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'selection-option' type='checkbox' value = ''>" + questionArray[i].choices[0] + "</label>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'selection-option' type='checkbox' value = ''>" + questionArray[i].choices[1] + "</label>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'selection-option' type='checkbox' value = ''>" + questionArray[i].choices[2] + "</label>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'selection-option' type='checkbox' value = ''>" + questionArray[i].choices[3] + "</label>"+"<br>"+"<br>");
   
          }
          
          //assign a click function to the check boxes 
           $(".checkbox-inline").on("click", function(){

          //capture correct and incorrect answers 
          var correctAnswers = []
          var wrongAnswers = []

          //capture the click funtion value/property and see if it equals the answer
            if($(this).is(':checked') === questionArray.answer) {

          //push to the correct answers array 
                console.log("That is correct");
                $(this).push(correctAnswers)

          //push to the incorrect answers array 
                } else {
                console.log("That's wrong")
                $(this).push(wrongAnswers)
              }
            });

      }; 
      
      createQuestions();
      
    
   });

}); 

   
