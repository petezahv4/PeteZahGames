const urlParams = new URLSearchParams(window.location.search);
const baseEmbedUrl = '/static/embed.html'; // Base URL for embed.html
const iframe = document.getElementById('myIframe');

// Get the full URL from the hash
const embeddedSiteUrl = window.location.hash.substring(1);

if (embeddedSiteUrl) {
  iframe.src = baseEmbedUrl + '#' + embeddedSiteUrl;
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

// ... rest of your code (fullscreen, refresh, chat, open source)
