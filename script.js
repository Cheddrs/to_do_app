window.onload = document.getElementById("todo-entry").focus();

document.getElementById("add-item-button").addEventListener("submit", addItem);

document.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addItem();
  }
});
/*
document
  .getElementById("create-img-delete")
  .addEventListener("click", removeItem);
*/
document
  .getElementById("remove-all-button")
  .addEventListener("click", removeAllItems);

// Show date
function showDate() {
  let today = new Date();
  let weekday = today.getDay();
  let month = today.getMonth();
  let day = today.getDate();
  let year = today.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let dayOfTheWeek = days[weekday];
  let monthOfTheYear = months[month];
  let currentDay = `${dayOfTheWeek}`;
  let currentDate = `${monthOfTheYear} ${day}, ${year}`;
  document.getElementById("display-day").innerHTML = currentDay;
  document.getElementById("display-date").innerHTML = currentDate;

  // Used for debugging. Delete when completed
  console.log(currentDay);
  console.log(currentDate);

  let hour = today.getHours();
  let minute = today.getMinutes();
  let timeOfDay;

  if (hour < 12) {
    timeOfDay = "AM";
  } else {
    timeOfDay = "PM";
  }

  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  let currentTime = `${hour}:${minute} ${timeOfDay}`;

  document.getElementById("display-time").innerHTML = currentTime;

  // Used for debugging. Delete when completed
  console.log(currentTime);
}

// Add a to-do list item
function addItem() {
  let newItem = document.getElementById("todo-entry").value;
  let createNewLi = document.createElement("li");
  let createNewTextNode = document.createTextNode(newItem);
  createNewLi.appendChild(createNewTextNode);
  let createImgComplete = document.createElement("img");
  let createImgDelete = document.createElement("img");

  if (newItem === "") {
    alert("Please enter a to-do item.");
  } else {
    document.getElementById("todo-list").appendChild(createNewLi);
    createNewLi.setAttribute("id", "new-item");
    createNewLi.setAttribute("class", "new-item");

    createImgComplete.setAttribute("src", "./media/checkmark.svg");
    createImgComplete.setAttribute("id", "create-img-complete");
    createImgComplete.setAttribute("class", "new-item");

    createNewLi.appendChild(createImgComplete);

    createImgComplete.addEventListener("click", function(e) {
      if (e.target.classList.contains("new-item")) {
        if (e.target.prevSibling.style.textDecoration !== "line-through") {
          e.target.prevSibling.style.textDecoration = "line-through";
        } else {
          e.target.prevSibling.style.textDecoration = "none";
        }
        console.log("fired!");
      }
    });

    createImgDelete.setAttribute("src", "./media/delete.svg");
    createImgDelete.setAttribute("id", "create-img-delete");

    createNewLi.appendChild(createImgDelete);

    document.getElementById("todo-entry").value = "";

    document.getElementById("todo-entry").focus();
  }

  // Used for debugging purposes only. Delete when finished.
  console.log(newItem);
}

// Mark to-do item as completed
function markAsCompleted() {
  //
}

// Remove to-do item
function removeItem() {
  let parentNodeRemove = document.getElementById("remove-item");
  parentNodeRemove.parentNode.removeChild(parentNodeRemove);
  console.log("removeItem fired");
}

// Remove all items
function removeAllItems() {
  let allItems = document.getElementById("todo-list");
  while (allItems.hasChildNodes()) {
    allItems.removeChild(allItems.firstChild);
  }
}

// Initializing function(s)
showDate();
/*
Commented out setInterval to keep from refreshing every second. Remove comment when completed.
*/
// setInterval(showDate, 1000);
