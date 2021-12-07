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

        const tempHumidityDivEl = document.createElement("div");
        tempHumidityDivEl.classList.add("temp_humnidity_div")
    
        const tempDisplayEl = document.createElement("p");
        tempDisplayEl.classList.add("temp_data_display");
        tempDisplayEl.innerText = reptile.temp;
    
        const humidityDisplayEl = document.createElement("p");
        humidityDisplayEl.classList.add("humidity_data_display");
        humidityDisplayEl.innerText = reptile.humidity;

        const petAgendaCalendarDivEl = document.createElement("div");
        petAgendaCalendarDivEl.classList.add('pet_calendar_div');
        petAgendaCalendarDivEl.innerHTML = `<iframe src="https://calendar.google.com/calendar/embed?src=${reptile.myCalendar.googleCalendarId}&mode=AGENDA" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>`

        // const petAgendaCalendarEl = document.createElement("iframe");
        // petAgendaCalendarEl.classList.add('single_pet_calendar');
        // console.log(reptile.myCalendar.googleCalendarId);
        // petAgendaCalendarEl.innerHTML = `src="https://calendar.google.com/calendar/embed?src=kgdiceanqa9aiota4od8r89shk@group.calendar.google.com&mode=AGENDA" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no">`
        // petAgendaCalendarDivEl.appendChild(petAgendaCalendarEl);

        const petMonthCalendarEl = document.createElement("div");
        //code to show calendar view

        tempHumidityDivEl.appendChild(tempDisplayEl);
        tempHumidityDivEl.appendChild(humidityDisplayEl);

        singlePetSectionEl.appendChild(singlePetImageEl);
        singlePetSectionEl.appendChild(tempHumidityDivEl);
        singlePetSectionEl.appendChild(petAgendaCalendarDivEl);
        singlePetSectionEl.appendChild(petMonthCalendarEl);
        reptileSectionEl.appendChild(singlePetSectionEl);

        petOverviewSectionEl.appendChild(reptileSectionEl);
    });

    mainEl.appendChild(petOverviewSectionEl);

}

export {
    displayPetsView
};