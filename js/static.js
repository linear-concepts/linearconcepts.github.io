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

$(document).ready(function() {
  const page = $("header").attr("class");
  $("header").html(generateHeader(page));
  $("nav").html(generateLinks(page));
  $("footer").html(generateFooter());
});
