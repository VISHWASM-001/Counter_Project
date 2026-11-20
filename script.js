let add = document.getElementById("btn1");
let reset = document.getElementById("btn2");
let sub = document.getElementById("btn3");
let count = 0

document.getElementById("output1").textContent = count;

function adding(){
    count++;
    document.getElementById("output1").textContent = count;
}
function reseting(){
    count = 0;
    document.getElementById("output1").textContent = count;
}
function substracting(){
    count--;
    document.getElementById("output1").textContent = count;
}

add.onclick = adding
reset.onclick = reseting
sub.onclick = substracting

let root = document.documentElement;
let themeBtn = document.getElementById("dlbtn");

function applyTheme(theme){
    root.setAttribute("data-theme", theme);
    themeBtn.textContent = theme === "dark" ? "☀" : "☾";
    themeBtn.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    try { localStorage.setItem("theme", theme); } catch(e) {}
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch(e) {}
let prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(saved || (prefersLight ? "light" : "dark"));

themeBtn.onclick = function() {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
};
