"use strict";

const htmlElement = document.getElementsByTagName("html")[0];
const toggleBtn = document.getElementById("btnEnableDarkMode");
const colorThemeIcon = document.getElementById("colorThemeIcon");

toggleBtn.addEventListener("click", () => {
  if (htmlElement.hasAttribute("data-bs-theme")) {
    colorThemeIcon.classList.add("bi-moon-fill");
    colorThemeIcon.classList.remove("bi-sun-fill");
    htmlElement.removeAttribute("data-bs-theme");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    colorThemeIcon.classList.remove("bi-moon-fill");
    colorThemeIcon.classList.add("bi-sun-fill");
  }
});
