let navToggle = false;
let scrollHeaderFlag = true;

function generateLinks(page) {
  const innerHTML = `<div class="links">
    <div class="link ${page == "home" ? "current" : ""}">
  <a href="${page == "home" ? "./" : "../"}"><div class="title">Home</div></a>
      </div>
      <div class="link ${page == "about" || page == "team" ? "current" : ""}">
        <div class="title">About</div>
        <div class="menu">
        <!--<a href="${
          page == "home" ? "./" : "../"
        }about">--><div class="menu-item">About Us</div><!--</a>-->
          <div class="menu-item">Our Team</div>
        </div>
      </div>
      <div class="link ${
        page == "projects" ? "current" : ""
      }"><div class="title">Projects</div></div>
      <div class="link ${
        page == "services" ? "current" : ""
      }"><div class="title">Services</div></div>
      <div class="link"><div class="title">Contact</div></div>
    </div>`;
  return innerHTML;
}

function generateHeader(page) {
  const headerHTML =
    `<div class="content-lg">
    <div class="logo">
      <img src="${
        page == "home" ? "./" : "../"
      }img/LCLogoWhite.svg" alt="Linear Concepts Logo" />
    </div>
    ` +
    generateLinks(page) +
    `
        <div class="hamburger">
            <div class="line-1"></div>
            <div class="line-2"></div>
        </div>
        <div class="fill"></div>
    </div>
    `;
  return headerHTML;
}

function generateFooter() {
  const footerHTML = `<div class="content-lg">
  <p class="sm">
    Copyright Linear Concepts 2020 &middot; Made by <a>Abhinav Thukral</a>
  </p>
  <div class="socials">
    <a><i class="fab fa-facebook-f"></i></a>
    <a><i class="fab fa-instagram"></i></a>
  </div>
</div>`;
  return footerHTML;
}

function fixHeader() {
  $("header").addClass("dark");
  $("header .logo img").attr("src", "../img/LCLogoBlack.svg");
  scrollHeaderFlag = false;
}

function headerScroll(page) {
  if (scrollHeaderFlag) {
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
  } else {
    $("header").addClass("dark");
    $("header .logo img").attr(
      "src",
      `${page == "home" ? "./" : "../"}img/LCLogoBlack.svg`
    );
  }
}

function openNav(page) {
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
  headerScroll();
  navToggle = false;
}

$(document).ready(function() {
  const page = $("header").attr("aria-label");
  $("header").html(generateHeader(page));
  $("nav").html(generateLinks(page));
  $("footer").html(generateFooter());
  if (page == "about") {
    fixHeader();
  }

  $(window).scroll(function() {
    if (!navToggle) {
      headerScroll(page);
    }
  });

  $("header").on("click", ".hamburger", function() {
    if (navToggle) {
      closeNav();
    } else {
      openNav(page);
    }
  });
});
