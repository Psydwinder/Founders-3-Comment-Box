let textArea = document.getElementById("comment");
let characterCounter = document.getElementById("charCount");
let warning = document.getElementById("warning");
const x = 140;

function myFunction() {
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;
  let email = document.getElementById("email").value;

  let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/; // Checks Email
  if (name && comment && email.match(regexEmail)) {
    document.getElementById("comment1").innerHTML = comment;
    document.getElementById("meta_author").innerHTML = name;
  } else {
    return alertBox();
  }
}

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = x - numOfEnteredChars;
  characterCounter.textContent = counter + "/140";

  if (counter < 0) {
    characterCounter.style.color = "red";
    warning.innerHTML = "You have entered too many characters.";
    textArea.style.boxShadow = "none";
    textArea.style.outline = "1px solid red";
  } else if (counter < 15) {
    characterCounter.style.color = "orange";
    warning.innerHTML = "";
    textArea.style.boxShadow = "none";
    textArea.style.outline = "1px solid orange";
  } else {
    characterCounter.style.color = "white";
    warning.innerHTML = "";
    textArea.style.outline = "none";
  }
};

textArea.addEventListener("input", countCharacters);

const submit = document.getElementById("submit");
submit.addEventListener("click", myFunction);
// submit returns:

let input = document.getElementById("submit");
let name2 = document.getElementById("name");
let email = document.getElementById("email");

function alertBox() {
  alert("Please Complete Form");
}
