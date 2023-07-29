const apiKey = "d39c26ae66f349649620748d23c13980";
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
    // alert("Data unvailable at the moment. Please try agian later");
    let tempData = {"status":"ok","totalResults":70,"articles":[{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Introducing NASA+ On-Demand Streaming Service (Official NASA Trailer) - NASA","description":"Introducing NASA's new streaming service, NASA+, launching soon. More space. More rockets. More science. More missions. More NASA. All in one place. No subsc...","url":"https://www.youtube.com/watch?v=RrlDv-ts2f0","urlToImage":"https://i.ytimg.com/vi/RrlDv-ts2f0/maxresdefault.jpg","publishedAt":"2023-07-27T19:30:47Z","content":null},{"source":{"id":null,"name":"XDA Developers"},"author":"Timi Cantisano","title":"Samsung's Galaxy Z Fold 5 and Flip 5 tumble, drop, and more in rigorous test video - XDA Developers","description":"Samsung's Galaxy Z Fold 5 and Flip 5 get subjected to a barrage of tests in the latest video.","url":"https://www.xda-developers.com/galaxy-z-fold-5-and-flip-5-tests/","urlToImage":"https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/07/xda-49.png","publishedAt":"2023-07-27T19:23:00Z","content":"<ul><li> Samsung has launched the Galaxy Z Fold 5 and Z Flip 5, featuring new hinges, and a new cover display for the latter. </li><li> The company has conducted rigorous tests on these devices, ensu… [+2213 chars]"},{"source":{"id":null,"name":"BeInCrypto"},"author":"Bary Rahma","title":"From Stills to Motion: AI Image Generators Take Wild Turn - BeInCrypto","description":"Midjourney, Runway and more: a comparison of their AI image generator approach. Discover their mission, challenges, and implications.","url":"https://beincrypto.com/midjourney-competition-ai-image-to-video/","urlToImage":"https://s32659.pcdn.co/wp-content/uploads/2023/03/midjourney-alternatives-what.jpg.webp","publishedAt":"2023-07-27T18:30:00Z","content":"The digital world is buzzing with developments in artificial intelligence. AI’s transformative powers have long reached the art industry, where platforms vie for superiority. \r\nIn this intense compet… [+4969 chars]"},{"source":{"id":null,"name":"GSMArena.com"},"author":"Michail","title":"Lenovo Tab P12 announced with 12.7” LCD and MediaTek 7050 - GSMArena.com","description":"The latest P-series tablet from Lenovo features a 12.7-inch LTPS LCD and a massive 10,200 mAh battery. Lenovo launched in Tab P12 Pro 5G back in 2021 and...","url":"https://www.gsmarena.com/lenovo_tab_p12_announced_with_127_lcd_and_mediatek_7050-news-59342.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/23/07/lenovo-tab-p12-ofic/-952x498w6/gsmarena_111.jpg","publishedAt":"2023-07-27T17:47:02Z","content":"Lenovo launched in Tab P12 Pro 5G back in 2021 and its now bringing a non-Pro version nearly two years later. Lenovo Tab P12 features a 12.7-inch LTPS LCD with 1840 x 2944px resolution and a 60Hz ref… [+963 chars]"},{"source":{"id":null,"name":"MacRumors"},"author":"Juli Clover","title":"Google's New Anti-Stalking Measure Will Alert Android Users About Unknown AirTags - MacRumors","description":"Back in May, Google announced plans to introduce a new safety feature that would alert Android users about nearby unknown Bluetooth trackers,...","url":"https://www.macrumors.com/2023/07/27/google-airtag-android-anti-stalking/","urlToImage":"https://images.macrumors.com/t/_MSuqCnEiwgD4C51p-xqrHhqXAk=/1600x/article-new/2023/07/android-unknown-tracker-alert.jpg","publishedAt":"2023-07-27T17:45:07Z","content":"Back in May, Google announced plans to introduce a new safety feature that would alert Android users about nearby unknown Bluetooth trackers, including AirTags, preventing people from being stalked w… [+3315 chars]"},{"source":{"id":null,"name":"XDA Developers"},"author":"Kishalaya Kundu","title":"Photoshop's generative AI feature can now expand images seamlessly - XDA Developers","description":"Photoshop users can now utilize generative AI to expand or reduce images with or without text prompts.","url":"https://www.xda-developers.com/photoshop-generative-ai/","urlToImage":"https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/07/adobe-firefly-beta.jpg","publishedAt":"2023-07-27T17:10:00Z","content":"Adobe integrated its Firefly family of generative AI models into the beta version of Photoshop in May, enabling users to add, expand, or remove content from images non-destructively, using simple tex… [+1945 chars]"},{"source":{"id":null,"name":"Android Police"},"author":"Karandeep Singh","title":"WhatsApp's enhanced safety tools explore new ways to keep you safe - Android Police","description":"A new screen will warn you when you’re contacted by an unknown number","url":"https://www.androidpolice.com/whatsapp-enhanced-safety-tools-beta/","urlToImage":"https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/05/whatsapp-beta-google-play-hero.jpg","publishedAt":"2023-07-27T17:06:00Z","content":"WhatsApp is used by billions of people every day, and with that comes the pressing issue of spam in your inbox. Unsolicited messaging from businesses or unknown numbers is always annoying, but it bec… [+2000 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Call of Duty: Modern Warfare 2 & Warzone - Official Season 5 Launch Trailer - IGN","description":"Watch the Call of Duty: Modern Warfare II & Warzone Season 5 trailer to see what's coming. When darkness falls, the shadows will rise. Shadow Company and Tas...","url":"https://www.youtube.com/watch?v=gSmanh5zaIA","urlToImage":"https://i.ytimg.com/vi/gSmanh5zaIA/maxresdefault.jpg","publishedAt":"2023-07-27T17:00:34Z","content":null},{"source":{"id":null,"name":"Android Police"},"author":"Chandraveer Mathur","title":"Google Maps rolls out redesigned sidebar on Android Auto - Android Police","description":"All the important buttons in stacked together","url":"https://www.androidpolice.com/google-maps-redesigned-sidebar-android-auto/","urlToImage":"https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/android-auto-2023-ap-hero-1.jpg","publishedAt":"2023-07-27T16:52:00Z","content":"Android Auto is one of the best ways to mirror your Android phone’s apps and content to your car’s infotainment system. The UI isn’t very customizable, but allows placing most menu items on one side … [+2164 chars]"},{"source":{"id":null,"name":"Forbes"},"author":"Janhoi McGregor","title":"Apple ‘Punishing’ iPad Pro Buyers With New Pencil Software Lockdown - Forbes","description":"Apple’s increasing effort to add software locks to hardware components in its tech has reached the iPad and Apple pencil, which means its harder and more expensive to ...","url":"https://www.forbes.com/sites/jaymcgregor/2023/07/27/apple-punishing-ipad-pro-buyers-with-new-pencil-software-lockdown/","urlToImage":"https://imageio.forbes.com/specials-images/imageserve/64c24d7c29aec797d46b2a63/0x0.jpg?format=jpg&width=1200","publishedAt":"2023-07-27T16:45:59Z","content":"An Apple Inc. iPad Pro Photographer: Brendon Thorne/Bloomberg\r\n© 2021 Bloomberg Finance LP\r\nThe Apple Pencil on your iPad Pro may not work properly if the display is replaced with a non-genuine Apple… [+5399 chars]"},{"source":{"id":null,"name":"gizmochina"},"author":"gizmochina","title":"OnePlus Ace 2 Pro August launch confirmed, to feature the largest cooling system in the industry - gizmochina","description":null,"url":"https://www.gizmochina.com/2023/07/27/oneplus-ace-2-pro-launch-timeline-specs-revealed/","urlToImage":null,"publishedAt":"2023-07-27T16:10:26Z","content":null},{"source":{"id":null,"name":"Gadgets360.com"},"author":"Richa Sharma","title":"WhatsApp Rolls Out Short Video Message Feature for Android, iOS: Details | Technology News - Gadgets 360","description":"WhatsApp has added a new feature to the app which enable users to send short video messages. While users could either reply with the help of instant audio or text message, the new feature now lets users to record short videos and send them in lieu of text mes…","url":"https://www.gadgets360.com/apps/news/whatsapp-rolls-out-short-instant-video-message-feature-android-ios-4246491","urlToImage":"https://i.gadgets360cdn.com/large/whatsapp_video_message_meta_blog_1690473795994.jpg","publishedAt":"2023-07-27T16:06:34Z","content":"WhatsApp has added a new feature to the app which enables users to send short video messages. While earlier users could either reply with the help of instant audio or text message, the new feature no… [+2272 chars]"},{"source":{"id":null,"name":"GSMArena.com"},"author":"Ivan","title":"Report: iPhone 15 Pro and 15 Pro Max to get price hikes - GSMArena.com","description":"Expect around $100 more for a Pro and around $200 more for a Pro Max. Europe to pay even more. We've already heard a few times that Apple is planning to up...","url":"https://www.gsmarena.com/report_the_iphone_15_pro_and_15_pro_max_to_get_price_hike-news-59340.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/23/07/apple-iphone-15-pro-price-hike/-952x498w6/gsmarena_000.jpg","publishedAt":"2023-07-27T15:13:01Z","content":"We've already heard a few times that Apple is planning to up the price of its most expensive iPhone, but the latest report gives us a specific number. According to Barclays analyst Tim Long, cited by… [+904 chars]"},{"source":{"id":null,"name":"Jagran.com"},"author":"Vikas Yadav","title":"Redmi 12 5G Price To Specifications, Everything We Know About Redmi's Biggest Display Phone - Jagran English","description":"Redmi 12 Roundup Redmi 12 will debut in India on August 1 in the budget segment The smartphone is confirmed to come with a Crystal Glass Design and Redmis biggest display ever Xiaomi will also launch the Redmi Watch 3 Active and the Xiaomi TV X series on the …","url":"https://english.jagran.com/technology/redmi-12-5g-price-in-india-specifications-launch-date-design-6-128-redmi-biggest-display-phone-latest-updates-10090292","urlToImage":"https://imgeng.jagran.com/images/2023/jul/redmi-12-5g1690467470422.jpg","publishedAt":"2023-07-27T14:44:43Z","content":"Redmi 12 will debut in India on August 1 in the budget segment. The Chinese smartphone maker has been teasing the phone for a while now, and we have several hints from the rumour mill that has given … [+1798 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"The Indian Express","title":"Stability AI unveils powerful image generator SDXL 1.0, its rival to Midjourney - The Indian Express","description":null,"url":"https://indianexpress.com/article/technology/artificial-intelligence/stability-ai-unveils-sdxl-1-0-midjourney-8863849/","urlToImage":null,"publishedAt":"2023-07-27T14:20:42Z","content":null},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"PTI","title":"Google for Startups Accelerator invites applications, focus on AI-first startups - The Economic Times","description":"Select startups will receive mentorship and training on product, design, growth and leadership development.","url":"https://economictimes.indiatimes.com/tech/startups/google-for-startups-accelerator-invites-applications-focus-on-ai-first-startups/articleshow/102178027.cms","urlToImage":"https://img.etimg.com/thumb/msid-102178036,width-1070,height-580,imgsize-11872,overlay-ettech/photo.jpg","publishedAt":"2023-07-27T14:20:00Z","content":"Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 4-in-1 Cooling,High Density Filter, Auto Cleanser, 2023 Model,ESTER Exi - CAI18ER3R32F0,White)\r\nBuy Now"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Lords of the Fallen - Extended Gameplay Presentation - Gematsu","description":"https://gematsu.com/games/lords-of-the-fallen-2023","url":"https://www.youtube.com/watch?v=i2j76cAMLn0","urlToImage":"https://i.ytimg.com/vi/i2j76cAMLn0/maxresdefault.jpg","publishedAt":"2023-07-27T14:13:43Z","content":null},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Benelli Leoncino 500 Exhaust Sound | BikeWale #shorts - BikeWale","description":"Have you listened to the exhaust note of the Benelli Leoncino 500? Here's a quick glimpse.#bikewale #leoncino500 #benellileoncino500 #benellileoncino #shorts...","url":"https://www.youtube.com/watch?v=JX65Gd8ZsB4","urlToImage":"https://i.ytimg.com/vi/JX65Gd8ZsB4/maxresdefault.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYUCBaKGUwDw==&rs=AOn4CLACCdQkcV7QtVAS_ditsvKo-LUk6g","publishedAt":"2023-07-27T13:58:19Z","content":null},{"source":{"id":null,"name":"Gadgets360.com"},"author":"Himani Jha, Manas Mitul","title":"Pebble Revolve Smartwatch With 1.39-Inch HD Display Launched in India - Gadgets 360","description":"Pebble Revolve smartwatch has been launched in India on Thursday. The smartwatch sports a 1.39-inch HD display with an always-on feature. The watch comes with three dials frames and three straps included in the box. It features Bluetooth calling, multiple spo…","url":"https://www.gadgets360.com/wearables/news/pebble-revolve-price-in-india-rs-3499-launch-specifications-features-4245953","urlToImage":"https://i.gadgets360cdn.com/large/Pebble_Revolve_main_1690465639817.jpg","publishedAt":"2023-07-27T13:50:13Z","content":"Pebble Revolve smartwatch has been launched in India on Thursday. The smartwatch sports a 1.39-inch HD display with an always-on feature. The watch comes with three different dial frames and three st… [+2091 chars]"},{"source":{"id":null,"name":"MacRumors"},"author":"Hartley Charlton","title":"iPhone 15 and iPhone 15 Plus Could Still Have Smaller Camera Sensor Than Pro Models Despite Upgrade to 48MP - MacRumors","description":"Apple's iPhone 15 and iPhone 15 Plus models could still have a smaller sensor than the iPhone 15 Pro and iPhone 15 Pro Max, despite their upgrade...","url":"https://www.macrumors.com/2023/07/27/iphone-15-still-to-have-smaller-sensor-than-pros/","urlToImage":"https://images.macrumors.com/t/R0r7mnpEficcUIhaUbXG8FEAwYU=/2500x/article-new/2023/04/iPhone-15-Cyan-and-Magenta-Frosted-Back-Feature.jpg","publishedAt":"2023-07-27T13:46:15Z","content":"Apple's iPhone 15 and ‌iPhone 15‌ Plus models could still have a smaller sensor than the iPhone 15 Pro and ‌iPhone 15 Pro‌ Max, despite their upgrade to 48-megapixels, according to a new rumor posted… [+1483 chars]"}]}

    generateUserInterface(tempData.articles);
    alert("Accessing Temporary Data. It's free api so Requests work only in localhost, not in web browsers.");
    // return false;
  } else {
    let data = await response.json();
    generateUserInterface(data.articles);
  }
  
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
