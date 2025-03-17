// js/ui.js 
// DOM manipulation functions

const hamburgerElement = document.querySelector('.hamburger');
const sidebarElement = document.querySelector('.sidebar');
const closeSidebarButton = document.querySelector('.close-sidebar-button');

// Functions
function toggleSidebar() {
    const isHidden = sidebarElement.classList.contains('hide-sidebar');
    sidebarElement.classList.toggle('hide-sidebar', !isHidden);
}

function displayContentGrid(items, containerSelector, isLoadMore = false) {
    const container = document.querySelector(containerSelector);
    const template = document.getElementById('movie-card-template');
    
    // Clear container if not loading more
    if (!isLoadMore) {
        container.innerHTML = '';
    }
    
    items.forEach(item => {
        // Clone the template
        const card = document.importNode(template.content, true).querySelector('.movie_card');
        
        // Get title and date based on content type
        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const year = date ? date.split('-')[0] : 'Unknown';
        
        // Fill with data
        card.querySelector('.movie_card_poster').src = item.poster_url || 'https://placehold.co/300x450';
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
        
        // Add event listener for details modal
        card.addEventListener('click', () => {
            const contentType = item.first_air_date ? 
                (item.number_of_episodes ? 'tvshow' : 'anime') : 'movie';
            showDetailsModal(item.id, contentType);
        });
        
        // Add to container
        container.appendChild(card);
    });
}

// Show details modal for any content type
async function showDetailsModal(itemId, contentType) {
    try {
        // Get the item data
        const item = await getItemById(itemId, contentType);
        
        // Get modal elements
        const modal = document.getElementById('details_modal');
        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const year = date ? date.split('-')[0] : 'Unknown';
        
        // Create info line based on content type
        let infoLine = `${year} | ${item.vote_average}/10`;
        if (contentType === 'movie') {
            infoLine += ` | ${item.runtime} min`;
        } else {
            infoLine += ` | ${item.number_of_seasons} Season${item.number_of_seasons > 1 ? 's' : ''}`;
        }

        
        // Update modal content
        modal.querySelector('#modal_title').textContent = title;
        modal.querySelector('#modal_meta').textContent = infoLine;
        modal.querySelector('#modal_poster').src = getImageUrl(item.poster_path) || 'https://placehold.co/300x450';
        modal.querySelector('#modal_poster').alt = `${title} Poster`;
        modal.querySelector('#modal_overview').textContent = item.overview;
        
        // Update genres
        const genresContainer = modal.querySelector('#modal_genres');
        genresContainer.innerHTML = item.genres
            .map(genre => `<span>${genre.name}</span>`)
            .join('');
        
        // Show modal
        modal.classList.add('show');
        
        // Close button functionality
        modal.querySelector('.close_modal').addEventListener('click', () => {
            modal.classList.remove('show');
        });
    } catch (error) {
        console.error('Error showing modal:', error);
    }
}

// Populate genre filter dropdown
async function populateGenreFilter(selectId, contentType) {
    const select = document.getElementById(selectId);
    const genres = await getGenres(contentType);

    
    select.innerHTML = '<option value="all">All Genres</option>';
    
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.id;
        option.textContent = genre.name;
        select.appendChild(option);
    });
}

// Events
hamburgerElement.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);