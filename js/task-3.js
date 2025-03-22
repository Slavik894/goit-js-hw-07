const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
const greetingMessage = document.querySelector("h1");

nameInputEl.addEventListener("input", (logMessage) => {
    if(logMessage.currentTarget.value.trim() === ''){
         nameOutputEl.textContent = "Anonymus";
   }
 else{
    nameOutputEl.textContent = logMessage.currentTarget.value.trim(); 
 }
});    

nameInputEl.style.border = "1px solid #808080";
nameInputEl.style.borderRadius = "4px"
nameInputEl.style.width = "360px"
nameInputEl.style.paddingTop = "8px"
nameInputEl.style.paddingBottom = "8px"
nameInputEl.style.paddingLeft = "16px"
nameInputEl.style.paddingRight = "16px"


nameInputEl.style.fontFamily = "Montserrat";
nameInputEl.style.fontSize = "16px";
nameInputEl.style.color = "#2e2f42";
nameInputEl.style.fontWeight = "400";

greetingMessage.style.fontFamily = "Montserrat";
greetingMessage.style.fontWeight = "600";
greetingMessage.style.fontSize = "24px";
greetingMessage.style.color = "#2e2f42";
greetingMessage.style.letterSpacing = " 0.04em";









    
    


