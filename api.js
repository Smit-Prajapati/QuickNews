const apiKey = "d39c26ae66f349649620748d23c13980";
const url = "https://newsapi.org/v2/everything?q=";
let requestUrl;
const advertisementPicture = "images/news-anchor.svg";

window.onload = () => {
  requestUrl = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`;
  init();
};

const init = () => {
  getNews();
};

const getNews = async () => {
  let response = await fetch(requestUrl);
  if (!response.ok) {
    alert("Data unvailable at the moment. Please try agian later");
    return false;
  }
  let data = await response.json();
  generateUserInterface(data.articles);
};


//generate UI-----------------------------------------------------------------------------------------------
const heroNewsContainer = document.getElementById("hero");
const onlyHeadlinesContainer = document.getElementById(
  "only-headlines-container"
);
const cardsContainer = document.getElementById("cards-container");

function generateUserInterface(articles) {
  inputBox.value = "";
  heroNewsContainer.innerHTML = "";
  onlyHeadlinesContainer.innerHTML = "";
  cardsContainer.innerHTML = "";
  let heroNewsIndex = 4;

  createAdvertisement(advertisementPicture);

  articles.forEach((articles) => {
    const title = articles.title;
    const source = articles.source.name;
    const description = articles.description;
    const image = articles.urlToImage;
    const url = articles.url;
    const date = new Date(articles.publishedAt).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    });

    if (image) {
      if (heroNewsIndex) {
        createHeroNews(title, image, source, url);
        heroNewsIndex--;
      } else {
        createNewsCards(title, image, source, url, description, date);
      }
    } else {
      createOnlyheadlines(title, source, url);
    }
  });
}

function createHeroNews(title, image, source, url) {
  const heroNews = document.createElement("div");
  heroNews.classList.add("hero-news");

  heroNews.innerHTML = `<a href="${url}" target="_blank"><img src="${image}" alt="image"><div class="content"><h1>${title}</h1><p>${source}</p></div></a>`;

  heroNewsContainer.appendChild(heroNews);
}

function createOnlyheadlines(title, source, url) {
  const headlines = document.createElement("div");
  headlines.classList.add("headline");
  headlines.innerHTML = `<a href="${url}"><h1>${title}</h1><div class="source">${source}</div></a>`;
  onlyHeadlinesContainer.appendChild(headlines);
}

function createAdvertisement(image) {
  const advertisement = document.createElement("div");
  advertisement.classList.add("advertisement");

  advertisement.innerHTML = `<img src="${image}" alt="advertisement">`;
  onlyHeadlinesContainer.appendChild(advertisement);
}

function createNewsCards(title, image, source, url, description, date) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<a href="${url}" target="_blank"><div class="card-image"><img src="${image}"alt="image"><div class="source">${source}</div></div><div class="content"><div class="card-title">${title}</div><div class="card-description">${description}</div><div class="card-date">${date}</div></div></a>`;

  cardsContainer.appendChild(card);
}

//select category--------------------------------------------------------------------------------------------
const navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    requestUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${navLinks[i].innerHTML}&apiKey=${apiKey}`;
    changeSectionHeading(navLinks[i].innerHTML);
    getNews();

    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    this.classList.add("active");
  };
}

//select topic footer---------------------------------------------------------------------------------------------
const footerLinks = document
  .getElementById("footer-links")
  .getElementsByTagName("a");

for (let i = 0; i < footerLinks.length; i++) {
  footerLinks[i].onclick = function () {
    requestUrl = `https://newsapi.org/v2/everything?q=${footerLinks[i].innerHTML}&apiKey=${apiKey}`;
    changeSectionHeading(footerLinks[i].innerHTML);
    getNews();
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
  };
}

// search topic-----------------------------------------------------------------------------------------------------
const inputBox = document.getElementById("search-text");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", function () {
  if (inputBox.value.trim() !== "") {
    requestUrl = `https://newsapi.org/v2/everything?q=${inputBox.value.trim()}&apiKey=${apiKey}`;
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    getNews();
    changeSectionHeading(inputBox.value.trim());
  }
});

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && inputBox.value.trim() !== "") {
    requestUrl = `https://newsapi.org/v2/everything?q=${inputBox.value.trim()}&apiKey=${apiKey}`;
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    getNews();
    changeSectionHeading(inputBox.value.trim());
  }
});

//change heading------------------------------------------------------------------------------------------------------------

function changeSectionHeading(heading) {
  const heroSectionHeading = document.getElementById("hero-section-heading");
  const newsCardsSectionHeading = document.getElementById("news-cards-heading");

  if (heading == "General") {
    heroSectionHeading.innerHTML = `Top headlines from India`;
    newsCardsSectionHeading.innerHTML = `Trending news`;
  } else {
    heroSectionHeading.innerHTML = `Top headlines about ${heading}`;
    newsCardsSectionHeading.innerHTML = `Trending news about ${heading}`;
  }
}