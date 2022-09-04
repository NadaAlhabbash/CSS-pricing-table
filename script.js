const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const slider = document.querySelector("active-span");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active-span");
    });
    tab.classList.add("active-span");
    target.classList.add("active");
    slider.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
    slider.style.backgroundColor = "red";
  });
});
