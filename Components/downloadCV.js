function downloadCV() {
    const pathName = "./Assets/Shehan.pdf";
    const fileName = "CV.pdf";

    const link = document.createElement("a");
    link.href = pathName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default downloadCV;