<script>
const username = 'TheJ'; // Replace with the username of the user whose FOIA requests you want to display
const allowedOrigins = ['https://muckrock.com', 'https://*.muckrock.com', 'https://lassiter.eu']; // Add an array of allowed domains that can make requests through the proxy
const corsProxyUrl = 'https://api.codetabs.com/v1/proxy/?quest=';
const apiUrl = `https://www.muckrock.com/api_v1/foia/?user=${username}&title=&status=&embargo=unknown&jurisdiction=&agency=&projects=&tags=&has_datetime_submitted=unknown&has_datetime_done=unknown&ordering=-datetime_submitted`;

// Send a request to the MuckRock API through the CORS proxy
fetch(corsProxyUrl + apiUrl, {
  headers: {
    'Origin': window.location.origin // Send the requesting domain as the Origin header
  }
})

  .then(data => {
    const requests = data.results;
    const requestList = document.querySelector('#request-list');
    requests.forEach(request => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent =request.title;
   if (request.absolute_url) {
        link.href = request.absolute_url;
      } 
    listItem.appendChild(link);
      requestList.appendChild(listItem);
    
    });
  })
  .catch(error => console.error('Error fetching data:', error));
// Check if the requesting domain is allowed to make requests through the proxy
function isAllowedOrigin(origin) {
  for (let i = 0; i < allowedOrigins.length; i++) {
    const allowedOrigin = allowedOrigins[i];
    if (allowedOrigin === origin) {
      return true;
    }
    if (allowedOrigin.startsWith('https://*.') && origin.endsWith(allowedOrigin.slice(8))) {
      return true;
    }
  }
  return false;
}

// Add the requesting domain to the CORS proxy URL if it is allowed
if (isAllowedOrigin(window.location.origin)) {
  corsProxyUrl += window.location.origin + '/';
}
  </script>
