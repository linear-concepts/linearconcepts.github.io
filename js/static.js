function generateLinks(page) {
  const innerHTML = `<div class="links">
    <a href="${page == "home" ? "./" : "../"}"><div class="link ${
    page == "home" ? "current" : ""
  }">
      <div class="title">Home</div>
      </div></a>
      <div class="link ${page == "about" || page == "team" ? "current" : ""}">
        <div class="title">About</div>
        <div class="menu">
        <a href="${
          page == "home" ? "./" : "../"
        }about"><div class="menu-item">About Us</div></a>
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
    </div>
    `;
  return headerHTML;
}

$(document).ready(function() {
  const page = $("header").attr("class");
  $("header").html(generateHeader(page));
  $("nav").html(generateLinks(page));
});
