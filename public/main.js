// imports

import navBar from "./Components/navbar.js";
import downloadCV from "./Components/downloadCV.js";
import languages  from "./Components/languages.js";
import portfolio from "./Components/portfolio.js";
import emailProcess from "./Components/emailJS.js";
import project from "./Components/project.js";

// access to header

const hamburg = document.getElementById("hamburg");
const hamOpen = document.getElementById("open");
const hamClose = document.getElementById("close");
const linkNavBar = document.getElementById("navbar-2");

navBar(hamburg, hamOpen, hamClose, linkNavBar);

console.log(window.innerWidth);

// access to CV download button

const CVButton = document.getElementById("cv-download");

CVButton.addEventListener("click", function() {
    downloadCV();
}, false);

// access to languages section

const languagesSection = document.getElementById("languages-section");

languages(languagesSection);

// access to portfolio section

const portfolioSection = document.getElementById("portfolio-section");

portfolio(portfolioSection);

const portfolioElements = document.getElementsByClassName("project-container-div");

project(portfolioElements);

// access to contact section

/* data access */

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailID");
const message = document.getElementById("messageArea");
const submitBtn = document.getElementById("submit-btn");

/* warning access */

const firstNameWarning = document.querySelector(".first-name-warning");
const lastNameWarning = document.querySelector(".last-name-warning");
const emailWarning = document.querySelector(".email-warning");
const messageWarning = document.querySelector(".message-warning");

const formDataElementWithWarning = [
    {
        element: firstName,
        elementWarning: firstNameWarning
    },
    {
        element: lastName,
        elementWarning: lastNameWarning
    },
    {
        element: email,
        elementWarning: emailWarning
    },
    {
        element: message,
        elementWarning: messageWarning
    }
];

for(const {element, elementWarning} of formDataElementWithWarning) {
    element.onchange = function(e) {
        elementWarning.textContent = "";
    }
}

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let warningCount = 0;

    if(firstName.value === "") {
        firstNameWarning.textContent = "* This filed must be filled!";
        warningCount++;
    }
    
    if(lastName.value === "") {
        lastNameWarning.textContent = "* This filed must be filled!";
        warningCount++;
    }
    
    if(email.value === "") {
        emailWarning.textContent = "* This filed must be filled!";
        warningCount++;
    }
    
    if(message.value === "") {
        messageWarning.textContent = "* This filed must be filled!";
        warningCount++;
    }

    if(warningCount > 0) return;

    let templateParams = {
        name: firstName.value + " " + lastName.value,
        email: email.value,
        message: message.value
    };

    emailProcess(templateParams, formDataElementWithWarning);

    console.log(templateParams);
});