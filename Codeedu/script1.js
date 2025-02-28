function filterVideos() {
    const searchQuery = document.getElementById('searchBar').value.trim().toLowerCase();
    const videoCards = document.querySelectorAll('.video-card');
  
    videoCards.forEach((card) => {
      const title = card.getAttribute('data-title').toLowerCase();
      if (title.includes(searchQuery)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  