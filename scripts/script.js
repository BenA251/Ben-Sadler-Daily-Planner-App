var ordinalArr = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th","th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th","th", "st" ];



const today = dayjs();
$("#currentDay").text(today.format("dddd,  MMMM DD")+ OrdinalIndicator(today.format("D")));


function OrdinalIndicator(day) {
return ordinalArr[day];
}

var ordinalArr = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th","th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th","th", "st" ];