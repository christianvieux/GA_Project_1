// main.js - Core functionality and navigation

// Handle page navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll("body a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the target page from href
      const targetPage = link.getAttribute("href").substring(1); // remove #

      // Set active class on nav
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");

      // Hide all pages
      document.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("active");
        page.classList.add("hidden");
      });

      // Show target page
      const pageToShow = document.getElementById(targetPage + "_page");
      if (pageToShow) {
        pageToShow.classList.add("active");
        pageToShow.classList.remove("hidden");

        // Initialize the page content if needed
        switch (targetPage) {
          case "movies":
            if (typeof initializeMoviesPage === "function") {
              initializeMoviesPage();
            }
            break;
          case "tvshows":
            if (typeof initializeTvShowsPage === "function") {
              initializeTvShowsPage();
            }
            break;
          case "anime":
            if (typeof initializeAnimePage === "function") {
              initializeAnimePage();
            }
            break;
          case "home":
          default:
            initializeHomePage();
        }
      }

      // Update URL
      history.pushState({}, "", `#${targetPage}`);
    });
  });

  // Handle initial page load
  const currentPage = window.location.hash.substring(1) || "home";
  document.querySelector(`nav a[href="#${currentPage}"]`).click();

  // Setup mobile menu toggle
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
  });
}

// Initialize home page
function initializeHomePage() {
  // Load content sections
  fetchContent("trending-movies").then((movies) => {
    displayContentGrid(movies.slice(0, 6), ".home_page_section_list#trending");
  });

  fetchContent("top-rated-movies").then((movies) => {
    displayContentGrid(movies.slice(0, 6), ".home_page_section_list#popular");
  });

  fetchContent("new-movies").then((movies) => {
    displayContentGrid(
      movies.slice(0, 6),
      ".home_page_section_list#new-releases"
    );
  });
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
});
