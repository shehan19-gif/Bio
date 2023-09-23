function navBar(ham, openHam, closeHam, linkNavBar) {
    ham.addEventListener("click", function() {
        if(openHam.classList.contains("ham-hide")) {
            openHam.classList.remove("ham-hide");
            closeHam.classList.add("ham-hide");
            linkNavBar.classList.add("link-nav");
        }else if(closeHam.classList.contains("ham-hide")) {
            openHam.classList.add("ham-hide");
            closeHam.classList.remove("ham-hide");
            linkNavBar.classList.remove("link-nav");
        }
    });
}

export default navBar;