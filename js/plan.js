
/* =========================================
   1. VARIABLES AND HTML ELEMENTS
========================================= */

// Key used to save the trip plan in local storage
const TRIP_KEY = 'somewhere-trip-plan';

// Select the trip-planning form
const form = document.querySelector('#trip-form');

// Select the trip summary container
const summary = document.querySelector('#trip-summary');

// Select the message area for form feedback
const message = document.querySelector('#form-message');


/* =========================================
   2. DATE AND DURATION FUNCTIONS
========================================= */

// Convert a Date object to YYYY-MM-DD format
function dateInputValue(date) {
    return date.toISOString().slice(0, 10);
}


// Calculate the number of days between two dates,
// including both the departure and return dates
function duration(a, b) {

    return Math.round(
        (
            new Date(b + 'T00:00:00') -
            new Date(a + 'T00:00:00')
        ) / 86400000
    ) + 1;

}


/* =========================================
   3. DISPLAY THE TRIP SUMMARY
========================================= */

function displayTrip(trip) {

    // Find the selected destination
    const dest = destinationById(trip.destination);

    // Calculate the trip duration
    const days = duration(
        trip.departure,
        trip.return
    );

    // Estimate the number of nights
    const nights = Math.max(days - 1, 1);

    // Calculate the suggested accommodation budget
    const nightlyGuide = Math.round(
        (Number(trip.budget) * 0.32) /
        (nights * Number(trip.travelers))
    );

    // Retrieve accommodation and activity suggestions
    const stays = getAccommodationOptions(dest);
    const activities = getActivities(dest);


    // Make the summary visible
    summary.hidden = false;


    // Insert the trip details into the summary
    summary.innerHTML = `

        <p class="eyebrow accent">
            Your plan is saved
        </p>

        <h2>${dest.name}, ${dest.country}</h2>

        <p class="muted">
            A ${days}-day ${trip.style.toLowerCase()} escape
            for ${trip.travelers}
            ${trip.travelers == 1 ? 'traveler' : 'travelers'}.
        </p>


        <!-- Main trip information -->
        <div class="summary-grid">

            <div>
                <strong>Dates</strong>

                ${new Date(
                    trip.departure + 'T00:00:00'
                ).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}

                –

                ${new Date(
                    trip.return + 'T00:00:00'
                ).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}
            </div>

            <div>
                <strong>Illustrative budget</strong>

                US$${Number(trip.budget).toLocaleString()}
            </div>

            <div>
                <strong>Travel style</strong>

                ${trip.style}
            </div>

            <div>
                <strong>Notes</strong>

                ${trip.notes || 'No notes added yet.'}
            </div>

        </div>


        <!-- Activities section -->
        <section class="activities">

            <p class="eyebrow accent">
                Things to do
            </p>

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


        <!-- Accommodation recommendations -->
        <section class="stay-recommendations">

            <p class="eyebrow accent">
                Where to stay
            </p>

            <h3>Stay ideas for ${dest.name}</h3>

            <p class="stay-note">

                Your accommodation guide is about
                US$${nightlyGuide.toLocaleString()}
                per traveler, per night
                (32% of the illustrative total budget).

                These are planning ideas, not live prices
                or availability.

            </p>

            <div class="stay-list">

                ${stays.map(stay => `

                    <div class="stay-option ${
                        stay.level === trip.style
                            ? 'best-fit'
                            : ''
                    }">

                        <img
                            class="stay-image"
                            src="${stay.image}"
                            alt="${stay.name} in ${dest.name}"
                        >

                        <div>

                            <strong>
                                ${stay.name}${
                                    stay.level === trip.style
                                        ? ' <em>Best fit</em>'
                                        : ''
                                }
                            </strong>

                            <small>
                                ${stay.type} · ${stay.level}
                            </small>

                        </div>

                        <span>${stay.price}</span>

                    </div>

                `).join('')}

            </div>

        </section>


        <!-- Trip management buttons -->
        <button class="button secondary" id="edit-trip">
            Edit trip
        </button>

        <button class="text-button" id="reset-trip">
            Clear plan
        </button>

    `;

}


/* =========================================
   4. INITIALISE THE TRIP-PLANNING PAGE
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Select the destination dropdown
    const select = document.querySelector('#trip-destination');


    /* -------------------------------------
       POPULATE THE DESTINATION DROPDOWN
    ------------------------------------- */

    select.innerHTML += [...destinations]
        .map(d => `
            <option value="${d.id}">
                ${d.name}, ${d.country}
            </option>
        `)
        .join('');


    /* -------------------------------------
       SET THE MINIMUM TRAVEL DATES
    ------------------------------------- */

    // Get today's date
    const today = dateInputValue(new Date());

    // Prevent departure dates earlier than today
    document.querySelector('#departure').min = today;

    // Prevent return dates earlier than today
    document.querySelector('#return').min = today;


    /* -------------------------------------
       LOAD AN EXISTING SAVED TRIP
    ------------------------------------- */

    // Retrieve the previously saved trip, if available
    const existing = JSON.parse(
        localStorage.getItem(TRIP_KEY) || 'null'
    );


    // Match saved trip properties to form input IDs
    if (existing) {

        const fields = {
            destination: 'trip-destination',
            travelers: 'travelers',
            departure: 'departure',
            return: 'return',
            budget: 'budget',
            style: 'style',
            notes: 'notes'
        };


        // Restore the saved values in the form
        Object.entries(fields).forEach(([key, id]) => {

            document.querySelector('#' + id).value =
                existing[key] || '';

        });


        // Display the saved trip summary
        displayTrip(existing);

    }


    /* -------------------------------------
       UPDATE THE RETURN DATE MINIMUM
    ------------------------------------- */

    document.querySelector('#departure')
        .addEventListener('change', e => {

            document.querySelector('#return').min =
                e.target.value || today;

        });


    /* -------------------------------------
       HANDLE FORM SUBMISSION
    ------------------------------------- */

    form.addEventListener('submit', e => {

        // Prevent the browser from reloading the page
        e.preventDefault();


        // Collect the values entered by the user
        const trip = {

            destination: select.value,

            travelers: document.querySelector('#travelers').value,

            departure: document.querySelector('#departure').value,

            return: document.querySelector('#return').value,

            budget: document.querySelector('#budget').value,

            style: document.querySelector('#style').value,

            notes: document.querySelector('#notes')
                .value.trim()

        };


        /* ---------------------------------
           VALIDATE REQUIRED FIELDS
        --------------------------------- */

        if (
            !trip.destination ||
            !trip.travelers ||
            !trip.departure ||
            !trip.return ||
            !trip.budget ||
            !trip.style
        ) {

            message.textContent =
                'Please complete all required fields.';

            return;

        }


        /* ---------------------------------
           VALIDATE THE DEPARTURE DATE
        --------------------------------- */

        if (trip.departure < today) {

            message.textContent =
                'Your departure date cannot be in the past.';

            return;

        }


        /* ---------------------------------
           VALIDATE THE RETURN DATE
        --------------------------------- */

        if (trip.return < trip.departure) {

            message.textContent =
                'Your return date must be on or after your departure date.';

            return;

        }


        /* ---------------------------------
           SAVE THE TRIP
        --------------------------------- */

        // Display a success message
        message.textContent =
            'Your trip plan has been saved.';

        message.className = 'form-message success';


        // Store the trip in the browser
        localStorage.setItem(
            TRIP_KEY,
            JSON.stringify(trip)
        );


        // Display the updated trip summary
        displayTrip(trip);


        // Scroll to the summary
        summary.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });

    });


    /* -------------------------------------
       HANDLE SUMMARY BUTTONS
    ------------------------------------- */

    summary.addEventListener('click', e => {

        // Allow the user to return to the form
        if (e.target.id === 'edit-trip') {

            form.scrollIntoView({
                behavior: 'smooth'
            });

            select.focus();

        }


        // Allow the user to clear the saved trip
        if (e.target.id === 'reset-trip') {

            // Delete the saved trip
            localStorage.removeItem(TRIP_KEY);

            // Reset the form fields
            form.reset();

            // Hide the trip summary
            summary.hidden = true;

            // Display a confirmation message
            message.textContent =
                'Your saved trip plan has been cleared.';

            message.className = 'form-message';

        }

    });

});
