import "./style.css";
import handleUtmParams from "./js/utm.js";

const dropdowns = document.querySelectorAll(".dropdown");
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (
      !dropdown.contains(e.target) &&
      !document.querySelector(dropdown.dataset.toggle).contains(e.target)
    ) {
      dropdown.classList.remove("active");
      document
        .querySelector(dropdown.dataset.toggle)
        .classList.add("lg:opacity-0");
      document
        .querySelector(dropdown.dataset.toggle)
        .classList.add("pointer-events-none");
      document
        .querySelector(dropdown.dataset.toggle)
        .classList.add("lg:-translate-y-4");
    }
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    dropdown.classList.toggle("active");

    document
      .querySelector(dropdown.dataset.toggle)
      .classList.toggle("lg:opacity-0");

    document
      .querySelector(dropdown.dataset.toggle)
      .classList.toggle("pointer-events-none");

    document
      .querySelector(dropdown.dataset.toggle)
      .classList.toggle("lg:-translate-y-4");

    document
      .querySelector(dropdown.dataset.toggle)
      .classList.toggle("-left-[100vw]");

    if (window.matchMedia("(max-width: 1024px)").matches) {
      // document.documentElement.classList.toggle("overflow-hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("user-menu-button");
  button.addEventListener("click", function (event) {
    const buttonId = event.target.id;

    const target = document.querySelector(button.dataset.toggle);
    target.classList.toggle("hidden");
    target.classList.toggle("block");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const target = document.querySelector(button.dataset.toggle);
    if (!button.contains(e.target) && !target.contains(e.target)) {
      target.classList.add("hidden");
      target.classList.remove("block");
    }
  });
});

// call utm handler
handleUtmParams();
