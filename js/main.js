$(document).ready(function() {
  let navToggle = false;

  const page = $("header").attr("class");

  $(window).scroll(function() {
    if (!navToggle) {
      let i = $(window).scrollTop();
      if (i > 25) {
        $("header").addClass("dark");
        $("header .logo img").attr(
          "src",
          `${page == "home" ? "./" : "../"}img/LCLogoBlack.svg`
        );
      } else {
        $("header").removeClass("dark");
        $("header .logo img").attr(
          "src",
          `${page == "home" ? "./" : "../"}img/LCLogoWhite.svg`
        );
      }
    }
  });

  function openNav() {
    $("nav").css("display", "block");
    setTimeout(function() {
      $("nav").css("opacity", "1");
    }, 100);
    $(".hamburger").addClass("close");
    $("header").removeClass("dark");
    $("header .logo img").attr(
      "src",
      `${page == "home" ? "./" : "../"}img/LCLogoWhite.svg`
    );
    navToggle = true;
  }

  function closeNav() {
    $("nav").css("opacity", "0");
    setTimeout(function() {
      $("nav").css("display", "none");
    }, 500);
    $(".hamburger").removeClass("close");
    let i = $(window).scrollTop();
    if (i > 25) {
      $("header").addClass("dark");
      $("header .logo img").attr(
        "src",
        `${page == "home" ? "./" : "../"}img/LCLogoBlack.svg`
      );
    } else {
      $("header").removeClass("dark");
      $("header .logo img").attr(
        "src",
        `${page == "home" ? "./" : "../"}img/LCLogoWhite.svg`
      );
    }
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
