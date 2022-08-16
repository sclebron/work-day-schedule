var myMoment = moment().format("MMM Do YYYY");
var rows = document.getElementsByClassName("time-block");

$("#currentDay").text(myMoment);

// compare current time to hour of row, if same, if present, if future, then assign class 

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
// add event listener so when click time block can enter text
var btn = document.getElementsByClassName("saveBtn col-1 btn");
btn.addEventListener("click", function() {
    
});

// store text in local storage

// refresh page saved event persists