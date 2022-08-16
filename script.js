var moment = moment().format("MMM Do YYYY");
var rows = document.getElementsByClassName("row");

$("#currentDay").text(moment);

var currentTime = moment().format('MMM Do YYYY');
var calendarHour = currentTime;

function hourColor() {
    if(calendarHour === currentTime) {
        document.getElementsByClassName("table").style.backgroundColor = green;
    } else if(calendarHour < currentTime) {
        document.getElementsByClassName("table").style.backgroundColor = blue;
    } else if(calendarHour > currentTime) {
        document.getElementsByClassName("table").style.backgroundColor = red;
    }
}
