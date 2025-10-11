function downloadCV() {
    const pathName = "./Assets/Shehan_Maduwantha_CV.pdf";
    const fileName = "Shehan_Maduwantha_CV.pdf";

    const link = document.createElement("a");
    link.href = pathName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default downloadCV;
