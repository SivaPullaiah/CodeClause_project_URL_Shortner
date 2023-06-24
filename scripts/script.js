function shortenUrl() {
    const longUrlInput = document.getElementById('longUrlInput');
    const shortUrlInput = document.getElementById('shortUrlInput');

    const longUrl = longUrlInput.value;

    const accessToken = '3bd05e6aefbf18281f15b0aa681e120eb52c50bf';
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