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
}

showDate();
/*
Comment out setInterval to keep from refreshing every second. Remove comment when completed.
*/
// setInterval(showDate, 1000);
