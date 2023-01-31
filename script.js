
let saveBtn = $('.btn');
var curDate = dayjs();


$(document).ready(function () {
  // Place user input into local storage using on the click of the save button
  function clicked() {
    const btnId = $(this).parents('div').first().attr('id');
    const inputId = $(this).siblings('.description').val();
    localStorage.setItem(btnId, inputId);
  }

  // Retrieve user input and timeblock from local storage.
  function getLocalInfo() {
    for (var i = 8; i < 18; i++) {
      var hour = localStorage.getItem('hour-' + i)
      var timeBlock = $('#hour-' + i)
      timeBlock.children().eq(1).val(hour)

      //Compare time and add proper class

      if (i < curDate.hour()) {
        timeBlock.addClass('past')
      }
      else if (i > curDate.hour()) {
        timeBlock.addClass('future')
      }
      else {
        timeBlock.addClass('present')
      }
    }

  }

  getLocalInfo();
  saveBtn.on("click", clicked);

  // display the current date in the header of the page.

  $("#currentDay").text(curDate.format('dddd, MMM-D-YYYY, h:mm a'));
});
