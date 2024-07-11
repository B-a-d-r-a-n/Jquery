let maxFbLength = 100;

function getEventTime(eventTime) {
  let now = new Date();
  now = now.getTime() / 1000;

  let eventDate = new Date(eventTime);
  eventDate = eventDate.getTime() / 1000;
  let remainingTime = eventDate - now;
  let days = Math.floor(remainingTime / (24 * 60 * 60));
  let hours = Math.floor((remainingTime - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (remainingTime - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    remainingTime - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    getEventTime(eventTime);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  $(".openNav").on("click", function () {
    $(".w-250").animate({ width: "250px" }, 500);
    $(".home").animate({ paddingLeft: "250px" }, 500);
  });

  $(".closeNav").on("click", function () {
    $(".w-250").animate({ width: "0" }, 500);
    $(".home").animate({ paddingLeft: "0" }, 500);
  });

  $(".list-group-item").on("click", function () {
    let sectionId = $(this).attr("href");
    let sectionTop = $(sectionId).offset().top;
    $("html, body").animate({ scrollTop: sectionTop }, 500);
  });

  $(".list-group-item").on("click", function () {
    let sectionId = $(this).attr("href");
    let sectionTop = $(sectionId).offset().top;
    $("html, body").animate({ scrollTop: sectionTop }, 500);
  });
  $(".singerBtn").on("click", function () {
    $(".singerTxt").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
  });
  $(".feedback").on("keyup", function () {
    let currLength = $(this).val().length;
    if (maxFbLength == currLength) {
      $("#chars").text("There are no");
    } else {
      $("#chars").text(maxFbLength - currLength);
    }
  });
  getEventTime("30 october 2024 10:30:00");
});
