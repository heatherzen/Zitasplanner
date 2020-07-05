//write text in text-area
//capture text field values in local storage so that they stay on page after refresh
//add moment.js to header for current day
//add event listener for button and capture data in local storage
//color code block for past, present, future

var currentDay = document.querySelector("#currentDay");

function currentDay() {
    const moment = require('moment');

    let now = moment();
    console.log(now.format('LL'));
    
};
currentDay();