$(document).ready(function() {
  let navToggle = false;

  $(window).scroll(function() {
    let i = $(window).scrollTop();
    if (i > 0) {
      $("header").css("background", "#000");
      $("header").css("height", "70px");
    } else {
      $("header").css("background", "transparent");
      $("header").css("height", "100px");
    }
  });

  function openNav() {
    $("nav").css("display", "block");
    setTimeout(function() {
      $("nav").css("opacity", "1");
    }, 100);
    $(".hamburger").addClass("close");
    navToggle = true;
  }

  function closeNav() {
    $("nav").css("opacity", "0");
    setTimeout(function() {
      $("nav").css("display", "none");
    }, 500);
    $(".hamburger").removeClass("close");
    navToggle = false;
  }

  $("header").on("click", ".hamburger", function() {
    if (navToggle) {
      closeNav();
    } else {
      openNav();
    }
  });
});
