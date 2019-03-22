




function rockSelection() {
  // loading()
  var selection = computerSelection()
  switch (selection) {
    case "Rock":
    alert("The Computer Selected Rock, Try Again")
    break
    case "Scissors":
    alert("The Computer Selected Scissors, You Win!")
    break
    case "Paper":
    alert("The Computer Selected Paper, You Lose")
    break
  }
  }


function paperSelection() {
  var selection = computerSelection()
  switch (selection) {
    case "Rock":
    alert("The Computer Selected Rock, You Win!")
    break
    case "Scissors":
    alert("The Computer Selected Scissors, You Lose")
    break
    case "Paper":
    alert("The Computer Selected Paper, Try Again")
    break
  }

}

function scissorsSelection() {
  var selection = computerSelection()
  switch (selection) {
    case "Rock":
    alert("The Computer Selected Rock, You Lose")
    break
    case "Scissors":
    alert("The Computer Selected Scissors, Try Again")
    break
    case "Paper":
    alert("The Computer Selected Paper, You Win!")
    break
  }

}


function computerSelection() {
  var myArray = [
    "Rock",
    "Paper",
    "Scissors"
   ];
   
   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

   return randomItem
}

// function loading() {

//   var loader = document.getElementById("loader")
//   loader.style.display = "flex"

  
// }

 