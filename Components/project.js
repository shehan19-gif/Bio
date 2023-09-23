import projectList from "./projectList.js";

function project(elements) {
    const mainTag = document.querySelector("main");

    for(const element of elements) {
        element.onclick = function(e) {
            console.log(element.id);
            const holder = document.createElement("div");
            holder.classList = ["project-image-large"];
            mainTag.appendChild(holder);

            const imgArray = [];

            for(let i = 0; i < projectList.length; i++) {
                if(Number(element.id) == projectList[i].id) {
                    // console.log(projectList[i].id, Number(element.id));
                    for(let j = 0; j < projectList[i].images.length; j++) {
                        imgArray.push(projectList[i].images[j]);
                    }
                }
            }

            // const imgTag = document.createElement("img");
            // imgTag.src = projectList[i][0];

            console.log(imgArray);

            const imgsContainerTag = document.createElement("div");
            imgsContainerTag.classList = ["imgs-container-div"];

            const leftBtn = document.createElement("BUTTON");
            leftBtn.innerHTML = `<i class="fa-solid fa-hand-point-left"></i>`;

            let currentImgNumber = 0;

            const imgTag = document.createElement("img");
            imgTag.src = imgArray[0];

            const rightBtn = document.createElement("BUTTON");
            rightBtn.innerHTML = `<i class="fa-solid fa-hand-point-right"></i>`;

            imgsContainerTag.append(leftBtn, imgTag, rightBtn);

            holder.appendChild(imgsContainerTag);

            leftBtn.onclick = function() {
                console.log("left button clicked");
                if(currentImgNumber === 0) {
                    currentImgNumber = imgArray.length - 1;
                }else {
                    currentImgNumber = currentImgNumber - 1;
                }
                imgTag.src = imgArray[currentImgNumber];
                console.log(currentImgNumber);
            }

            rightBtn.onclick = function() {
                console.log("right button clicked");
                if(currentImgNumber === imgArray.length - 1) {
                    currentImgNumber = 0;
                }else {
                    currentImgNumber = currentImgNumber + 1;
                }
                imgTag.src = imgArray[currentImgNumber];
                console.log(currentImgNumber);
            }

            holder.onclick = function(e) {
                if(e.target == holder) {
                    mainTag.removeChild(holder);
                    // console.log("done");
                }
            }
        }
    }
}

export default project;