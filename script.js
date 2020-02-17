window.onload = document.getElementById("todo-entry").focus();

document.getElementById("add-item-button").addEventListener("click", addItem);

document.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addItem();
  }
});

document
  .getElementById("mark-all-complete")
  .addEventListener("click", markAllCompleted);

document
  .getElementById("remove-all-button")
  .addEventListener("click", removeAllItems);

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

  /* if (hour < 10) {
    hour = "0" + hour;
  } */

  if (minute < 10) {
    minute = "0" + minute;
  }

  let currentTime = `${hour}:${minute} ${timeOfDay}`;

  document.getElementById("display-time").innerHTML = currentTime;

  // Used for debugging. Delete when completed
  console.log(currentTime);
}

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

    createImgComplete.setAttribute("src", "media/checkmark.svg");
    createImgComplete.setAttribute("id", "create-img-complete");

    createNewLi.appendChild(createImgComplete);

    createImgComplete.addEventListener("click", function(e) {
      if (e.target.parentNode.style.textDecoration !== "line-through") {
        e.target.parentNode.style.textDecoration = "line-through";
      } else {
        e.target.parentNode.style.textDecoration = "none";
      }
    });

    createImgDelete.setAttribute("src", "media/delete.svg");
    createImgDelete.setAttribute("id", "create-img-delete");

    createNewLi.appendChild(createImgDelete);

    createImgDelete.addEventListener("click", function(e) {
      let todoItems = document.getElementById("todo-list");
      let removeLi = e.target.parentElement;
      todoItems.removeChild(removeLi);
    });

    document.getElementById("todo-entry").value = "";

    document.getElementById("todo-entry").focus();
  }
}

function markAllCompleted() {
  let fullList = document.getElementById("todo-list");
  if (fullList.style.textDecoration !== "line-through") {
    fullList.style.textDecoration = "line-through";
  } else {
    fullList.style.textDecoration = "none";
  }
}

function removeAllItems() {
  let allItems = document.getElementById("todo-list");
  while (allItems.hasChildNodes()) {
    allItems.removeChild(allItems.firstChild);
  }
  document.getElementById("todo-entry").value = "";

  document.getElementById("todo-entry").focus();
}

showDate();
setInterval(showDate, 1000);
