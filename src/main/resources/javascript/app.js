import {displayPetView} from "./pet.js";

const containerEl = document.querySelector(".container");

buildHeader();
buildmain();
buildFooter();

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

function buildHeader() {
    const sectionEl = document.createElement("section");
    const divEl = document.createElement("div");
    divEl.classList.add("site_links");

    const headerEl = document.createElement("header");
    headerEl.id = "header";

    const headerLogoEl = document.createElement("img");
    headerLogoEl.src= "images/feedia_logo.png";
    headerLogoEl.alt = "site logo";
    headerLogoEl.classList.add("logo");

     sectionEl.appendChild(headerEl);
     headerEl.appendChild(headerLogoEl);
     containerEl.appendChild(headerEl);

} 

function buildmain() {
    // const mainEl = document.createElement("main");
    // mainEl.classList.add("main-content");
    // containerEl.appendChild(mainEl);
    // displayPetView(mainEl, pets);
}

function buildFooter() {
    const footerEl = document.createElement("footer");
    const footerDivEl = document.createElement("div");

    footerDivEl.classList.add("footer_text");
    const footerTextEl = document.createElement("p");
    footerTextEl.innerHTML = "We Can Code it &copy; 2021";
    2021

    footerDivEl.appendChild(footerTextEl);
    footerEl.appendChild(footerDivEl);
    containerEl.appendChild(footerEl);
}
export {clearChildren}