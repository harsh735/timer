function template3() {
    var session_seconds = "00";
    var session_minutes = 10; 
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
  }
  
  function longBreak() {
  
  
    // Change the minutes and seconds to starting time
    session_minutes = 9;
    session_seconds = 59;
  
    // Add the seconds and minutes to the page
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
  
    // Start the countdown
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);
  
    // Functions
    // Function for minute counter
    function minutesTimer() {
      session_minutes = session_minutes - 1;
      document.getElementById("minutes").innerHTML = session_minutes;
    }
  
    // Function for second counter
    function secondsTimer() {
      session_seconds = session_seconds - 1;
      document.getElementById("seconds").innerHTML = session_seconds;
  
      // Check if the seconds and minutes counter has reached 0
      // If reached 0 then end the session
      if (session_seconds <= 0) {
        if (session_minutes <= 0) {
          // Clears the interval i.e. stops the counter
          clearInterval(minutes_interval);
          clearInterval(seconds_interval);
  
          // Add the message to the html
          document.getElementById("done").innerHTML =
            "Session Completed! Take a Break";
  
          // Make the html message div visible
          document.getElementById("done").classList.add("show_message");
        }
  
        // Reset the session seconds to 60
        session_seconds = 60;
      }
    }
  }
  