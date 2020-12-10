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
  if (localStorage.userName != null) {
    document.getElementById("name").innerHTML = localStorage.userName;
  }
  if (localStorage.userCountry != null) {
    document.getElementById("country").innerHTML = localStorage.userCountry;
  }
}

function saveEntry() {
  var editEntry = document.getElementById("entry-list");
  var userEntry = editEntry.innerHTML;
  localStorage.userEntry = userEntry;

}

function checkEntry() {
  if (localStorage.userEntry != null) {
    document.getElementById("entry-list").innerHTML = localStorage.userEntry;
  }
}

const dateInput = document.querySelector("#input-date");
const activityInput = document.querySelector("#input-activity");
//const cancleBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

const entryList = document.querySelector("#entry-list");

//const totalExpenseOutput = document.querySelector("#total-expenses");

const clear = () => {
  dateInput.value = "";
  activityInput.value = "";
}

confirmBtn.addEventListener("click", ()=>{
    const enteredDate = dateInput.value;
    const enteredActivity = activityInput.value;

    if (
      enteredDate.trim().length <= 0 ||
      enteredActivity.trim().length <= 0
    ) {
      console.log("blanks");

      //presentAlert("Error", "Please fill in the blanks");

      return;
    }
    console.log(enteredDate, enteredActivity);

    const newItem = document.createElement("ion-list");
    const newItem2 = document.createElement("ion-list");
    newItem.textContent = enteredDate;
    newItem2.textContent = enteredActivity;

    entryList.appendChild(newItem);
    entryList.appendChild(newItem2);

    saveEntry();
    clear();
});
// cancleBtn.addEventListener("click" , clear);

// function presentAlert(header, message, subtitle = ""){
//   const alert = document.createElement("ion-alert");
//   alert.cssClass = "my-custom-class";
//   alert.header = header;
//   alert.subtitle = subtitle;
//   alert.message = message;
//   alert.buttons =["Ok"];

//   document.body.appendChild(alert);
//   return alert.present();
// }