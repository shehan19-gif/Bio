// import keys

// import { SERVICE_ID, TEMPLATE_ID } from "./keys.js";
import fetchSecrets from "./fetchSecrets.js";

const {SERVICE_ID, TEMPLATE_ID} = await fetchSecrets();

console.log(SERVICE_ID);

function emailProcess(templateParams, elementList) {

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           if(response.status === 200) {
            for(const {element} of elementList) {
                element.value = "";
            }

            const successMessageContainer = document.querySelector("#success-message-container");
            const successPara = document.createElement("p");
            successPara.textContent = "Message Successfully Sent!"
            successPara.className = "success-message";

            successMessageContainer.appendChild(successPara);

            setTimeout(function() {
                document.querySelector(".success-message").remove();
            }, 5000);

           }
        }, function(error) {
           console.log('FAILED...', error);
        });

}

export default emailProcess;