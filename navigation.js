const hamBtn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

hamBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    hamBtn.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    nav.setAttribute("data-visible", false);
    hamBtn.setAttribute("aria-expanded", false);
  }
});
console.log(hamBtn.getAttribute("aria-expanded"));
