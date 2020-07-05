//write text in text-area/check
//capture text field values in local storage so that they stay on page after refresh
//add moment.js to header for current day/check
//add event listener for button and capture data in local storage
//color code block for past, present, future

var currentDay = document.getElementById("currentDay");
var saveButton = document.getElementById("btn");
var textInput = document.getElementById("input-event");

function getCurrentDay() {
    let now = moment().format('LL'); 
    return(now);
};
//end getCurrentDay fnct def

var displayCurrentDay = function() {
    $(currentDay).append(getCurrentDay);
}
//end of displayCurrentDay

var saveTextInput = function(textInput) {
    localStorage.setItem("textInput", textInput);
    console.log(textInput);
}


getCurrentDay();
displayCurrentDay();

saveButton.addEventListener("click", saveTextInput);