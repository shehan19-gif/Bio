import projectList from "./projectList.js";

function portfolio(element) {
    const projectDataList = [...projectList];

    for(const {id, title, images, languages, description, link} of projectDataList) {
        // project container
        const projectContainerDIV = document.createElement("div");
        projectContainerDIV.classList = `project-container-div project-container-div-${id}`;
        projectContainerDIV.setAttribute("id", `${id}`);
        projectContainerDIV.style.flex = `25%`;

        if(window.innerWidth <= 912) {
            projectContainerDIV.style.flex = `49%`;
        }

        // const projectContainer = document.createElement("a");
        // projectContainer.href = `#project-${id}`;
        // projectContainer.classList = `project projectClass-${id}`;

        const projectContainer = document.createElement("div");
        // projectContainer.href = `#project-${id}`;
         projectContainer.classList = `project projectClass-${id}`;

        projectContainerDIV.appendChild(projectContainer);

        // image tag
        const imgTag = `<img src=${images[0]} class="project-img" />`;

        // overlay
        const overlayDIV = document.createElement("div");
        overlayDIV.className = "overlay-container";

        const overlayTitle = document.createElement("h2");
        overlayTitle.textContent = title;

        const programmingLanguages = document.createElement("div");
        programmingLanguages.classList = ["programming-languages"];

        let languagesList = "";

        for(const language of languages) {
            languagesList = languagesList + `<i class="devicon-${language.toLowerCase()}-plain colored langicon"></i>`;
        }

        programmingLanguages.innerHTML = languagesList;

        const overlayDescription = document.createElement("p");
        overlayDescription.innerHTML = description;

        overlayDIV.appendChild(overlayTitle);
        overlayDIV.appendChild(overlayDescription);
        overlayDIV.appendChild(programmingLanguages);

        // view project button
        // const viewProject = document.createElement("button");
        // viewProject.type = "button";
        // viewProject.id = `projectID-${id}`;

        // append to project container
        projectContainer.innerHTML = imgTag;
        projectContainer.appendChild(overlayDIV);

        // append to element
        element.appendChild(projectContainerDIV);
    }
}

export default portfolio;