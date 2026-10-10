
/* =========================================
   1. VARIABLES AND PAGE ELEMENTS
========================================= */

// The category selected by the user
let activeCategory = 'All';

// The text entered in the search box
let searchTerm = '';

// Stores the element that had focus before the modal opened
let lastFocused;

// Selects the destination grid from explore.html
const grid = document.querySelector('#destination-grid');


/* =========================================
   2. CREATE A DESTINATION CARD
========================================= */

function card(d) {

    // Check whether the destination is already saved
    const saved = isFavorite(d.id);

    // Return the HTML for one destination card
    return `
        <article class="destination-card">

            <!-- Favourite button -->
            <button
                class="favorite ${saved ? 'saved' : ''}"
                data-favorite="${d.id}"
                aria-label="${saved ? 'Remove' : 'Save'} ${d.name}"
                aria-pressed="${saved}"
            >
                ${saved ? '♥' : '♡'}
            </button>

            <!-- Destination image -->
            <img
                src="${d.image}"
                alt="${d.name}, ${d.country}"
            >

            <!-- Destination information -->
            <div class="card-copy">

                <p class="country">${d.country}</p>

                <h2>${d.name}</h2>

                <p>${d.description}</p>

                <!-- Category and details button -->
                <div class="card-actions">

                    <span class="category">
                        ${d.category}
                    </span>

                    <button
                        class="text-button"
                        data-details="${d.id}"
                    >
                        Details →
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================
   3. DISPLAY AND FILTER DESTINATIONS
========================================= */

function render() {

    // Filter destinations by category and search text
    const results = destinations.filter(d =>

        // Match the selected category
        (
            activeCategory === 'All' ||
            d.category === activeCategory
        )

        &&

        // Match the search text against name, country or category
        `${d.name} ${d.country} ${d.category}`
            .toLowerCase()
            .includes(searchTerm)

    );


    // Display the number of matching destinations
    document.querySelector('#results-count').textContent =
        `${results.length} ${
            results.length === 1
                ? 'destination'
                : 'destinations'
        } to inspire you`;


    // Display destination cards or an empty-state message
    grid.innerHTML = results.length
        ? results.map(card).join('')
        : `
            <div class="empty">

                <p class="eyebrow accent">
                    No match yet
                </p>

                <h2>Nothing quite fits that search.</h2>

                <p>
                    Try a destination, country,
                    or a different category.
                </p>

            </div>
        `;
}


/* =========================================
   4. OPEN THE DESTINATION DETAILS MODAL
========================================= */

function showModal(id) {

    // Find the selected destination
    const d = destinationById(id);

    // Check whether it is already saved
    const saved = isFavorite(id);

    // Get accommodation and activity suggestions
    const stays = getAccommodationOptions(d);
    const activities = getActivities(d);

    // Remember the element that had focus before opening
    lastFocused = document.activeElement;


    // Insert the destination details into the modal
    document.querySelector('#modal-content').innerHTML = `

        <!-- Main destination image -->
        <img
            src="${d.image}"
            alt="${d.name}, ${d.country}"
        >

        <div class="modal-copy">

            <!-- Destination country and category -->
            <p class="country">
                ${d.country} · ${d.category}
            </p>

            <!-- Destination name -->
            <h2 id="modal-title">${d.name}</h2>

            <!-- Detailed destination description -->
            <p>${d.details}</p>


            <!-- Activities section -->
            <section class="activities">

                <p class="eyebrow accent">Things to do</p>

                <div class="activity-grid">

                    ${activities.map(activity => `

                        <article class="activity-card">

                            <img
                                src="${activity.image}"
                                alt="${activity.name}"
                            >

                            <p>${activity.name}</p>

                        </article>

                    `).join('')}

                </div>

            </section>


            <!-- Accommodation suggestions -->
            <section class="stay-recommendations">

                <p class="eyebrow accent">Stay ideas</p>

                <p class="stay-note">
                    Illustrative US-dollar nightly planning guides —
                    compare current reviews and availability
                    before booking.
                </p>

                <div class="stay-list">

                    ${stays.map(stay => `

                        <div class="stay-option">

                            <img
                                class="stay-image"
                                src="${stay.image}"
                                alt="${stay.name} in ${d.name}"
                            >

                            <div>
                                <strong>${stay.name}</strong>
                                <small>${stay.type}</small>
                            </div>

                            <span>${stay.price}</span>

                        </div>

                    `).join('')}

                </div>

            </section>


            <!-- Save or remove this destination -->
            <button
                class="button"
                data-favorite="${id}"
            >
                ${
                    saved
                        ? 'Remove from Bucket List'
                        : 'Save to Bucket List'
                }
            </button>

        </div>
    `;


    // Display the modal
    const modal = document.querySelector('#destination-modal');

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');

    // Move keyboard focus to the close button
    modal.querySelector('.modal-close').focus();

}


/* =========================================
   5. CLOSE THE DESTINATION MODAL
========================================= */

function closeModal() {

    // Find the modal
    const modal = document.querySelector('#destination-modal');

    // Hide the modal
    modal.hidden = true;

    // Update its accessibility state
    modal.setAttribute('aria-hidden', 'true');

    // Return focus to the previously focused element
    lastFocused?.focus();

}


/* =========================================
   6. INITIALISE THE EXPLORE PAGE
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Display all destinations when the page loads
    render();


    /* -------------------------------------
       Open a destination from a URL
    ------------------------------------- */

    // Read the URL query parameters
    const params = new URLSearchParams(location.search);

    // Get the requested destination ID
    const requested = params.get('destination');

    // Open the modal if the destination exists
    if (requested && destinationById(requested)) {
        showModal(requested);
    }


    /* -------------------------------------
       SEARCH FUNCTIONALITY
    ------------------------------------- */

    // Prevent the form from reloading the page on submission
    document.querySelector('.search-row')
        .addEventListener('submit', e => {
            e.preventDefault();
        });

    // Update results whenever the user types
    document.querySelector('#destination-search')
        .addEventListener('input', e => {

            searchTerm = e.target.value
                .trim()
                .toLowerCase();

            render();

        });


    /* -------------------------------------
       CATEGORY FILTERS
    ------------------------------------- */

    // Listen for clicks on the filter buttons
    document.querySelector('.filters')
        .addEventListener('click', e => {

            // Ignore clicks that are not on a filter button
            if (!e.target.matches('.filter')) return;

            // Update the selected category
            activeCategory = e.target.dataset.filter;

            // Highlight the selected filter
            document.querySelectorAll('.filter')
                .forEach(b => {
                    b.classList.toggle(
                        'active',
                        b === e.target
                    );
                });

            // Refresh the destination cards
            render();

        });


    /* -------------------------------------
       DESTINATION CARD BUTTONS
    ------------------------------------- */

    // Listen for favourite and details button clicks
    grid.addEventListener('click', e => {

        const id = e.target.dataset.favorite
            || e.target.dataset.details;

        // Stop if neither button was clicked
        if (!id) return;

        // Save or remove a favourite
        if (e.target.dataset.favorite) {

            toggleFavorite(id);
            render();

        } else {

            // Open the destination details
            showModal(id);

        }

    });


    /* -------------------------------------
       MODAL INTERACTIONS
    ------------------------------------- */

    const modal = document.querySelector('#destination-modal');

    // Handle clicks inside the modal
    modal.addEventListener('click', e => {

        // Close when the backdrop or close button is clicked
        if (
            e.target === modal ||
            e.target.matches('.modal-close')
        ) {
            closeModal();
        }

        // Handle saving or removing a favourite in the modal
        if (e.target.dataset.favorite) {

            const id = e.target.dataset.favorite;

            toggleFavorite(id);

            // Reopen the modal with the updated button text
            showModal(id);

            // Refresh the Explore cards
            render();

        }

    });


    /* -------------------------------------
       CLOSE MODAL USING ESCAPE
    ------------------------------------- */

    document.addEventListener('keydown', e => {

        if (e.key === 'Escape' && !modal.hidden) {
            closeModal();
        }

    });

});
