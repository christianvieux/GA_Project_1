// api.js - Handle all data fetching and processing

// Configuration
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const ANIME_API_BASE_URL = 'https://api.jikan.moe/v4'; // Using Jikan API for anime (free, no auth needed)
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Load environment variables
const TMDB_API_KEY = "25bf4879009d19ed1a3d48614e7ef475" //process.env.API_KEY;

// Get image URL
function getImageUrl(path, size = 'w500') {
    if (!path) {
        return null;
    }
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

// Process TMDB results to include image URLs
function processTMDBResults(results) {
    if (!results || !Array.isArray(results)) {
        return [];
    }
    
    return results.map(item => ({
        ...item,
        poster_url: getImageUrl(item.poster_path),
        backdrop_url: getImageUrl(item.backdrop_path, 'original')
    }));
}

// Fetch from TMDB API (Movies & TV Shows)
async function fetchFromTMDB(endpoint, params = {}) {
    try {
        const queryParams = new URLSearchParams({
            api_key: TMDB_API_KEY,
            language: 'en-US',
            ...params
        });
        
        const response = await fetch(`${TMDB_API_BASE_URL}${endpoint}?${queryParams}`);
        
        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching from TMDB:', error);
        return { results: [] }; // Return empty results on error
    }
}

// Fetch from Anime API
async function fetchFromAnimeAPI(endpoint, params = {}) {
    try {
        const queryParams = new URLSearchParams(params);
        const queryString = queryParams.toString() ? `?${queryParams}` : '';
        
        const response = await fetch(`${ANIME_API_BASE_URL}${endpoint}${queryString}`);
        
        if (!response.ok) {
            throw new Error(`Anime API error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching from Anime API:', error);
        return { data: [] }; // Return empty results on error
    }
}

// Main function to fetch content
async function fetchContent(contentType, filters = {}) {
    // Parse filters
    const { genreId, sortBy, page = 1 } = filters;
    
    // Set up result variable
    let result = { results: [] };
    
    // Fetch content based on type
    switch(contentType) {
        // Movies
        case 'trending-movies':
            result = await fetchFromTMDB('/trending/movie/week', { page });
            break;
        case 'popular-movies':
            result = await fetchFromTMDB('/movie/popular', { page });
            break;
        case 'top-rated-movies':
            result = await fetchFromTMDB('/movie/top_rated', { page });
            break;
        case 'new-movies':
            result = await fetchFromTMDB('/movie/now_playing', { page });
            break;
        case 'upcoming-movies':
            result = await fetchFromTMDB('/movie/upcoming', { page });
            break;
            
        // TV Shows
        case 'trending-tv':
            result = await fetchFromTMDB('/trending/tv/week', { page });
            break;
        case 'popular-tv':
            result = await fetchFromTMDB('/tv/popular', { page });
            break;
        case 'top-rated-tv':
            result = await fetchFromTMDB('/tv/top_rated', { page });
            break;
        case 'airing-today-tv':
            result = await fetchFromTMDB('/tv/airing_today', { page });
            break;
            
        // Anime
        case 'top-anime':
            const animeResult = await fetchFromAnimeAPI('/top/anime', { page, limit: 20 });
            return animeResult.data || []; // Return early with anime data
        case 'popular-anime':
            const popularAnime = await fetchFromAnimeAPI('/anime', { page, limit: 20, order_by: 'popularity' });
            return popularAnime.data || []; // Return early with anime data
        case 'airing-anime':
            const airingAnime = await fetchFromAnimeAPI('/anime', { page, limit: 20, status: 'airing' });
            return airingAnime.data || []; // Return early with anime data
            
        default:
            result = await fetchFromTMDB('/trending/all/week', { page });
    }
    
    // Apply genre filter if specified
    let data = result.results || [];
    if (genreId && genreId !== 'all') {
        data = data.filter(item => 
            item.genre_ids && item.genre_ids.includes(parseInt(genreId))
        );
    }
    
    // Apply sorting if specified
    if (sortBy) {
        switch(sortBy) {
            case 'rating':
                data.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));
                break;
            case 'release':
                data.sort((a, b) => {
                    const dateA = new Date(b.release_date || b.first_air_date || 0);
                    const dateB = new Date(a.release_date || a.first_air_date || 0);
                    return dateA - dateB;
                });
                break;
        }
    }
    
    return processTMDBResults(data);
}

// Get details for a specific item by ID
async function getItemById(id, contentType) {
    try {
        if (!id) {
            throw new Error('ID is required');
        }
        
        switch(contentType) {
            case 'movie':
                return await fetchFromTMDB(`/movie/${id}`);
            case 'tvshow':
                return await fetchFromTMDB(`/tv/${id}`);
            case 'anime':
                const animeResult = await fetchFromAnimeAPI(`/anime/${id}`);
                return animeResult.data;
            default:
                throw new Error('Invalid content type');
        }
    } catch (error) {
        console.error(`Error fetching details for ${contentType} with ID ${id}:`, error);
        return null;
    }
}

// Get genres for dropdown population
async function getGenres(contentType) {
    try {
        switch(contentType) {
            case 'movie':
                const movieGenres = await fetchFromTMDB('/genre/movie/list');
                return movieGenres.genres || [];
            case 'tvshow':
                const tvGenres = await fetchFromTMDB('/genre/tv/list');
                return tvGenres.genres || [];
            case 'anime':
                const animeGenres = await fetchFromAnimeAPI('/genres/anime');
                return animeGenres.data || [];
            default:
                return [];
        }
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
}

// Search for content
async function searchContent(query, contentType = 'all', page = 1) {
    try {
        if (!query) {
            return [];
        }
        
        switch(contentType) {
            case 'movie':
                const movieResults = await fetchFromTMDB('/search/movie', { query, page });
                return movieResults.results || [];
            case 'tvshow':
                const tvResults = await fetchFromTMDB('/search/tv', { query, page });
                return tvResults.results || [];
            case 'anime':
                const animeResults = await fetchFromAnimeAPI('/anime', { q: query, page, limit: 20 });
                return animeResults.data || [];
            case 'all':
                const multiResults = await fetchFromTMDB('/search/multi', { query, page });
                return multiResults.results || [];
            default:
                return [];
        }
    } catch (error) {
        console.error('Error searching content:', error);
        return [];
    }
}