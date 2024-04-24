const inputField = document.querySelector("#num-input");
const cssLink = document.querySelectorAll("link")[2];
const themeToogleBtns = document.querySelectorAll("input[type='radio']");
const btn = document.querySelectorAll("button");
const btnArray = Array.from(btn);
const themeBtn1 = document.querySelector("#theme-1");
const themeBtn2 = document.querySelector("#theme-2");
const themeBtn3 = document.querySelector("#theme-3");
let result;
// To change theme
function updateTheme(index) {
    if (index === "0") {
        cssLink.setAttribute('href', ``);
    } else {
        cssLink.setAttribute('href', `./css/theme_${index}.css`);
    }
}
// To apply events on every themeToogleBtn
themeToogleBtns.forEach((element) => {
    element.addEventListener("click", () => {
        updateTheme(element.value);
    });
});

btnArray.map((eachElement) => {
    eachElement.addEventListener("click", (e) => {
        const currentValue = e.target.textContent;
        if (currentValue.toLowerCase() === "reset") {
            inputField.value = "";
        } else if (currentValue.toLowerCase() === "del") {
            // To remove last element from input.
            inputField.value = inputField.value.slice(0, -1);
        } else if (currentValue === "=") {
            // This is result section
            result = inputField.value;
            const operator = ["+", "-", "x", "/"];
            if (result === "" || operator.includes(result.slice(-1))) return;
            if (result.includes("x")) {
                result = result.replaceAll("x", "*");
                inputField.value = eval(result).toLocaleString();
            } else {
                inputField.value = eval(result).toLocaleString();
                console.log("This is eval result", eval(result).toLocaleString());
            }
        } else {
            inputField.value += currentValue;
        }
    });
});
