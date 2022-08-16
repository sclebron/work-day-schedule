

var myMoment = moment().format("MMM Do YYYY");
var rows = document.getElementsByClassName("time-block");

$("#currentDay").text(myMoment);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
            
        let val = $(this).siblings("textarea").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, val);
    })

    function timeTracker() {

        let currentTime = moment().hour();
        console.log(currentTime);
        $(".time-block").each(function () {
            var rowTime = parseInt($(this).attr("id").split("hour")[1]); 
    
            if (currentTime === rowTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else if (currentTime < rowTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else (currentTime > rowTime) 
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            })
        };
    timeTracker();
    
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
});