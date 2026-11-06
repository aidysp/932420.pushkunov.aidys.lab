// Ожидаем полную загрузку DOM дерева
document.addEventListener("DOMContentLoaded", () => {
    
   
    const bodyEl = document.body;
    const themeBtn = document.getElementById("toggle-theme-btn");
    const toggleTimelineBtn = document.getElementById("toggle-timeline-btn");
    const addEventBtn = document.getElementById("add-event-btn");
    const timelineContainer = querySelector(".timeline-container");
    const timelineSection = querySelector(".timeline-section");


    if (!themeBtn || !toggleTimelineBtn || !addEventBtn || !timelineContainer || !timelineSection) {
        console.error("Ошибка: Не все обязательные интерактивные элементы DOM найдены на странице!");
        return;
    }


    const savedTheme = localStorage.getItem("siteTheme");
    if (savedTheme === "dark") {
        bodyEl.classList.add("theme-dark");
    }


    const isTimelineHidden = localStorage.getItem("timelineHidden") === "true";
    if (isTimelineHidden) {
        timelineContainer.classList.add("hidden");
        toggleTimelineBtn.textContent = "Развернуть хронологию";
    }


    const savedEvents = JSON.parse(localStorage.getItem("timelineEvents")) || [
        { date: "1206 г.", text: "Курултай Чингисхана и образование Монгольской империи" },
        { date: "XVII в.", text: "Установление активной дипломатии Теленгитского улуса с Русским царством" },
        { date: "1756 г.", text: "Вхождение алтайцев в состав Российской империи" }
    ];

  
    savedEvents.forEach(event => renderEventCard(event.date, event.text, false));


    themeBtn.addEventListener("click", () => {
        bodyEl.classList.toggle("theme-dark");
        const currentTheme = bodyEl.classList.contains("theme-dark") ? "dark" : "light";
        localStorage.setItem("siteTheme", currentTheme);
    });


    toggleTimelineBtn.addEventListener("click", () => {
        timelineContainer.classList.toggle("hidden");
        const isHidden = timelineContainer.classList.contains("hidden");
        localStorage.setItem("timelineHidden", isHidden);
        toggleTimelineBtn.textContent = isHidden ? "Развернуть хронологию" : "Свернуть хронологию";
    });

   
    addEventBtn.addEventListener("click", () => {
        const eventDate = prompt("Введите дату исторического события (например: 1689 г.):");
        if (!eventDate || eventDate.trim() === "") return;

        const eventText = prompt("Введите описание исторического события:");
        if (!eventText || eventText.trim() === "") return;

        const newEvent = { date: eventDate.trim(), text: eventText.trim() };
        

        renderEventCard(newEvent.date, newEvent.text, true);
    });

   
    
   
    function querySelector(selector) {
        return document.querySelector(selector);
    }


    function renderEventCard(date, text, shouldSave) {

        const card = document.createElement("article");
        card.classList.add("timeline-card");

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("timeline-card-content");

        const dateEl = document.createElement("span");
        dateEl.classList.add("timeline-date");
        dateEl.textContent = date;

        const textEl = document.createElement("p");
        textEl.style.margin = "0";
        textEl.textContent = text;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-event-btn");
        deleteBtn.textContent = "Удалить";


        contentWrapper.appendChild(dateEl);
        contentWrapper.appendChild(textEl);
        card.appendChild(contentWrapper);
        card.appendChild(deleteBtn);

   
        deleteBtn.addEventListener("click", () => {
            card.remove();
            updateLocalStorageEvents();
        });

   
        timelineContainer.appendChild(card);

        if (shouldSave) {
            updateLocalStorageEvents();
        }
    }


    function updateLocalStorageEvents() {
        const cards = document.querySelectorAll(".timeline-card");
        const eventsArray = [];

        cards.forEach(card => {
            const date = card.querySelector(".timeline-date").textContent;
            const text = card.querySelector("p").textContent;
            eventsArray.push({ date, text });
        });

        localStorage.setItem("timelineEvents", JSON.stringify(eventsArray));
    }
});

