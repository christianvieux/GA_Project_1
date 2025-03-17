// Search functionality
function setupSearch() {
    // Get both desktop and mobile search elements
    const searchButtons = document.querySelectorAll('.search-button');
    const searchInputs = document.querySelectorAll('.search-input');
    
    // Add event listeners to all search buttons
    searchButtons.forEach(button => {
        button.addEventListener('click', performSearch);
    });
    
    // Add event listeners to all search inputs
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    });
    
    
    async function performSearch() {
        // Get value from active search input
        const activeInput = document.activeElement.closest('.search-container').querySelector('.search-input');
        const query = activeInput.value.trim();
        
        if (query === '') {
            return;
        }
        
        // Show loading indicator
        const resultsContainer = document.getElementById('search_results_container');
        resultsContainer.innerHTML = '<div class="loading-indicator">Searching...</div>';
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            page.classList.add('hidden');
        });
        
        // Show search results page
        const searchResultsPage = document.getElementById('search_results_page');
        searchResultsPage.classList.add('active');
        searchResultsPage.classList.remove('hidden');
        
        // Update search query display
        document.getElementById('search_query_display').textContent = query;
        
        try {
            // Get the active content type tab if available, otherwise use 'all'
            let activeContentType = 'all';
            const activeTab = document.querySelector('.nav-tab.active');
            if (activeTab) {
                if (activeTab.dataset.content.includes('movie')) {
                    activeContentType = 'movie';
                } else if (activeTab.dataset.content.includes('tv')) {
                    activeContentType = 'tvshow';
                } else if (activeTab.dataset.content.includes('anime')) {
                    activeContentType = 'anime';
                }
            }
            
            // Perform search using searchContent from API
            const searchResults = await searchContent(query, activeContentType);
            
            // Clear previous results
            resultsContainer.innerHTML = '';
            
            // Handle results display
            if (!searchResults || searchResults.length === 0) {
                document.getElementById('no_results_message').classList.remove('hidden');
            } else {
                document.getElementById('no_results_message').classList.add('hidden');
                displaySearchResults(searchResults);
            }
        } catch (error) {
            console.error('Error performing search:', error);
            resultsContainer.innerHTML = '<div class="error-message">An error occurred while searching. Please try again.</div>';
        }
        
        // Clear the search input
        activeInput.value = '';
        
        // Update URL
        history.pushState({}, '', `#search?q=${encodeURIComponent(query)}`);
    }
}

// Function to display search results
function displaySearchResults(results) {
    const container = document.getElementById('search_results_container');
    const template = document.getElementById('movie-card-template');
    
    // Clear the container
    container.innerHTML = '';
    
    // Add count information
    const countElement = document.createElement('div');
    countElement.classList.add('results-count');
    countElement.textContent = `Found ${results.length} results`;
    container.appendChild(countElement);
    
    // Create a grid container for the results
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('content_grid');
    container.appendChild(gridContainer);
    
    // Display each result
    results.forEach(item => {
        // Clone the template
        const card = document.importNode(template.content, true).querySelector('.movie_card');
        
        // Get title and date based on content type
        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const year = date ? date.split('-')[0] : 'Unknown';
        
        // Fill with data
        card.querySelector('.movie_card_poster').src = getImageUrl(item.poster_path) || 'https://placehold.co/300x450';
        card.querySelector('.movie_card_poster').alt = `${title} Poster`;
        card.querySelector('.movie_card_title').textContent = title;
        card.querySelector('.movie_card_date').textContent = year;
        
        // Handle genres
        const genresContainer = card.querySelector('.movie_card_genres');
        const genreTemplate = genresContainer.querySelector('.movie_card_genre.template');
        
        // Add first two genres
        if (item.genre_ids && item.genre_ids.length > 0) {
            item.genre_ids.slice(0, 2).forEach(genreId => {
                const genreName = movieData.getGenreName(genreId);
                const genreElement = genreTemplate.cloneNode(true);
                genreElement.classList.remove('template');
                genreElement.textContent = genreName;
                genresContainer.appendChild(genreElement);
            });
        }
        
        // Determine content type for the modal
        let contentType = 'movie';
        if (item.first_air_date) {
            contentType = item.number_of_episodes ? 'tvshow' : 'anime';
        }
        
        // Add event listener for details modal
        card.addEventListener('click', () => {
            showDetailsModal(item.id, contentType);
        });
        
        // Add to grid container
        gridContainer.appendChild(card);
    });
    
    // Add "No results found" message container (hidden by default)
    if (!document.getElementById('no_results_message')) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.id = 'no_results_message';
        noResultsMessage.classList.add('hidden');
        noResultsMessage.textContent = 'No results found. Try a different search term.';
        container.appendChild(noResultsMessage);
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', setupSearch);