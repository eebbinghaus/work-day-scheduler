

$(document).ready(function () {
  var parentDiv = $(".container-fluid").children("div");


  // Saves the comments and time of events into local storage
  $(function () {
    var saveButton = $(".saveBtn").on("click", function () {
      var timeOfEvent = $(this).parent().attr("id");
      var textComment = $(this).siblings(".description").val();

      localStorage.setItem(timeOfEvent, textComment);
    });

    // Sets current date to the top of the page
    var today = dayjs();
    $("#currentDay").text(today.format("MMM D, YYYY"));

    // Saves the current hour 
    var currentHour = dayjs().hour();


    // Applies the corresponding CSS styles to the app dependant on the current time of day
    var timesArr = [];
    i = 0;
    $("div.row").each(function () {
      timesArr[i++] = $(this).attr("data-hour");
    });
    function checkTime() {
      parentDiv.each(function () {
        var dataAtribute = $(this).attr("data-hour");
        if (parseInt(dataAtribute) == currentHour) {
          $(this).addClass("present");
        }
        if (parseInt(dataAtribute) < currentHour) {
          $(this).addClass("past");
        }
        if (parseInt(dataAtribute) > currentHour) {
          $(this).addClass("future");
        }
      });
    }

    checkTime();
  });
});
// Loops through and gets items that are saved in local storage
$(".container-fluid")
  .children("div")
  .each(function () {
    var savedLocal = localStorage.getItem($(this).attr("id"));
    $(this).children("textarea").text(savedLocal);
    
  });
