$(document).ready(function(){

  $("#done-button").hide();

  $("#start-button").click(function() {
    $("#start-button").hide();
    $("#done-button").show();

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
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'checkbox-value' type='checkbox' value = ''>" + questionArray[i].choices[0] + "</label>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'checkbox-value' type='checkbox' value = ''>" + questionArray[i].choices[1] + "</label>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'checkbox-value' type='checkbox' value = ''>" + questionArray[i].choices[2] + "</label>");
            $("#questions").append("<label class = 'checkbox-inline'><input id = 'checkbox-value' type='checkbox' value = ''>" + questionArray[i].choices[3] + "</label>"+"<br>"+"<br>");
   
    
              if ($(":checked").val() === questionArray[i].answer){
                  console.log("check box selected");
              } else {
                  console.log("That's not correct");
              }
          }

      }; 
      
      createQuestions();
      
      
//create a timer

    var number = 60;
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2> Time Remaining:" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
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

  });

}); 
//
    // $(".checkbox-inline").on("click", function(){
    // // function answerKey(){
    //       // data = $("input"),
    //       answerArray = ["The Engineers", "Prison", "Basketball", "8", "Motion sensor"]
            
    //       for (var i = 0; i < answerArray; i++){
    //         // if (data[i].checked) {
    //             if (indexOf(answerArray[i].value) !== -1){
    //             console.log("That's right");
    //             } else {
    //             console.log("That's wrong")
    //           }
    //         }
    //       // }   
    //    // answerKey();       
    //     });
