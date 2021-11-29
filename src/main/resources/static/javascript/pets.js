import {
    displayPetView
} from "./pet.js"

import {
    clearChildren
} from "./app.js"

function displayPetsView(containerEl, reptiles){
    const petOverviewSectionEl = document.createElement("div");
    petOverviewSectionEl.classList.add("pet_overview_section");

    reptiles.forEach(reptile => {
        const reptileSectionEl = document.createElement("section");

        const petLinksEl = document.createElement("div");
        petLinksEl.classList.add("pet_links");

        
    })

}