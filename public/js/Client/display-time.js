document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        var currentTimeElement = document.getElementById("currentTime");
        var currentTime = new Date();
        var options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        var formattedTime = currentTime.toLocaleTimeString('en-US', options);
        currentTimeElement.textContent = formattedTime;
      }
  
      // Update time initially
      updateTime();
  
      // Update time every second
      setInterval(updateTime, 1000);
});