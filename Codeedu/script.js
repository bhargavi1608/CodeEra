function searchTopics() {
    const query = document.getElementById('search-bar').value;
    const resultSection = document.getElementById('search-result');
  
    if (query.trim() === "") {
      resultSection.innerHTML = "<p>Please enter a topic to search.</p>";
    } else {
      resultSection.innerHTML = `<p>You searched for: <strong>${query}</strong></p>`;
    }
  }
  