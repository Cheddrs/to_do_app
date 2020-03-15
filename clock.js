const Clock = (function() {
  return {
    showDate: function() {
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

      if (minute < 10) {
        minute = "0" + minute;
      }

      let currentTime = `${hour}:${minute} ${timeOfDay}`;

      document.getElementById("display-time").innerHTML = currentTime;
    }
  };
})();

Clock.showDate();
