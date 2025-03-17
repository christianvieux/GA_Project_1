// movies.js - Handle all movie page functionality

function initializeMoviesPage() {
    // Populate filters
    populateGenreFilter('movie_genre_filter', 'movie');
    
    
    // Fetch initial movies
    fetchContent('all-movies')
        .then(movies => {
            displayContentGrid(movies, '#movies_page .content_grid');
        })
        .catch(error => {
            console.error('Error loading movies:', error);
        });
    
    // Set up event listeners for filters
    document.getElementById('movie_genre_filter').addEventListener('change', filterMovies);
    document.getElementById('movie_sort_filter').addEventListener('change', filterMovies);
    document.getElementById('load_more_movies').addEventListener('click', loadMoreMovies);
}

function filterMovies() {
    const genreId = document.getElementById('movie_genre_filter').value;
    const sortBy = document.getElementById('movie_sort_filter').value;
    
    const filters = {
        genreId: genreId,
        sortBy: sortBy
    };
    
    fetchContent('all-movies', filters)
        .then(movies => {
            displayContentGrid(movies, '#movies_page .content_grid');
        })
        .catch(error => {
            console.error('Error filtering movies:', error);
        });
}

function loadMoreMovies() {
    // In a real app, you'd keep track of the current page and load the next one
    alert('In a real app, this would load more movies!');
}

// Initialize the page when this script runs
initializeMoviesPage();