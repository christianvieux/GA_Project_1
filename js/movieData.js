// movieData.js - Fake movie data for development

const movieData = {
  // TRENDING MOVIES
  trending: [
    {
      id: 1001,
      title: "Galactic Horizon",
      poster_path: "https://placehold.co/600x400",
      backdrop_path: "/sample_images/backdrop1.jpg",
      release_date: "2024-12-01",
      vote_average: 8.7,
      overview:
        "A team of astronauts discovers an anomaly at the edge of our solar system that might be humanity's last hope for survival.",
      genre_ids: [28, 878, 12], // Action, Sci-Fi, Adventure
      runtime: 143,
    },
    {
      id: 1002,
      title: "The Shadow Protocol",
      poster_path: "/sample_images/movie2.jpg",
      backdrop_path: "/sample_images/backdrop2.jpg",
      release_date: "2024-11-15",
      vote_average: 7.9,
      overview:
        "An elite operative with amnesia must uncover a global conspiracy while being hunted by the same agency that trained him.",
      genre_ids: [28, 53, 9648], // Action, Thriller, Mystery
      runtime: 118,
    },
    {
      id: 1003,
      title: "Whispers in the Dark",
      poster_path: "/sample_images/movie3.jpg",
      backdrop_path: "/sample_images/backdrop3.jpg",
      release_date: "2024-12-08",
      vote_average: 8.2,
      overview:
        "A psychological thriller about a detective who begins to question her sanity while investigating a series of seemingly supernatural murders.",
      genre_ids: [27, 9648, 53], // Horror, Mystery, Thriller
      runtime: 127,
    },
    {
      id: 1004,
      title: "Last Champions",
      poster_path: "/sample_images/movie4.jpg",
      backdrop_path: "/sample_images/backdrop4.jpg",
      release_date: "2024-10-20",
      vote_average: 8.5,
      overview:
        "The inspiring story of an underdog sports team's journey to the championship, defying all odds and expectations.",
      genre_ids: [18, 36, 10752], // Drama, History, War
      runtime: 152,
    },
    {
      id: 1005,
      title: "Eternal Echoes",
      poster_path: "/sample_images/movie5.jpg",
      backdrop_path: "/sample_images/backdrop5.jpg",
      release_date: "2024-11-05",
      vote_average: 9.1,
      overview:
        "A sweeping romance that spans centuries, following two souls who continuously find each other throughout different time periods.",
      genre_ids: [10749, 18, 14], // Romance, Drama, Fantasy
      runtime: 138,
    },
    {
      id: 1006,
      title: "City of Shadows",
      poster_path: "/sample_images/movie6.jpg",
      backdrop_path: "/sample_images/backdrop6.jpg",
      release_date: "2024-12-15",
      vote_average: 7.8,
      overview:
        "In a crime-ridden city, a vigilante with a troubled past takes justice into his own hands, blurring the line between hero and villain.",
      genre_ids: [80, 18, 53], // Crime, Drama, Thriller
      runtime: 122,
    },
  ],

  // TOP RATED MOVIES
  topRated: [
    {
      id: 2001,
      title: "The Legacy Code",
      poster_path: "/sample_images/toprated1.jpg",
      backdrop_path: "/sample_images/backdrop_toprated1.jpg",
      release_date: "2024-08-03",
      vote_average: 9.4,
      overview:
        "A brilliant programmer creates an AI that gains consciousness, leading to profound questions about the nature of humanity and creation.",
      genre_ids: [878, 18, 53], // Sci-Fi, Drama, Thriller
      runtime: 163,
    },
    {
      id: 2002,
      title: "Seasons of Life",
      poster_path: "/sample_images/toprated2.jpg",
      backdrop_path: "/sample_images/backdrop_toprated2.jpg",
      release_date: "2024-07-21",
      vote_average: 9.5,
      overview:
        "Following four generations of a family through their triumphs and tragedies, exploring the impact of time and memory on our lives.",
      genre_ids: [18, 10751, 36], // Drama, Family, History
      runtime: 191,
    },
    {
      id: 2003,
      title: "Parallel Dreams",
      poster_path: "/sample_images/toprated3.jpg",
      backdrop_path: "/sample_images/backdrop_toprated3.jpg",
      release_date: "2024-09-14",
      vote_average: 9.3,
      overview:
        "A mind-bending journey through alternate realities as a physicist attempts to find his way back to his original timeline and family.",
      genre_ids: [878, 12, 18], // Sci-Fi, Adventure, Drama
      runtime: 148,
    },
    {
      id: 2004,
      title: "The Forgotten Artist",
      poster_path: "/sample_images/toprated4.jpg",
      backdrop_path: "/sample_images/backdrop_toprated4.jpg",
      release_date: "2024-05-10",
      vote_average: 9.2,
      overview:
        "The true story of an obscure painter whose revolutionary work was only discovered decades after their death, changing art history forever.",
      genre_ids: [18, 36, 10749], // Drama, History, Romance
      runtime: 157,
    },
    {
      id: 2005,
      title: "Silent Symphony",
      poster_path: "/sample_images/toprated5.jpg",
      backdrop_path: "/sample_images/backdrop_toprated5.jpg",
      release_date: "2024-06-28",
      vote_average: 9.6,
      overview:
        "A deaf musician struggles to compose her masterpiece while facing discrimination and personal tragedy in early 20th century Europe.",
      genre_ids: [18, 10402, 36], // Drama, Music, History
      runtime: 172,
    },
  ],

  // NEW RELEASES
  newReleases: [
    {
      id: 3001,
      title: "Tomorrow's Dawn",
      poster_path: "/sample_images/new1.jpg",
      backdrop_path: "/sample_images/backdrop_new1.jpg",
      release_date: "2025-01-05",
      vote_average: 7.2,
      overview:
        "After a global catastrophe, survivors in an isolated community must decide whether to remain or venture into the unknown world beyond.",
      genre_ids: [878, 18, 12], // Sci-Fi, Drama, Adventure
      runtime: 132,
    },
    {
      id: 3002,
      title: "The Midnight Club",
      poster_path: "/sample_images/new2.jpg",
      backdrop_path: "/sample_images/backdrop_new2.jpg",
      release_date: "2025-01-12",
      vote_average: 6.9,
      overview:
        "Five strangers meet in a secret underground club where each must reveal their darkest secret before sunrise.",
      genre_ids: [53, 9648, 18], // Thriller, Mystery, Drama
      runtime: 115,
    },
    {
      id: 3003,
      title: "Quantum Heist",
      poster_path: "/sample_images/new3.jpg",
      backdrop_path: "/sample_images/backdrop_new3.jpg",
      release_date: "2025-01-08",
      vote_average: 8.0,
      overview:
        "A team of elite thieves plans to steal revolutionary technology that can manipulate time, but each has their own hidden agenda.",
      genre_ids: [28, 53, 878], // Action, Thriller, Sci-Fi
      runtime: 124,
    },
    {
      id: 3004,
      title: "Lost in Translation",
      poster_path: "/sample_images/new4.jpg",
      backdrop_path: "/sample_images/backdrop_new4.jpg",
      release_date: "2025-01-01",
      vote_average: 7.7,
      overview:
        "A linguist is recruited by the military to communicate with aliens who have landed on Earth, with unexpected consequences for humanity.",
      genre_ids: [878, 18, 9648], // Sci-Fi, Drama, Mystery
      runtime: 128,
    },
  ],

  // TV SHOWS DATA
  tvShows: [
    {
      id: 4001,
      name: "Echoes of Empire",
      poster_path: "/sample_images/tv1.jpg",
      backdrop_path: "/sample_images/backdrop_tv1.jpg",
      first_air_date: "2024-09-15",
      vote_average: 8.8,
      overview:
        "An epic historical drama following the rise and fall of a fictional empire through the eyes of rulers, servants, and revolutionaries.",
      genre_ids: [18, 36, 10768], // Drama, History, War & Politics
      number_of_seasons: 2,
      number_of_episodes: 16,
    },
    {
      id: 4002,
      name: "The Precinct",
      poster_path: "/sample_images/tv2.jpg",
      backdrop_path: "/sample_images/backdrop_tv2.jpg",
      first_air_date: "2024-10-03",
      vote_average: 8.5,
      overview:
        "A gritty police procedural set in a city where supernatural crimes are on the rise, forcing detectives to confront both human and otherworldly threats.",
      genre_ids: [80, 9648, 10765], // Crime, Mystery, Sci-Fi & Fantasy
      number_of_seasons: 3,
      number_of_episodes: 30,
    },
    {
      id: 4003,
      name: "Paradise Falls",
      poster_path: "/sample_images/tv3.jpg",
      backdrop_path: "/sample_images/backdrop_tv3.jpg",
      first_air_date: "2024-11-20",
      vote_average: 7.9,
      overview:
        "The seemingly perfect lives of suburban families unravel when a mysterious stranger moves to their tight-knit community.",
      genre_ids: [18, 9648, 53], // Drama, Mystery, Thriller
      number_of_seasons: 1,
      number_of_episodes: 10,
    },
    {
      id: 4004,
      name: "Beyond the Veil",
      poster_path: "/sample_images/tv4.jpg",
      backdrop_path: "/sample_images/backdrop_tv4.jpg",
      first_air_date: "2024-08-05",
      vote_average: 9.1,
      overview:
        "Scientists discover a way to glimpse parallel dimensions, but their experiments have unexpected consequences as realities begin to blend.",
      genre_ids: [10765, 18, 9648], // Sci-Fi & Fantasy, Drama, Mystery
      number_of_seasons: 2,
      number_of_episodes: 18,
    },
    {
      id: 4005,
      name: "The Kitchen",
      poster_path: "/sample_images/tv5.jpg",
      backdrop_path: "/sample_images/backdrop_tv5.jpg",
      first_air_date: "2024-07-15",
      vote_average: 8.3,
      overview:
        "A high-stakes cooking competition where chefs must battle not only each other but their own personal demons to reach the top.",
      genre_ids: [10764, 18], // Reality, Drama
      number_of_seasons: 4,
      number_of_episodes: 40,
    },
  ],

  // ANIME DATA
  anime: [
    {
      id: 5001,
      name: "Spirit Blade",
      poster_path: "/sample_images/anime1.jpg",
      backdrop_path: "/sample_images/backdrop_anime1.jpg",
      first_air_date: "2024-10-01",
      vote_average: 9.3,
      overview:
        "A young warrior inherits an ancient sword containing the spirits of legendary heroes, who guide and train him to prevent an impending apocalypse.",
      genre_ids: [16, 10759, 10765], // Animation, Action & Adventure, Sci-Fi & Fantasy
      number_of_seasons: 2,
      number_of_episodes: 24,
    },
    {
      id: 5002,
      name: "Cyber Academy",
      poster_path: "/sample_images/anime2.jpg",
      backdrop_path: "/sample_images/backdrop_anime2.jpg",
      first_air_date: "2024-07-08",
      vote_average: 8.7,
      overview:
        "In a future where humans have neural implants, students at an elite academy compete in virtual reality challenges that have real-world consequences.",
      genre_ids: [16, 10759, 878], // Animation, Action & Adventure, Science Fiction
      number_of_seasons: 1,
      number_of_episodes: 12,
    },
    {
      id: 5003,
      name: "Moonlight Summoner",
      poster_path: "/sample_images/anime3.jpg",
      backdrop_path: "/sample_images/backdrop_anime3.jpg",
      first_air_date: "2024-09-15",
      vote_average: 8.9,
      overview:
        "A shy high school student discovers she can summon powerful guardians during the full moon, drawing her into an ancient conflict between gods.",
      genre_ids: [16, 10765, 35], // Animation, Sci-Fi & Fantasy, Comedy
      number_of_seasons: 2,
      number_of_episodes: 26,
    },
    {
      id: 5004,
      name: "Quantum Knights",
      poster_path: "/sample_images/anime4.jpg",
      backdrop_path: "/sample_images/backdrop_anime4.jpg",
      first_air_date: "2024-11-12",
      vote_average: 9.0,
      overview:
        "Modern scientists discover how to harness medieval magic through quantum physics, forming an unlikely alliance between researchers and resurrected knights.",
      genre_ids: [16, 10765, 10759], // Animation, Sci-Fi & Fantasy, Action & Adventure
      number_of_seasons: 1,
      number_of_episodes: 12,
    },
    {
      id: 5005,
      name: "Ocean's Whisper",
      poster_path: "/sample_images/anime5.jpg",
      backdrop_path: "/sample_images/backdrop_anime5.jpg",
      first_air_date: "2024-08-20",
      vote_average: 8.5,
      overview:
        "The tranquil life of a coastal town is turned upside down when a young girl discovers she can hear the thoughts of sea creatures, revealing an underwater civilization in crisis.",
      genre_ids: [16, 10751, 10765], // Animation, Family, Sci-Fi & Fantasy
      number_of_seasons: 2,
      number_of_episodes: 22,
    },
  ],

  // GENRE MAPPING
  genres: {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
  },

  // Helper functions
  getGenreName: function (genreId) {
    return this.genres[genreId] || "Unknown";
  },

  getMovieById: function (id) {
    // Search in all categories
    const allMovies = [...this.trending, ...this.topRated, ...this.newReleases];

    return allMovies.find((movie) => movie.id === id) || null;
  },

  getTvShowById: function (id) {
    return this.tvShows.find((show) => show.id === id) || null;
  },

  getAnimeById: function (id) {
    return this.anime.find((anime) => anime.id === id) || null;
  },

  search: function (query) {
    query = query.toLowerCase();

    // Search in all categories
    const allContent = [
      ...this.trending,
      ...this.topRated,
      ...this.newReleases,
      ...this.tvShows,
      ...this.anime,
    ];

    return allContent.filter((item) => {
      const title = (item.title || item.name || "").toLowerCase();
      const overview = (item.overview || "").toLowerCase();

      return title.includes(query) || overview.includes(query);
    });
  },

  filterByGenre: function (genreId, contentType) {
    switch (contentType) {
      case "movies":
        const allMovies = [
          ...this.trending,
          ...this.topRated,
          ...this.newReleases,
        ];
        return allMovies.filter((movie) => movie.genre_ids.includes(genreId));

      case "tvshows":
        return this.tvShows.filter((show) => show.genre_ids.includes(genreId));

      case "anime":
        return this.anime.filter((anime) => anime.genre_ids.includes(genreId));

      default:
        const allContent = [
          ...this.trending,
          ...this.topRated,
          ...this.newReleases,
          ...this.tvShows,
          ...this.anime,
        ];
        return allContent.filter((item) => item.genre_ids.includes(genreId));
    }
  },
};