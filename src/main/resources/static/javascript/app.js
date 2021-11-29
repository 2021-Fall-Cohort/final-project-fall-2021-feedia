import {displayPetView} from "./pet.js";
import { displayPetsView } from "./pets.js";

const containerEl = document.querySelector(".container");

buildHeader();

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

function buildHeader() {
    const sectionEl = document.createElement("section");
    const divEl = document.createElement("div");
    divEl.classList("site_links");

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

function buildMainElement(){
    const mainEl = document.createElement("main");
    mainEl.classList.add("main-content");
    containerEl.appendChild(mainEl);
    displayPetsView(mainEl, reptiles);
}