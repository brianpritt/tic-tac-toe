/////////Back-End////////////
var spaces = [
{marked: ""},{marked: ""},{marked: ""},
{marked: ""},{marked: ""},{marked: ""},
{marked: ""},{marked: ""},{marked: ""}
];

function Player(playerName, mark){
  this.playerName = playerName;
  this.mark = mark;
}

var playerOne = new Player("playerOne", "X");
var playerTwo = new Player("playerTwo", "O");

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
isItOver = function() {
  whoWon = "X"
  for (var index = 0; index < 2; index++){
    for (var x = 0; x < 9; x+=3)
      if (spaces[x].marked === whoWon && spaces[x+1].marked=== whoWon && spaces[x+2].marked ===whoWon){
      alert(whoWon+ " wins");
    }
    for (var x = 0; x < 3; x+=1)
    if (spaces[x].marked === whoWon && spaces[x+3].marked=== whoWon && spaces[x+6].marked ===whoWon){
      alert(whoWon +" wins");
    }
    if((spaces[0].marked === whoWon && spaces[4].marked=== whoWon && spaces[8].marked ===whoWon) ||
      (spaces[2].marked === whoWon && spaces[4].marked=== whoWon && spaces[6].marked ===whoWon)){
        alert(whoWon +" wins");
    }
    whoWon = "O"
  }
}
//////////Front-End////////////
$(function() {
  var currentPlayer = playerOne;


  $("#two-players").click(function() {
    $("#player-select").hide();
    $("#game-board").fadeIn(2000);
  });

  $(".board").click(function() {
    var value = this.id

    markedPlayer(currentPlayer , value);
    $(this).find("p").text(spaces[value].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
    $(".space-" +value).off("click");
  })

});//end of document.ready
