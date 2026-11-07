
// Get search and filter elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const eventCards = document.querySelectorAll(".event-card");
const eventCount = document.getElementById("eventCount");
const noEvents = document.getElementById("noEvents");

// Search and filter events
function filterEvents() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleEvents = 0;

    eventCards.forEach(function(card) {

        const eventName = card.querySelector("h3")
            .textContent.toLowerCase();

        const category = card.dataset.category;

        const matchesSearch = eventName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
            visibleEvents++;
        } else {
            card.style.display = "none";
        }
    });

    eventCount.textContent =
        "Showing " + visibleEvents + " events";

    noEvents.hidden = visibleEvents !== 0;
}

// Listen for user actions
searchInput.addEventListener("input", filterEvents);
categoryFilter.addEventListener("change", filterEvents);
