function shortenUrl() {
    const longUrlInput = document.getElementById('longUrlInput');
    const shortUrlInput = document.getElementById('shortUrlInput');

    const longUrl = longUrlInput.value;

    const accessToken = '37b5e92787ddfb1e3d98a1b13c7d494ad77ea4a3';
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    const data = {
      long_url: longUrl
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      const shortenedUrl = response.id;
      shortUrlInput.value = shortenedUrl;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }