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
  document.getElementById("displayDay").innerHTML = currentDay;
  document.getElementById("displayDate").innerHTML = currentDate;

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

  document.getElementById("displayTime").innerHTML = currentTime;

  // Used for debugging. Delete when completed
  console.log(currentTime);
}

// Add a to-do list item
function addItem() {
  let todoItem = document.getElementById("todo_entry").value;
  let createNode = document.createElement("li");
  let textNode = document.createTextNode(todoItem);
  createNode.appendChild(textNode);
  let newItem = document.getElementById("todo_entry");

  if (todoItem === "") {
    alert("Please enter a to-do item.");
  } else {
    document.getElementById("todo_list").appendChild(createNode);

    document.getElementById("todo_entry").value = "";
  }

  // Used for debugging purposes only. Delete when finished.
  console.log(todoItem);
}

// Mark to-do item as completed
function completeItem() {}

showDate();
/*
Commented out setInterval to keep from refreshing every second. Remove comment when completed.
*/
// setInterval(showDate, 1000);
