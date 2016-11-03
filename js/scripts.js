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
  // var spaceArray=[0,1,2,3,4,5,6,7,8];
  // var index = 0;
  $(".space-0").click(function() {
    markedPlayer(currentPlayer , 0);
    $(this).text(spaces[0].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-1").click(function() {
    markedPlayer(currentPlayer, 1);
    $(this).text(spaces[1].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-2").click(function() {
    markedPlayer(currentPlayer, 2);
    $(this).text(spaces[2].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-3").click(function() {
    markedPlayer(currentPlayer, 3);
    $(this).text(spaces[3].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-4").click(function() {
    markedPlayer(currentPlayer, 4);
    $(this).text(spaces[4].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-5").click(function() {
    markedPlayer(currentPlayer, 5);
    $(this).text(spaces[5].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-6").click(function() {
    markedPlayer(currentPlayer, 6);
    $(this).text(spaces[6].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
  $(".space-7").click(function() {
    markedPlayer(currentPlayer, 7);
    $(this).text(spaces[7].marked);
    currentPlayer = switchPlayer(currentPlayer);

    isItOver();
  })
  $(".space-8").click(function() {
    markedPlayer(currentPlayer, 8);
    $(this).text(spaces[8].marked);
    currentPlayer = switchPlayer(currentPlayer);
    isItOver();
  })
});//end of document.ready
