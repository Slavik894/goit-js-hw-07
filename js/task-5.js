function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

buttonEl.addEventListener("click", () =>
{
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
  
});

const widgetText = document.querySelector(".widget p");

widgetText.style.color = " #2e2f42";
widgetText.style.letterSpacing = "0.04em";
widgetText.style.lineHeight = "150%";
widgetText.style.fonSize = "16px";
widgetText.style.fontWeight = "400";

buttonEl.style.padding = " 8px 16px";
buttonEl.style.color = " #FFF";
buttonEl.style.borderStyle = "none";
buttonEl.style.borderRadius = " 8px";

buttonEl.style.backgroundColor = "#4e75ff";
buttonEl.style.letterSpacing = "  0.04em";
buttonEl.style.lineHeight = "150%";
buttonEl.style.fonSize = "16px";
buttonEl.style.fontWeight = "500";





