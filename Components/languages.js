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
            language: "PHP",
            skill: 100
        },
        {
            language: "MySQL",
            skill: 80
        },
        {
            language: "Python",
            skill: 75
        },
        {
            language: "NodeJS",
            skill: 50
        },
        {
            language: "React",
            skill: 10
        },
        {
            language: "Laravel",
            skill: 10
        },
    ];

    for(const {language, skill} of skills) {
        // skill container
        const skillDIV = document.createElement("div");
        skillDIV.classList = `language ${language}-elememnt`;
        
        // icon create and container
        const iconHTML = `<i class="devicon-${language.toLowerCase()}-plain colored langicon"></i>`;

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