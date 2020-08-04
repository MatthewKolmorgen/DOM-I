const siteContent = {
  "nav": {
    "nav-item-1": "Services",

    "nav-item-2": "Product",

    "nav-item-3": "Vision",

    "nav-item-4": "Features",

    "nav-item-5": "About",

    "nav-item-6": "Contact",

    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",

    "button": "Get Started",

    "img-src": "img/header-img.png"
  },

  "main-content": {

    "features-h4":"Features",

    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",

    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",

    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",

    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",

    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// ********* Nav Bar *********


const navItem = document.querySelectorAll("nav a");

navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];


// ********* cta Content *********


const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"]


const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"]["h1"]


const ctaImage = document.querySelector(".cta img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);


// ********* Main Content *********

// ** Features **
const featuresHeader = document.querySelectorAll("h4")[0];
featuresHeader.textContent = siteContent["main-content"]["features-h4"]

const featuresContent = document.querySelectorAll("p")[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

// ** About **
const aboutHeader = document.querySelectorAll("h4")[1];
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll("p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"]

// ** Image **
const middleImage = document.querySelector(".main-content img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// ** Services **
const servicesHeader = document.querySelectorAll("h4")[2];
servicesHeader.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelectorAll("p")[2];
servicesContent.textContent = siteContent["main-content"]["services-content"]

// ** Product **
const productHeader = document.querySelectorAll("h4")[3];
productHeader.textContent = siteContent["main-content"]["about-h4"];

const productContent = document.querySelectorAll("p")[3];
productContent.textContent = siteContent["main-content"]["about-content"];

// ** Vision **
const visionHeader = document.querySelectorAll("h4")[4];
visionHeader.textContent = siteContent["main-content"]["about-h4"];

const visionContent = document.querySelectorAll("p")[4];
visionContent.textContent = siteContent["main-content"]["about-content"];


// ********* Contact *********


const contactUs = document.querySelector(".contact h4");
contactUs.textContent = siteContent["contact"]["contact-h4"];

const contactUsParagraph = document.querySelectorAll(".contact p");
contactUsParagraph[0].textContent = siteContent["contact"]["address"];
contactUsParagraph[1].textContent = siteContent["contact"]["phone"];
contactUsParagraph[2].textContent = siteContent["contact"]["email"];


// ********* Footer *********


const gICopyright =  document.querySelector("footer p");
gICopyright.textContent = siteContent["footer"]["copyright"];


// ********* Change Nav Color *********

navItem.forEach((link) => {
  link.style.color = "green";
});


// ********* Utilize `.appendChild()` and `.prepend()` *********


const navLink = document.querySelector(".container nav");
const newNavLink = document.createElement("a");
newNavLink.textContent = "There";
newNavLink.href = "#"
navLink.appendChild(newNavLink);

const anotherLink = document.createElement("a");
anotherLink.textContent = "Hi";
anotherLink.href = "#";
navLink.prepend(anotherLink);
