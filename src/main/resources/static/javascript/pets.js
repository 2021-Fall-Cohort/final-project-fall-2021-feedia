import {
    displayPetView
} from "./pet.js"

import {
    clearChildren
} from "./app.js"

function displayPetsView(mainEl, reptiles){
    const petOverviewSectionEl = document.createElement("div");
    petOverviewSectionEl.classList.add("pet_overview_section");

    reptiles.forEach(reptile => {
        const reptileSectionEl = document.createElement("section");

        const petLinksEl = document.createElement("div");
        petLinksEl.classList.add("pet_links");

        // const petNameEl = document.createElement("p");

        const petNameTextEl = document.createElement("p");
        petNameTextEl.innerText = reptile.name;
        petNameTextEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayPetView(mainEl, reptile);
        });

        // const petArchiveEl = document.createElement("p");

        const petArchiveTextEl = document.createElement("p");
        petArchiveTextEl.innerText = "Archive";
        petArchiveTextEl.addEventListener("click", () => {
            fetch(`http://localhost:8080/reptiles/${reptile.id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(reptiles => {
                clearChildren(mainEl);
                displayPetsView(mainEl, reptiles);
            })
            .catch(err => console.error(err));
        });

        reptileSectionEl.appendChild(petLinksEl);
        petLinksEl.appendChild(petNameTextEl);
        petLinksEl.appendChild(petArchiveTextEl);

        const singlePetSectionEl = document.createElement("div");
        singlePetSectionEl.classList.add("pet_Section");

        const singlePetImageEl = document.createElement("img");
        singlePetImageEl.src = reptile.image;
        singlePetImageEl.alt = "pet portrait";
        singlePetImageEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayPetView(mainEl, reptile);
        });

        const petAgendaCalendarEl = document.createElement("div");
        //code to show agenda view

        const petMonthCalendarEl = document.createElement("div");
        //code to show calendar view

        singlePetSectionEl.appendChild(singlePetImageEl);
        singlePetSectionEl.appendChild(petAgendaCalendarEl);
        singlePetSectionEl.appendChild(petMonthCalendarEl);
        reptileSectionEl.appendChild(singlePetSectionEl);

        petOverviewSectionEl.appendChild(reptileSectionEl);
    });

    mainEl.appendChild(petOverviewSectionEl);

}

export {
    displayPetsView
};