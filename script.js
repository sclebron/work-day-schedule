var myMoment = moment().format("MMM Do YYYY");
var rows = document.getElementsByClassName("time-block");

$("#currentDay").text(myMoment);

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

var saveButton = document.getElementsByClassName("")

$(#"9am ").val(localStorage.getItem("#9am"))