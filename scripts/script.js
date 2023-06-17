// main script will be here

function shortenUrl() {
    const longUrl = document.getElementById('longUrlInput').value;
    
    // Make an API request to Bitly using your preferred method (e.g., Fetch, Axios, etc.)
    // Remember to replace YOUR_API_KEY with your actual Bitly API key
    fetch(`https://api-ssl.bitly.com/v4/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 37b5e92787ddfb1e3d98a1b13c7d494ad77ea4a3'
      },
      body: JSON.stringify({
        long_url: longUrl
      })
    })
    .then(response => response.json())
    .then(data => {
      const shortenedUrl = data.link;
      document.getElementById('shortenedUrl').textContent = `Shortened URL: ${shortenedUrl}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('shortenedUrl').textContent = 'An error occurred. Please try again.';
    });
  }
  