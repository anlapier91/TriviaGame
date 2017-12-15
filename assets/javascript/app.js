// ==================== VARIABLES ========================= //

    var intervalId;

  //prevents the clock from being sped up unnecessarily
    var clockRunning = false;

// questions array of objects
var questions = [
  {
    q: ["Which Final Fantasy is the most widely released game in the series?",
        "Which Final Fantasy has the smallest inventory in the series?",
        "Which Final Fantasy is the only game in the series to have more playable female characters than male?",
        "Which Final Fantasy has the longest ending in the series?",
        "Which Final Fantasy was the last game in the series to feature the Active Time Battle (ATB) system?",
        "Which Final Fantasy was the first to feature voice acting?",
        "Which Final Fantasy was the fastest selling game in the series?",
        "Which Final Fantasy had the longest developement time in the series?"];

  choices: ["Final Fantasy", "Final Fantasy II", "Final Fantasy III", 
            "Final Fantasy IV", "Final Fantasy V","Final Fantasy VI", 
            "Final Fantasy VII", "Final Fantasy VIII", "Final Fantasy IX", 
            "Final Fantasy X","Final Fantasy XI", "Final Fantasy XII", 
            "Final Fantasy XIII", "Final Fantasy XIV", "Final Fantasy XV"];

   answer: ["Final Fantasy", "Final Fantasy II", "Final Fantasy V", "Final Fantasy VI",
            "Final Fantasy IX", "Final Fantasy X", "Final Fantasy XIII", "Final Fantasy XV"];
  }
]

// ======================== FUNCTIONS ================== //
    var timer = {

      time: 80,

     start: function() {

      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
          intervalId = setInterval(timer.count, 1000);
          clockRunning = true;
      }
    },

    stop: function() {

      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {

      // DONE: decrease time by 1
      timer.time--;

  $("#display").text(timer.time);
    },

      reset: function() {

      timer.time = 80;

      // DONE: Change the "display" div to "80."
      $("#display").text("80");
  },
};

// setGame function
function setGame(){
  // start the timer by calling the timer.start function
  timer.start();
  $("#question-display").append('quesitons.q', 'questions.choices');


  // loop over the questions array and display each question along with the respective choices
  for (var i = 0; i < questions.length; i++) {
    // use jquery to obtain the div to display questions
    // use jquery to create a h3 tag and assign it the question itself as text
    // append answer plus 3 other choices to each question ... 
    // use if/else to assign points for correct and incorrect answers.
    // append questions and answers to html
    // use fuction and if/else loop to cause the game to end depending on the number of 
    // questions answered and time remaining.
    // use jQuery to dynamically generate an ending screen that shows total score 
    // and correct answers to incorrect quesitons
    // total the number of points and append it to the ending screen
    // 
  }
    

}

function scoreScreen(){
$("#score-display").text("You got " + (score) + "out of 10 questions correct.")
}



// ==================== EVENT LISTENERS ================ //




window.onload = function() {
  $("#start").on("click", setGame());
};

if (timer.time) == 0 {
  stop();
  scoreScreen();

}

if (user.choice == answer){
  score ++;
} 
