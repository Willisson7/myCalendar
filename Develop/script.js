// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let saveBtn = $('.btn');
var curDate = dayjs();

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// console.log(headerDate)

$(document).ready(function () {

  function clicked() {
    const btnId = $(this).parents('div').first().attr('id');
    const inputId = $(this).siblings('.description').val();
    localStorage.setItem(btnId, inputId);
  }

  function getLocalInfo() {
    for (var i = 8; i < 18; i++) {
      var hour = localStorage.getItem('hour-' + i)
      var timeBlock = $('#hour-' + i)
      timeBlock.children().eq(1).val(hour)

      //Compare time and add proper class

      if (i < curDate.hour()){
        timeBlock.addClass('past')
      }
      else if (i > curDate.hour()){
        timeBlock.addClass('future')
      }
      else {
        timeBlock.addClass('present')
      }
      // console.log(curDate.hour())
    }

  }
  
  getLocalInfo();
  saveBtn.on("click", clicked);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // display the current date in the header of the page.

  $("#currentDay").text(curDate.format('dddd, MMM-D-YYYY, h:mm a'));
});
