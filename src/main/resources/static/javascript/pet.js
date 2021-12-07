import {
    clearChildren
} from "./app.js"

import{
    displayPetsView
} from "./pets.js"

function displayPetView(mainEl, reptile, reptiles) {

    const singlePetDisplayAnchorEl = document.createElement("div");
    singlePetDisplayAnchorEl.classList.add("anchor");

    const singlePetDisplayContainerEl = document.createElement("div");
    singlePetDisplayContainerEl.classList.add("container");

    const singlePetInfoSectionEl = document.createElement("section");
   
    const singlePetDisplayDivEl = document.createElement("div");
    singlePetDisplayDivEl.classList.add("single_pet");

    const singlePetPetInfoDivEl = document.createElement("div");
    singlePetPetInfoDivEl.classList.add("pet_info");

    const singlePetPortraitDivEl = document.createElement("div");
    singlePetPortraitDivEl.classList.add("pet_portrait");

    const singlePetPortraitEl = document.createElement("img");
    singlePetPortraitEl.src = reptile.image;
    singlePetPortraitEl.alt = "pet portrait";

    const tempHumidityDivEl = document.createElement("div");
    tempHumidityDivEl.classList.add("temp_humnidity_div")

    const tempDisplayEl = document.createElement("p");
    tempDisplayEl.classList.add("temp_data_display");
    tempDisplayEl.innerText = reptile.temp;

    const humidityDisplayEl = document.createElement("p");
    humidityDisplayEl.classList.add("humidity_data_display");
    humidityDisplayEl.innerText = reptile.humidity;

    const singlePetDemographicsDivEl = document.createElement("div");
    singlePetDemographicsDivEl.classList.add("pet_demographics");

    const singlePetNameEl = document.createElement("p");
    singlePetNameEl.innerText = reptile.name;

    const singlePetAgeEl = document.createElement("p");
    singlePetAgeEl.innerText = reptile.age;

    const singlePetSexEl = document.createElement("p");
    singlePetSexEl.innerText = reptile.sex;

    singlePetDisplayAnchorEl.appendChild(singlePetDisplayContainerEl);
    singlePetDisplayContainerEl.appendChild(singlePetInfoSectionEl);
    singlePetInfoSectionEl.appendChild(singlePetDisplayDivEl);
    singlePetDisplayDivEl.appendChild(singlePetPetInfoDivEl);
    singlePetPetInfoDivEl.appendChild(singlePetPortraitDivEl);
    singlePetPetInfoDivEl.appendChild(tempHumidityDivEl);
    singlePetPetInfoDivEl.appendChild(singlePetDemographicsDivEl);
    singlePetPortraitDivEl.appendChild(singlePetPortraitEl);
    tempHumidityDivEl.appendChild(tempDisplayEl);
    tempHumidityDivEl.appendChild(humidityDisplayEl);
    singlePetDemographicsDivEl.appendChild(singlePetNameEl);
    singlePetDemographicsDivEl.appendChild(singlePetAgeEl);
    singlePetDemographicsDivEl.appendChild(singlePetSexEl);

    const singlePetTopTableSectionEl = document.createElement("section");

    const singlePetTablesTopEl = document.createElement("div");
    singlePetTablesTopEl.classList.add("tables_top");

    const singlePetCareTableEl = document.createElement("div");
    singlePetCareTableEl.classList.add("pet_care_table");

    const singlePetTableLinksEl = document.createElement("div");
    singlePetTableLinksEl.classList.add("table_links");

    const singlePetTableTitleEl = document.createElement("h4");
    singlePetTableTitleEl.innerText = "Schedule";

    // const singlePetAddScheduleEl = document.createElement("a");
    // singlePetAddScheduleEl.innerText = "Add Schedule";
    // singlePetAddScheduleEl.href = "#";

    const singlePetTableItemsDivEl = document.createElement("div");
    singlePetTableItemsDivEl.classList.add("table_items");

    const singlePetTableItemsListEl = document.createElement("ul");

    const singlePetTableItem1El = document.createElement("li");
    singlePetTableItem1El.innerText = "Placeholder";

    const singlePetTableItem2El = document.createElement("li");
    singlePetTableItem2El.innerText = "Placeholder";

    const singlePetTableItem3El = document.createElement("li");
    singlePetTableItem3El.innerText = "Placeholder";

    singlePetTopTableSectionEl.appendChild(singlePetTablesTopEl);
    singlePetTablesTopEl.appendChild(singlePetCareTableEl);
    singlePetCareTableEl.appendChild(singlePetTableLinksEl);
    singlePetCareTableEl.appendChild(singlePetTableItemsDivEl);
    singlePetTableLinksEl.appendChild(singlePetTableTitleEl);
    // singlePetTableLinksEl.appendChild(singlePetAddScheduleEl);
    singlePetTableItemsDivEl.appendChild(singlePetTableItemsListEl);
    singlePetTableItemsListEl.appendChild(singlePetTableItem1El);
    singlePetTableItemsListEl.appendChild(singlePetTableItem2El);
    singlePetTableItemsListEl.appendChild(singlePetTableItem3El);

    const singlePetTablesSectionEl = document.createElement("section");

    const singlePetCareNotesTableEl = document.createElement("div");
    singlePetCareNotesTableEl.classList.add("pet_care_table");

    const singlePetNotesTableLinksEl = document.createElement("div");
    singlePetNotesTableLinksEl.classList.add("table_links");

    const singlePetAddNoteDivEl = document.createElement("div");
    singlePetAddNoteDivEl.classList.add("add_note_section");

    const singlePetTableNotesTitleEl = document.createElement("h4");
    singlePetTableNotesTitleEl.innerText = "Notes";

    const notesDisplayDivEl = document.createElement("div");
    notesDisplayDivEl.classList.add("notes_display_div");

    reptile.notes.forEach(note => {
        const noteDisplayBoxEl = document.createElement("div");
        noteDisplayBoxEl.classList.add("note_display_box");

        const noteTitleEl = document.createElement("p");
        noteTitleEl.innerText = note.name;

        const noteTextEl = document.createElement("p");
        noteTextEl.innerText = note.description;

        const trashButtonIconEl = document.createElement("i");
        trashButtonIconEl.classList.add("far");
        trashButtonIconEl.classList.add("fa-trash-alt");
        trashButtonIconEl.addEventListener("click", () => {
            fetch(`http://localhost:8080/notes/${note.id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(reptile => {
                clearChildren(mainEl);
                displayPetView(mainEl, reptile);
            })
            .catch(err => console.error(err));
        })

        noteDisplayBoxEl.appendChild(noteTitleEl);
        noteDisplayBoxEl.appendChild(noteTextEl);
        noteDisplayBoxEl.appendChild(trashButtonIconEl);

        notesDisplayDivEl.appendChild(noteDisplayBoxEl);
    })

    const addNoteNameEl = document.createElement("input");
    addNoteNameEl.type = "text";
    addNoteNameEl.placeholder = "Note Title: ";

    const addNoteTextAreaEl = document.createElement("textarea");
    addNoteTextAreaEl.rows = "4";
    addNoteTextAreaEl.cols = "20";
    addNoteTextAreaEl.placeholder = "Enter Your Note Here";

    const singlePetAddNotesEl = document.createElement("a");
    singlePetAddNotesEl.innerText = "Add Note";
    singlePetAddNotesEl.href = "#";
    singlePetAddNotesEl.addEventListener("click", () => {
        const newNoteJson = {
            "name": addNoteNameEl.value,
            "description": addNoteTextAreaEl.value,
            "isPinned": "True"
        }
        fetch(`http://localhost:8080/notes/${reptile.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNoteJson)
        })
        .then(res => res.json())
        .then(reptile => {
            clearChildren(mainEl);
            displayPetView(mainEl, reptile);
        })
        .catch(err => {console.error(err)})
    })

    singlePetAddNoteDivEl.appendChild(addNoteNameEl);
    singlePetAddNoteDivEl.appendChild(addNoteTextAreaEl);
    singlePetAddNoteDivEl.appendChild(singlePetAddNotesEl);



    // const singlePetTableNotesDivEl = document.createElement("div");
    // singlePetTableNotesDivEl.classList.add("table_items");

    // const singlePetTableNotesListEl = document.createElement("ul");

    // reptile.notes.forEach(note => {
    //     const singlePetTableNoteEl = document.createElement("li");
    //     singlePetTableNoteEl.innerText = note;

    //     singlePetTableNotesListEl.appendChild(singlePetTableNoteEl);
    // })

    

    // const singlePetTableNotes2El = document.createElement("li");
    // singlePetTableNotes2El.innerText = "Placeholder";

    // const singlePetTableNotes3El = document.createElement("li");
    // singlePetTableNotes3El.innerText = "Placeholder";
    
    const singlePetCareCalendarsTableEl = document.createElement("div");
    singlePetCareCalendarsTableEl.classList.add("pet_care_table");

    const singlePetCalendarsTableLinksEl = document.createElement("div");
    singlePetCalendarsTableLinksEl.classList.add("table_links");

    const singlePetTableCalendarsTitleEl = document.createElement("h4");
    singlePetTableCalendarsTitleEl.innerText = "Calendars";

    // const singlePetAddCalendarsEl = document.createElement("a");
    // singlePetAddCalendarsEl.innerText = "Add Calendars";
    // singlePetAddCalendarsEl.href = "#";

    const singlePetTableCalendarsDivEl = document.createElement("div");
    singlePetTableCalendarsDivEl.classList.add("table_items");

    const singlePetTableCalendarsListEl = document.createElement("ul");

    const singlePetTableCalendars1El = document.createElement("li");
    singlePetTableCalendars1El.innerText = "Placeholder";

    const singlePetTableCalendars2El = document.createElement("li");
    singlePetTableCalendars2El.innerText = "Placeholder";

    const singlePetTableCalendars3El = document.createElement("li");
    singlePetTableCalendars3El.innerText = "Placeholder";

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

    singlePetTablesSectionEl.appendChild(singlePetCareNotesTableEl);
    singlePetCareNotesTableEl.appendChild(singlePetNotesTableLinksEl);
    // singlePetCareNotesTableEl.appendChild(singlePetTableNotesDivEl);
    singlePetNotesTableLinksEl.appendChild(singlePetTableNotesTitleEl);
    singlePetNotesTableLinksEl.appendChild(notesDisplayDivEl);
    singlePetNotesTableLinksEl.appendChild(singlePetAddNoteDivEl);
    // singlePetTableNotesDivEl.appendChild(singlePetTableNotesListEl);
    // singlePetTableNotesListEl.appendChild(singlePetTableNotes1El);
    // singlePetTableNotesListEl.appendChild(singlePetTableNotes2El);
    // singlePetTableNotesListEl.appendChild(singlePetTableNotes3El);

    singlePetTablesSectionEl.appendChild(singlePetCareCalendarsTableEl);
    singlePetCareCalendarsTableEl.appendChild(singlePetCalendarsTableLinksEl);    
    singlePetCareCalendarsTableEl.appendChild(singlePetTableCalendarsDivEl);
    singlePetCalendarsTableLinksEl.appendChild(singlePetTableCalendarsTitleEl);
    // singlePetCalendarsTableLinksEl.appendChild(singlePetAddCalendarsEl);
    singlePetTableCalendarsDivEl.appendChild(singlePetTableCalendarsListEl);
    singlePetTableCalendarsListEl.appendChild(singlePetTableCalendars1El);
    singlePetTableCalendarsListEl.appendChild(singlePetTableCalendars2El);
    singlePetTableCalendarsListEl.appendChild(singlePetTableCalendars3El);

    singlePetDisplayContainerEl.appendChild(singlePetTopTableSectionEl);
    singlePetDisplayContainerEl.appendChild(singlePetTablesSectionEl);
    singlePetDisplayContainerEl.appendChild(petArchiveTextEl);

    mainEl.appendChild(singlePetDisplayAnchorEl);
    
}

export {
    displayPetView
};