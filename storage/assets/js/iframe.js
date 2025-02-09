const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const iframe = document.getElementById('myIframe');

if (url) {
  // Extract the part after embed.html
  const urlParts = url.split('embed.html');
  const extraPart = urlParts.length > 1 ? urlParts[1] : '';

  // Construct the iframe source URL with the extra part
  iframe.src = urlParts[0] + 'embed.html' + extraPart;
  localStorage.setItem('iframeUrl', iframe.src);
  history.replaceState(null, '', window.location.pathname);
} else {
  const savedUrl = localStorage.getItem('iframeUrl');
  if (savedUrl) {
    iframe.src = savedUrl;
  } else {
    console.error("No URL parameter provided and no saved URL found.");
  }
}

// ... rest of the code (fullscreen, refresh, chat, open source)
