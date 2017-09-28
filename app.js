new Vue({
  el: '#app',
  data: {
    beginning: true,
    userChoice: 0,
    compChoice: 0,
    log: [],
    compWins: 0,
    userWins: 0,
    userWidth: 0,
    compWidth: 0,
    timer: '',
    time: 60,
    userAction: 0,
    finalScore: 0
  },
  methods: {
      startGame: function () {
          this.beginning = false;
          this.compChoose();
          this.beginTime();
      },

      //computer makes choice
      compChoose: function () {

          this.compChoice = Math.floor(Math.random() * 3);
          this.userAction = Math.floor(Math.random() * 3);

          //computer chooses rock
          if (this.compChoice == 0) {
              //determine if user needs to tie(0), win(1), or lose(2)
              if (this.userAction == 0) {
                  this.log.unshift({
                      message: "Computer chooses rock. Tie this!",
                      isTie: true,
                      isWin: false,
                      isLoss: false
                  });
              }
              else if (this.userAction == 1) {
                  this.log.unshift({
                      message: "Computer chooses rock. Win!",
                      isTie: false,
                      isWin: true,
                      isLoss: false
                  });
              }
              else {
                  this.log.unshift({
                      message: "Computer chooses rock. Lose!",
                      isTie: false,
                      isWin: false,
                      isLoss: true
                  });
              }

          }
          else if (this.compChoice == 1) {
              //determine if user needs to win, lose, or tie
              if (this.userAction == 0) {
                  this.log.unshift({
                      message: "Computer chooses paper. Tie this!",
                      isTie: true,
                      isWin: false,
                      isLoss: false
                  });
              }
              else if (this.userAction == 1) {
                  this.log.unshift({
                      message: "Computer chooses paper. Win!",
                      isTie: false,
                      isWin: true,
                      isLoss: false
                  });
              }
              else {
                  this.log.unshift({
                      message: "Computer chooses paper. Lose!",
                      isTie: false,
                      isWin: false,
                      isLoss: true
                  });
              }
          }
          else if (this.compChoice == 2) {
              //determine if user needs to win, lose, or tie
              if (this.userAction == 0) {
                  this.log.unshift({
                      message: "Computer chooses scissors. Tie this!",
                      isTie: true,
                      isWin: false,
                      isLoss: false
                  });
              }
              else if (this.userAction == 1) {
                  this.log.unshift({
                      message: "Computer chooses scissors. Win!",
                      isTie: false,
                      isWin: true,
                      isLoss: false
                  });
              }
              else {
                  this.log.unshift({
                      message: "Computer chooses scissors. Lose!",
                      isTie: false,
                      isWin: false,
                      isLoss: true
                  });
              }
          }
      },

      rockChoice: function () {
          this.userChoice = 0;
          this.gameOutcome();
          this.startGame();
      },
      paperChoice: function () {
          this.userChoice = 1;
          this.gameOutcome();
          this.startGame();
      },
      scissorChoice: function () {
          this.userChoice = 2;
          this.gameOutcome();
          this.startGame();
      },

      gameOutcome: function () {
          //if computer chose rock -- to tie
          if (this.compChoice == 0 && this.userAction == 0) {
              if (this.userChoice == 0) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 2;
                  this.log.unshift({message: "Incorrect!"})
              }
          }
          //to win
          else if (this.compChoice == 0 && this.userAction == 1) {
              if (this.userChoice == 1) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 2;
                  this.log.unshift({message: "Incorrect!"})
              }
          }
          //to lose
          else if (this.compChoice == 0 && this.userAction == 2) {
              if (this.userChoice == 2) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 2;
                  this.log.unshift({message: "Incorrect!"})
              }
          }

          //if computer chose paper -- to tie
          else if (this.compChoice == 1 && this.userAction == 0) {
              if (this.userChoice == 1) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 5;
                  this.log.unshift({message: "Incorrect!"})
              }
          }
          //to win
          else if (this.compChoice == 1 && this.userAction == 1) {
              if (this.userChoice == 2) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 5;
                  this.log.unshift({message: "Incorrect!"})
              }
          }
          //to lose
          else if (this.compChoice == 1 && this.userAction == 2) {
              if (this.userChoice == 0) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 5;
                  this.log.unshift({message: "Incorrect!"})
              }
          }

          //if computer chose scissors --- to tie
          else if (this.compChoice == 2 && this.userAction == 0) {
              if (this.userChoice == 2) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 5;
                  this.log.unshift({message: "Incorrect!"})
              }
          }
          //to win
          else if (this.compChoice == 2 && this.userAction == 1) {
              if (this.userChoice == 0) {
                  this.userWins++;
                  this.userWidth++;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 5;
                  this.log.unshift({message: "Incorrect!"})
              }
          }
          //to lose
          else if (this.compChoice == 2 && this.userAction == 2) {
              if (this.userChoice == 1) {
                  this.userWins++;
                  this.userWidth += 2.5;
                  this.log.unshift({message: "Correct!"});
              } else {
                  this.compWins += 2;
                  this.compWidth += 5;
                  this.log.unshift({message: "Incorrect!"})
              }
          }

          //when user or computer reaches 10 wins, end game
          if (this.time == 0) {

              //subtract computer wins from user wins to calculate final score.
              this.finalScore = this.userWins - this.compWins;

              if (this.finalScore == 0) {
                  //tie
                  //display userWins,
                  //display compWins,
                  //show subtraction
                  //Final score: finalScore
                  //display message - Wow, you tied the computer. play again?

                  //resetGame
              }
              else if (this.finalScore < 0) {
                  //loss
                  //display userWins,
                  //display compWins,
                  //show subtraction
                  //Final score: finalScore
                  //display message - You reached userWins points, but ultimately lost. Play again?

                  //resetGame
              }
              else {
                  //win
                  //display userWins,
                  //display compWins,
                  //show subtraction
                  //Final score
                  //display message - You reached userWins points and beat the computer. Play again?

                  //resetGame
              }
          }
      },
      resetGame: function () {
          //reset the game - clear game log, reset scores for new game
          this.log = [];
          this.userWidth = 0;
          this.compWidth = 0;
          this.userWins = 0;
          this.compWins = 0;
      },
      beginTime: function(){
          this.timer = setInterval(function(){
              return this.time++;
          }, 1000);
      }
  },
    computed: {

    }
});