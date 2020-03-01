let navToggle = false;

function generateLinks(page) {
  const innerHTML = `<div class="links">
    <div class="link ${page == "home" ? "current" : ""}">
  <a href="${page == "home" ? "./" : "../"}"><div class="title">Home</div></a>
      </div>
      <div class="link ${page == "about" || page == "team" ? "current" : ""}">
        <div class="title">About <i class="fas fa-caret-down"></i></div>
        <div class="menu">
        <a href="${
          page == "home" ? "./" : "../"
        }about"><div class="menu-item">About Us</div></a>
        <a href="${
          page == "home" ? "./" : "../"
        }team"><div class="menu-item">Our Team</div></a>
        </div>
      </div>
      <div class="link ${page == "projects" ? "current" : ""}"><a href="${
    page == "home" ? "./" : "../"
  }projects"><div class="title">Projects</div></a></div>
      <div class="link ${page == "services" ? "current" : ""}"><a href="${
    page == "home" ? "./" : "../"
  }services"><div class="title">Services</div></a></div>
      <div class="link ${page == "contact" ? "current" : ""}"><a href="${
    page == "home" ? "./" : "../"
  }contact"><div class="title">Contact</div></a></div>
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

function headerScroll(page) {
  let i = $(window).scrollTop();
  if (i > 0) {
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

function closeNav(page) {
  $("nav").css("opacity", "0");
  setTimeout(function() {
    $("nav").css("display", "none");
  }, 500);
  $(".hamburger").removeClass("close");
  headerScroll(page);
  navToggle = false;
}

$(document).ready(function() {
  $(".loader").css("display", "none");
  const page = $("header").attr("aria-label");
  $("header").html(generateHeader(page));
  $("nav").html(generateLinks(page));
  $("footer").html(generateFooter());

  $(window).scroll(function() {
    if (!navToggle) {
      headerScroll(page);
    }
  });

  $("header").on("click", ".hamburger", function() {
    if (navToggle) {
      closeNav(page);
    } else {
      openNav(page);
    }
  });
});
