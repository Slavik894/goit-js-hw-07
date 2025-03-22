const loginFormEl = document.querySelector(".login-form");
const labels = document.querySelectorAll(".login-form label");
const inputs = document.querySelectorAll(".login-form input");
const buttonEl = document.querySelector("button")

loginFormEl.addEventListener("submit", event =>{
    event.preventDefault();
    const email = loginFormEl.elements.email.value;
    const password = loginFormEl.elements.password.value;

    if(email === "" || password === ""){
        alert('All form fields must be filled in');
    }
    else{
        const result = {
            email: loginFormEl.elements.email.value.trim(),
            password: loginFormEl.elements.password.value.trim(),
        } 
        console.log(result);
    }
   
    loginFormEl.reset();
});

labels.forEach(label =>
{
    label.style.display = "flex";
    label.style.flexDirection = "column";
    label.style.gap = "8px";
});

inputs.forEach(input =>
{
    input.style.fontSize = "16px";
    input.style.paddingTop = "8px";
    input.style.paddingBottom = "8px";
    input.style.paddingLeft = "16px";
    input.style.paddingRight = "16px";
    input.style.border = "1px solid #808080";
    input.style.borderRadius = "4px";

    input.addEventListener("mouseenter", () =>{
        input.style.border = "1px solid #000";
    });
    input.addEventListener("mouseleave", () =>{
        input.style.border = "1px solid #808080";
    });
    

});

buttonEl.style.fontSize = "16px";
buttonEl.style.lineHeight = "150%";

buttonEl.style.paddingTop = "8px";
buttonEl.style.paddingBottom = "8px";
buttonEl.style.paddingLeft = "16px";
buttonEl.style.paddingRight = "16px";
buttonEl.style.background = "#4e75ff";
buttonEl.style.borderStyle = "none";
buttonEl.style.borderRadius = "8px";
buttonEl.style.marginTop = "16px";
buttonEl.style.color = "#fff";

buttonEl.addEventListener("mouseenter", () =>{
    buttonEl.style.background = "#6c8cff";
});
buttonEl.addEventListener("mouseleave", () =>{
    buttonEl.style.background = "#4e75ff";
});

















