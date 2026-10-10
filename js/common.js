
/* =========================================
   1. LOCAL STORAGE AND FAVOURITES
========================================= */

// The key used to store favourite destinations in the browser
const STORAGE_KEY = 'somewhere-favorites';


// Retrieve saved favourites from local storage
const getFavorites = () =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');


// Save the updated favourites to local storage
const saveFavorites = (items) =>
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
    );


// Check whether a destination is already a favourite
const isFavorite = (id) =>
    getFavorites().some(item => item.id === id);


// Add a destination to favourites or remove it if already saved
function toggleFavorite(id) {

    // Get the current favourites
    const items = getFavorites();

    // Find the destination if it already exists
    const existing = items.find(item => item.id === id);

    // If it exists, remove it
    if (existing) {

        saveFavorites(
            items.filter(item => item.id !== id)
        );

    } else {

        // Otherwise, add it with visited set to false
        saveFavorites([
            ...items,
            { id, visited: false }
        ]);

    }

    // Return true if added, false if removed
    return !existing;
}


/* =========================================
   2. FIND DESTINATION INFORMATION
========================================= */

function destinationById(id) {

    // Find a destination by its unique ID
    return destinations.find(item => item.id === id);

}


/* =========================================
   3. DISPLAY THE WEBSITE HEADER
========================================= */

function renderHeader(active = '') {

    // Insert the logo and navigation links
    document.querySelector('[data-header]').innerHTML = `

        <a
            class="brand"
            href="index.html"
            aria-label="Bon voyage home"
        >
            Bon voyage<span>.</span>
        </a>

        <!-- Mobile navigation button -->
        <button
            class="menu-toggle"
            aria-label="Open navigation"
            aria-expanded="false"
        >
            ☰
        </button>

        <!-- Main navigation menu -->
        <nav aria-label="Main navigation">

            <a
                class="${active === 'home' ? 'active' : ''}"
                href="index.html"
            >
                Home
            </a>

            <a
                class="${active === 'explore' ? 'active' : ''}"
                href="explore.html"
            >
                Explore
            </a>

            <a
                class="${active === 'bucket' ? 'active' : ''}"
                href="bucketlist.html"
            >
                My Bucket List
            </a>

            <a
                class="${active === 'plan' ? 'active' : ''}"
                href="plan.html"
            >
                Plan a Trip
            </a>

        </nav>

    `;


    // Select the mobile menu button and navigation menu
    const menu = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');


    // Open or close the mobile navigation menu when clicked
    menu.addEventListener('click', () => {

        const open = nav.classList.toggle('open');

        // Update the accessibility state
        menu.setAttribute('aria-expanded', open);

    });

}


/* =========================================
   4. DISPLAY THE WEBSITE FOOTER
========================================= */

function renderFooter() {

    // Insert the footer content
    document.querySelector('[data-footer]').innerHTML = `

        <div>

            <a class="brand" href="index.html">
                Bon voyage<span>.</span>
            </a>

            <p>Less scrolling. More exploring.</p>

        </div>

        <!-- Footer navigation links -->
        <div class="footer-links">

            <a href="explore.html">Explore</a>

            <a href="bucketlist.html">Bucket List</a>

            <a href="plan.html">Plan a Trip</a>

        </div>

        <!-- Copyright notice -->
        <small>
            © ${new Date().getFullYear()}
            Bon voyage. Made for curious travellers.
        </small>

    `;

}


/* =========================================
   5. INITIALISE SHARED WEBSITE FEATURES
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Display the header and highlight the current page
    renderHeader(document.body.dataset.page);

    // Display the footer
    renderFooter();

});
