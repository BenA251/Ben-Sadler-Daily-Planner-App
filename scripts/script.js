var ordinalArr = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th","th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th","th", "st" ];

var divIdArr = [ "6","7","8","9","10","11","12","13","14","15","16","17","18"];



//function to produce ordinal required for date in header not provided by day js
function OrdinalIndicator(day) {
return ordinalArr[day];
}

const today = dayjs();
$("#currentDay").text(today.format("dddd,"+" "+"MMMM DD")+ OrdinalIndicator(today.format("D")));


function updateCells() {
 var currentHr = dayjs().format("H")
  for (i = 0; i < divIdArr.length; i++) {
    if (divIdArr[i] < currentHr) {
     $("#"+ divIdArr[i]).addClass("past");
     $("#"+ divIdArr[i]).removeClass("present");
     $("#"+ divIdArr[i]).removeClass("future");
      } 
    else if (divIdArr[i] > currentHr) {
     $("#"+ divIdArr[i]).addClass("future");
     $("#"+ divIdArr[i]).removeClass("past");
     $("#"+ divIdArr[i]).removeClass("present");
       } 
    else {
      $("#"+ divIdArr[i]).addClass("present");
      $("#"+ divIdArr[i]).removeClass("past");
      $("#"+ divIdArr[i]).removeClass("future");
      }
  }

}





//on start and once document loaded runs the following function
$( document ).ready(updateCells());





//to DO LIST

//jquery function(s) which retrieves data from form when save button pressed and saves to local storage using DOM.

//jquery function(s) which formats the colours of cells according to time of day inc. existing CSS. e.g. does a test for each vs. time from dayjs and if greater / equal / less to determine appropriate colour will use time in time column to compare. 
