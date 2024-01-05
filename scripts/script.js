var ordinalArr = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th","th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th","th", "st" ];

//function to produce ordinal required for date in header not provided by day js
function OrdinalIndicator(day) {
return ordinalArr[day];
}

const today = dayjs();
$("#currentDay").text(today.format("dddd,"+" "+"MMMM DD")+ OrdinalIndicator(today.format("D")));



//to DO LIST

//jquery function(s) which retrieves data from form when save button pressed and saves to local storage using DOM.

//jquery function(s) which formats the colours of cells according to time of day inc. existing CSS. e.g. does a test for each vs. time from dayjs and if greater / equal / less to determine appropriate colour will use time in time column to compare. 
