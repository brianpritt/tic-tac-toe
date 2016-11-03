/////////Back-End////////////
function Player(playerName, mark){
  this.playerName = playerName;
  this.mark = mark;
}

var playerOne = new Player("playerOne", "X");
var playerTwo = new Player("playerTwo", "O");

var spaces = [
{marked: ""},{marked: ""},{marked: ""},
{marked: ""},{marked: ""},{marked: ""},
{marked: ""},{marked: ""},{marked: ""}
];

markedPlayer = function(currentPlayer, index) {
  spaces[index].marked = currentPlayer.mark;
}

switchPlayer = function(currentPlayer) {
  if (currentPlayer.playerName === "playerOne") {
    return currentPlayer = playerTwo;
  }
  else {
    return currentPlayer = playerOne;
  }
}

isItOver = function(click) {
  whoWon = "X"
  for (var index = 0; index < 2; index++){
    for (var x = 0; x < 9; x+=3)
      if (spaces[x].marked === whoWon && spaces[x+1].marked=== whoWon && spaces[x+2].marked ===whoWon){
      return whoWon;
    }
    for (var x = 0; x < 3; x+=1)
    if (spaces[x].marked === whoWon && spaces[x+3].marked=== whoWon && spaces[x+6].marked ===whoWon){
      return whoWon;
    }
    if((spaces[0].marked === whoWon && spaces[4].marked=== whoWon && spaces[8].marked ===whoWon) ||
      (spaces[2].marked === whoWon && spaces[4].marked=== whoWon && spaces[6].marked ===whoWon)){
        return whoWon;
    }
    whoWon = "O"
  } if (click === 9){
    return "noOne";
  }
}

clearSpaces = function(){
  for (index = 0;index < 9; index++){
    spaces[index].marked= "";
  }
}

//////////Front-End////////////
$(function() {

  $("#two-players").click(function() {
    $("#player-select").hide();
    $("#game-board").fadeIn(2000);
    startGame();
  });

  $(".startOver").click(function() {
    for (var index = 0; index < 9; index++) {
      $(".messageCenter").hide();
      $('.board').children().empty();
      clearSpaces();
      startGame();
    }
  });


  startGame = function() {
    var currentPlayer = playerOne;
    var click = 0;
    $(".board").click(function() {
      var value = this.id

      markedPlayer(currentPlayer , value);
      $(this).find("p").text(spaces[value].marked);
      currentPlayer = switchPlayer(currentPlayer);
      click ++;
      var winner = isItOver(click);
      if (winner === "X") {
        $(".board").off("click");
        $("#playerOneWinner").slideDown();
      }
      else if(winner === "O") {
        $(".board").off("click");
        $("#playerTwoWinner").slideDown();
      }
      else if (winner === "noOne") {
        $(".board").off("click");
        $("#catsGame").slideDown();
      }
      $(".space-" +value).off("click");
    })
  };
});//end of document.ready
