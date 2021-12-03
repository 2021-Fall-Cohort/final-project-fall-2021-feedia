import {
    clearChildren
} from "./app.js"

function displayPetView(mainEl, reptile, reptiles) {

    const singlePetDisplayAnchorEl = document.createElement("div");
    singlePetDisplayAnchorEl.classList("anchor");

    const singlePetDisplayContainerEl = document.createElement("div");
    singlePetDisplayContainerEl.classList("container");

    const singlePetInfoSectionEl = document.createElement("section");
   
    const singlePetDisplayDivEl = document.createElement("div");
    singlePetDisplayDivEl.classList("single_pet");

    const singlePetPetInfoDivEl = document.createElement("div");
    singlePetPetInfoDivEl.classList("pet_info");

    const singlePetPortraitDivEl = document.createElement("div");
    singlePetPortraitDivEl.classList("pet_portrait");

    const singlePetPortraitEl = document.createElement("img");
    singlePetPortraitEl.src = reptile.image;
    singlePetPortraitEl.alt = "pet portrait";

    const singlePetDemographicsDivEl = document.createElement("div");
    singlePetDemographicsDivEl.classList("pet_demographics");

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
    singlePetPetInfoDivEl.appendChild(singlePetDemographicsDivEl);
    singlePetPortraitDivEl.appendChild(singlePetPortraitEl);
    singlePetDemographicsDivEl.appendChild(singlePetNameEl);
    singlePetDemographicsDivEl.appendChild(singlePetAgeEl);
    singlePetDemographicsDivEl.appendChild(singlePetSexEl);

    const singlePetTopTableSectionEl = document.createElement("section");

    const singlePetTablesTopEl = document.createElement("div");
    singlePetTablesTopEl.classList("tables_top");

    const singlePetCareTableEl = document.createElement("div");
    singlePetCareTableEl.classList("pet_care_table");

    const singlePetTableLinksEl = document.createElement("div");
    singlePetTableLinksEl.classList("table_links");

    const singlePetTableTitleEl = document.createElement("h4");
    singlePetTableTitleEl.innerText = "Schedule";

    const singlePetAddScheduleEl = document.createElement("a");
    singlePetAddScheduleEl.innerText = "Add Schedule";
    singlePetAddScheduleEl.href = "#";

    const singlePetTableItemsDivEl = document.createElement("div");
    singlePetTableItemsDivEl.classList("table_items");

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
    singlePetTableLinksEl.appendChild(singlePetAddScheduleEl);
    singlePetTableItemsDivEl.appendChild(singlePetTableItemsListEl);
    singlePetTableItemsListEl.appendChild(singlePetTableItem1El);
    singlePetTableItemsListEl.appendChild(singlePetTableItem2El);
    singlePetTableItemsListEl.appendChild(singlePetTableItem3El);

    const singlePetTablesSectionEl = document.createElement("section");

    const singlePetCareNotesTableEl = document.createElement("div");
    singlePetCareNotesTableEl.classList("pet_care_table");

    const singlePetNotesTableLinksEl = document.createElement("div");
    singlePetNotesTableLinksEl.classList("table_links");

    const singlePetTableNotesTitleEl = document.createElement("h4");
    singlePetTableNotesTitleEl.innerText = "Notes";

    const singlePetAddNotesEl = document.createElement("a");
    singlePetAddNotesEl.innerText = "Add Note";
    singlePetAddNotesEl.href = "#";

    const singlePetTableNotesDivEl = document.createElement("div");
    singlePetTableNotesDivEl.classList("table_items");

    const singlePetTableNotesListEl = document.createElement("ul");

    const singlePetTableNotes1El = document.createElement("li");
    singlePetTableNotes1El.innerText = "Placeholder";

    const singlePetTableNotes2El = document.createElement("li");
    singlePetTableNotes2El.innerText = "Placeholder";

    const singlePetTableNotes3El = document.createElement("li");
    singlePetTableNotes3El.innerText = "Placeholder";

    

    const singlePetCareCalendarsTableEl = document.createElement("div");
    singlePetCareCalendarsTableEl.classList("pet_care_table");

    const singlePetCalendarsTableLinksEl = document.createElement("div");
    singlePetCalendarsTableLinksEl.classList("table_links");

    const singlePetTableCalendarsTitleEl = document.createElement("h4");
    singlePetTableCalendarsTitleEl.innerText = "Calendars";

    const singlePetAddCalendarsEl = document.createElement("a");
    singlePetAddCalendarsEl.innerText = "Add Calendars";
    singlePetAddCalendarsEl.href = "#";

    const singlePetTableCalendarsDivEl = document.createElement("div");
    singlePetTableCalendarsDivEl.classList("table_items");

    const singlePetTableCalendarsListEl = document.createElement("ul");

    const singlePetTableCalendars1El = document.createElement("li");
    singlePetTableCalendars1El.innerText = "Placeholder";

    const singlePetTableCalendars2El = document.createElement("li");
    singlePetTableCalendars2El.innerText = "Placeholder";

    const singlePetTableCalendars3El = document.createElement("li");
    singlePetTableCalendars3El.innerText = "Placeholder";

    singlePetTablesSectionEl.appendChild(singlePetCareNotesTableEl);
    singlePetCareNotesTableEl.appendChild(singlePetNotesTableLinksEl);
    singlePetCareNotesTableEl.appendChild(singlePetTableNotesDivEl);
    singlePetNotesTableLinksEl.appendChild(singlePetTableNotesTitleEl);
    singlePetNotesTableLinksEl.appendChild(singlePetAddNotesEl);
    singlePetTableNotesDivEl.appendChild(singlePetTableNotesListEl);
    singlePetTableNotesListEl.appendChild(singlePetTableNotes1El);
    singlePetTableNotesListEl.appendChild(singlePetTableNotes2El);
    singlePetTableNotesListEl.appendChild(singlePetTableNotes3El);

    singlePetTablesSectionEl.appendChild(singlePetCareCalendarsTableEl);
    singlePetCareCalendarsTableEl.appendChild(singlePetCalendarsTableLinksEl);    
    singlePetCareCalendarsTableEl.appendChild(singlePetTableCalendarsDivEl);
    singlePetCalendarsTableLinksEl.appendChild(singlePetTableCalendarsTitleEl);
    singlePetCalendarsTableLinksEl.appendChild(singlePetAddCalendarsEl);
    singlePetTableCalendarsDivEl.appendChild(singlePetTableCalendarsListEl);
    singlePetTableCalendarsListEl.appendChild(singlePetTableCalendars1El);
    singlePetTableCalendarsListEl.appendChild(singlePetTableCalendars2El);
    singlePetTableCalendarsListEl.appendChild(singlePetTableCalendars3El);

    singlePetDisplayContainerEl.appendChild(singlePetTopTableSectionEl);
    singlePetDisplayContainerEl.appendChild(singlePetTablesSectionEl);

    mainEl.appendChild(singlePetDisplayAnchorEl);
    
}

export {
    displayPetView
};