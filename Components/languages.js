function languages(element) {
    // array of skills objects
    const skills = [
        {
            language: "HTML5",
            skill: 100
        },
        {
            language: "CSS3",
            skill: 100
        },
        {
            language: "Javascript",
            skill: 100
        },
        {
            language: "Figma",
            skill: 100
        },
        {
            language: "NodeJS",
            skill: 90
        },
        {
            language: "Express",
            skill: 90
        },
        {
            language: "React",
            skill: 90
        },
        {
            language: "MongoDB",
            skill: 90
        },
        {
            language: "MySQL",
            skill: 90
        },
        {
            language: "PHP",
            skill: 90
        },
        {
            language: "Python",
            skill: 80
        },
        {
            language: "C",
            skill: 70
        },
        {
            language: "C++",
            skill: 50
        },
        {
            language: "Laravel",
            skill: 50
        },
    ];

    for(const {language, skill} of skills) {
        // skill container
        const skillDIV = document.createElement("div");
        skillDIV.classList = `language ${language}-elememnt`;
        
        // icon create and container

        let iconHTML = "";

        if(language === "Express") {
            iconHTML = `<i class="devicon-express-original colored"></i>`;
        } else if(language === "C++") {
            iconHTML = `<i class="devicon-cplusplus-plain colored"></i>`;
        } else {
            iconHTML = `<i class="devicon-${language.toLowerCase()}-plain colored langicon"></i>`;
        }

        const iconContainer = document.createElement("div");
        iconContainer.className = "icon-div";
        iconContainer.innerHTML = iconHTML;

        // progress bar
        const outerProgressHolder = document.createElement("div");
        outerProgressHolder.className = "outer-progress";

        const innerProgressBar = document.createElement("div");
        innerProgressBar.className = "inner-progress";
        innerProgressBar.style.width = `${skill}%`;

        outerProgressHolder.appendChild(innerProgressBar);

        // add to the skill container
        skillDIV.appendChild(iconContainer);
        skillDIV.appendChild(outerProgressHolder);

        // add to the languages section
        element.appendChild(skillDIV);
    }

    // element.onload = function() {
    //     innerProgressBar.style.transition = "all 5s";
    // }

    // innerProgressBar.style.transition = "width 5s";
}

export default languages;