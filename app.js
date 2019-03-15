




function rockSelection() {
  var selection = computerSelection()
  switch (selection) {
    case "Rock":
    alert("Rock")
    break
    case "Scissors":
    alert("Scissors")
    break
    case "Paper":
    alert("Paper")
    break
  }
  }


function paperSelection() {
  var selection = computerSelection()
  switch (selection) {
    case "Rock":
    alert("Rock")
    break
    case "Scissors":
    alert("Scissors")
    break
    case "Paper":
    alert("Paper")
    break
  }

}

function scissorsSelection() {
  var selection = computerSelection()
  switch (selection) {
    case "Rock":
    alert("Rock")
    break
    case "Scissors":
    alert("Scissors")
    break
    case "Paper":
    alert("Paper")
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

function test() {
  alert("test")
}

 