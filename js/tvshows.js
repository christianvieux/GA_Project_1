// tvshows.js - Handle TV shows page functionality

function initializeTvShowsPage() {
    // Populate filters
    populateGenreFilter('tvshow_genre_filter', 'tvshow');
    
    // Fetch initial TV shows
    fetchContent('tv-shows')
        .then(shows => {
            displayContentGrid(shows, '.content_grid');
        })
        .catch(error => {
            console.error('Error loading TV shows:', error);
        });
    
    // Set up event listeners for filters
    document.getElementById('tvshow_genre_filter').addEventListener('change', filterTvShows);
    document.getElementById('tvshow_sort_filter').addEventListener('change', filterTvShows);
    document.getElementById('load_more_tvshows').addEventListener('click', loadMoreTvShows);
}

function filterTvShows() {
    const genreId = document.getElementById('tvshow_genre_filter').value;
    const sortBy = document.getElementById('tvshow_sort_filter').value;
    
    const filters = {
        genreId: genreId,
        sortBy: sortBy
    };
    
    fetchContent('tv-shows', filters)
        .then(shows => {
            displayContentGrid(shows, '.content_grid');
        })
        .catch(error => {
            console.error('Error filtering TV shows:', error);
        });
}

function loadMoreTvShows() {
    alert('In a real app, this would load more TV shows!');
}

// Initialize the page when this script runs
initializeTvShowsPage();