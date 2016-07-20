// Assigning input values to an object after event validation
  function assignInput() {
    var treeObj = {
      height: height.value,
      char: character.value
    };
    growTree(treeObj);
  }


//this function to grow tree
  function growTree(treeObj) {
    for (var i = 1; i <= treeObj.height; i++) {
      console.log(" ".repeat(treeObj.height - i) + treeObj.char.repeat((i * 2) - 1) + " ".repeat(treeObj.height - i))//output of tree
    }
  }


// Function to check whether both input fields are completed
  function ifEmpty() {
    if (height.value === "" || character.value === "") {
      alert("Please enter a height and character to build your tree");
    } else {
     assignInput();
    }
  }

// Function to check whether the enter key was pressed
function enterPressed() {
  if (event.keyCode === 13) {
    ifEmpty();
  }
}
// //Button event listener to grow tree
grow.addEventListener("click", ifEmpty)//(need function to stop if input is blank))


// // //Enter event listener to grow tree
height.addEventListener("keypress", enterPressed) //need function to stop if height input is blank)
character.addEventListener("keypress", enterPressed) //need function to stop if character input is blank)


// create a reset button