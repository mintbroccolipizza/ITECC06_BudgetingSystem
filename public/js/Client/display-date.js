document.addEventListener('DOMContentLoaded', () => {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    // Insert the formatted date into the HTML element with id="currentDate"
    document.getElementById("currentDate").innerHTML = formattedDate;
})


