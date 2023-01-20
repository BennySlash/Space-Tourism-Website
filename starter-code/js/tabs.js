const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", handleTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;

function handleTabFocus(e) {
  const keydownleft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownRight || e.keyCode === keydownleft) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  if (e.keyCode === keydownleft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }
  tabs[tabFocus].setAttribute("tabList", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // mainContainer.querySelectorAll("article").forEach((article) => {
  //   article.setAttribute("hidden", true);
  // });
  hideContent(mainContainer, "article");

  // mainContainer.querySelectorAll("picture").forEach((picture) => {
  //   picture.setAttribute("hidden", true);
  // });
  hideContent(mainContainer, "picture");

  // mainContainer.querySelectorAll(`#${targetPanel}`).forEach((content) => {
  //   content.removeAttribute("hidden");
  // });

  showContent(mainContainer, `#${targetPanel}`);

  tabContainer.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-selected", false);
  });
  targetTab.setAttribute("aria-selected", true);
}

// Code Refactoring

function showContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.removeAttribute("hidden"));
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}
