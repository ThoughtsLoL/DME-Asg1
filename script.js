function saveEdits() {
  //get the editable element
  var editBio = document.getElementById("bio");
  var editName = document.getElementById("name");
  var editCountry = document.getElementById("country");
  //get the edited element content
  var userBio = editBio.innerHTML;
  var userName = editName.innerHTML;
  var userCountry = editCountry.innerHTML;
  //save the content to local storage
  localStorage.userBio = userBio;
  localStorage.userName = userName;
  localStorage.userCountry = userCountry;
  //write a confirmation to the user
  document.getElementById("update").innerHTML = "Edits saved!";
}

function resetEdits() {
  //reset the contents
  document.getElementById("bio").innerHTML = "Type here";
  document.getElementById("name").innerHTML = "Type name here";
  document.getElementById("country").innerHTML = "Type country here";
  //save the content to local storage
  localStorage.userBio = "Type here";
  localStorage.userName = "Type name here";
  localStorage.userCountry = "Type country here";
  //write a confirmation to the user
  document.getElementById("update").innerHTML = "Edits has been reset!";
}

function checkEdits() {
  //find out if the user has previously saved edits
  if (localStorage.userBio != null) {
    document.getElementById("bio").innerHTML = localStorage.userBio;
  }
  if (localStorage.userBio != null) {
    document.getElementById("name").innerHTML = localStorage.userName;
  }
  if (localStorage.userBio != null) {
    document.getElementById("country").innerHTML = localStorage.userCountry;
  }
}
