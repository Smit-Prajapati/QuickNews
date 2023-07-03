const searchButtonMobile = document.getElementById("search-button-mobile");
const searchBar = document.getElementById("search-bar");
const searchInputField = document.getElementById("search-text");
const menuButton = document.getElementById("menu-button");
const navLinksContainer = document.getElementById("nav-links");

//show/hide menu and searchbar---------------------------------------------------------------------------
searchButtonMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  searchBar.style.display = "flex";
  searchInputField.focus();

  console.log(searchInputField);
});

document.addEventListener("click", function (event) {
  if (window.innerWidth < 870) {
    searchBar.style.display = "none";
    navLinksContainer.style.display = "none";
  }
});

searchBar.addEventListener("click", function (event) {
  event.stopPropagation();
});

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();

  if (navLinksContainer.style.display === "none") {
    navLinksContainer.style.display = "block";
  } else {
    navLinksContainer.style.display = "none";
  }
});

navLinksContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 870) {
    navLinksContainer.removeAttribute("style");
    searchBar.removeAttribute("style");
  }
});

//resize navbar height on scroll..............................................

window.onscroll = function () {
  const logoContainer = document.querySelector(".logo-container");
  const logo = document.querySelector(".logo");
  if (window.innerWidth > 870) {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      logoContainer.style.padding = "6px 0px";
      logo.style.width = "80px";
      // logo.classList.add("logo-scrolled");
      // logoContainer.classList.add("logo-container-scrolled");
    } else {
      logoContainer.style.padding = "20px 0px";
      logo.style.width = "150px";
      // logo.classList.remove("logo-scrolled");
      // logoContainer.classList.remove("logo-container-scrolled");
    }
  } else {
    logoContainer.style.padding = "6px 0px";
    logo.style.width = "80px";
  }
};
