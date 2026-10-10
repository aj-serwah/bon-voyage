
/* =========================================
   1. SELECT THE BUCKET LIST CONTAINER
========================================= */

const bucket = document.querySelector('#bucket-content');


/* =========================================
   2. DISPLAY THE SAVED DESTINATIONS
========================================= */

function renderBucket() {

    // Get the destinations saved by the user
    const saved = getFavorites();

    // Find the full information for each saved destination
    const found = saved
        .map(item => ({
            ...destinationById(item.id),
            visited: item.visited
        }))
        .filter(d => d.id);

    // If no destinations have been saved, display an empty state
    if (!found.length) {

        bucket.innerHTML = `
            <div class="empty">

                <p class="eyebrow accent">
                    A blank page, full of possibility
                </p>

                <h2>Your bucket list is waiting.</h2>

                <p>
                    Start collecting the places that make you pause.
                </p>

                <a class="button" href="explore.html">
                    Explore destinations
                </a>

            </div>
        `;

        return;
    }


    /* =========================================
       3. CALCULATE VISITED DESTINATIONS
    ========================================= */

    // Count the destinations the user has visited
    const visited = found.filter(d => d.visited).length;

    // Calculate the percentage of destinations visited
    const percentage = Math.round(
        visited / found.length * 100
    );


    /* =========================================
       4. DISPLAY THE BUCKET LIST
    ========================================= */

    bucket.innerHTML = `

        <!-- Visited destination summary -->
        <p class="eyebrow accent">
            ${visited} of ${found.length} visited
        </p>

        <!-- Progress bar showing the visited percentage -->
        <div
            class="progress"
            aria-label="${percentage}% of saved destinations visited"
        >
            <span style="width: ${percentage}%"></span>
        </div>

        <!-- Grid containing all saved destination cards -->
        <div class="card-grid bucket-grid">

            ${found.map(d => `

                <article class="destination-card">

                    <!-- Destination image -->
                    <img
                        src="${d.image}"
                        alt="${d.name}, ${d.country}"
                    >

                    <!-- Destination information -->
                    <div class="card-copy">

                        <p class="country">
                            ${d.country}
                        </p>

                        <h2>${d.name}</h2>

                        <p>
                            ${
                                d.visited
                                    ? 'A beautiful memory to keep.'
                                    : 'Still waiting for its moment.'
                            }
                        </p>

                        <!-- Buttons for managing the destination -->
                        <div class="card-actions">

                            <button
                                class="visited-toggle ${d.visited ? 'visited' : ''}"
                                data-visit="${d.id}"
                            >
                                ${d.visited ? '✓ Visited' : 'Mark visited'}
                            </button>

                            <button
                                class="text-button"
                                data-remove="${d.id}"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </article>

            `).join('')}

        </div>
    `;
}


/* =========================================
   5. HANDLE BUCKET LIST BUTTON CLICKS
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Display the saved destinations when the page loads
    renderBucket();

    // Listen for clicks inside the bucket list
    bucket.addEventListener('click', e => {

        // Identify whether the user clicked Visit or Remove
        const id = e.target.dataset.visit
            || e.target.dataset.remove;

        // Stop if the click was not on either button
        if (!id) return;

        // Retrieve the current saved destinations
        let items = getFavorites();


        // Remove a destination if Remove was clicked
        if (e.target.dataset.remove) {

            items = items.filter(item => item.id !== id);

        } else {

            // Toggle the visited status of the destination
            items = items.map(item =>
                item.id === id
                    ? { ...item, visited: !item.visited }
                    : item
            );

        }


        // Save the updated bucket list
        saveFavorites(items);

        // Refresh the page content to show the changes
        renderBucket();

    });

});
