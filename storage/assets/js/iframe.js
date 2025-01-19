const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const iframe = document.getElementById('myIframe');

if (url) {
  iframe.src = url;
  localStorage.setItem('iframeUrl', url);

  // Schedule the URL removal after 1 second
  setTimeout(function() {
    history.replaceState(null, '', window.location.pathname);
  }, 1000);
} else {
  const savedUrl = localStorage.getItem('iframeUrl');
  if (savedUrl) {
    iframe.src = savedUrl;
  } else {
    console.error("No URL parameter provided and no saved URL found.");
  }
}

function toggleFullscreen() {
            const iframe = document.getElementById('myIframe');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { 
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { 
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { 
                iframe.msRequestFullscreen();
            }
        }

        function refreshIframe() {
            const iframe = document.getElementById('myIframe');
            iframe.src = iframe.src; 
        }

document.getElementById('whysofeinious-button').addEventListener('click', function() {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            script.onload = function() {
                new Crate({
                    server: '1272664240175448208', 
                    channel: '1272664509156298773' 
                });
            };
        });

document.getElementById('openIframeSource').addEventListener('click', function() {
    var iframeSrc = document.getElementById('myIframe').src;
    var link = document.createElement('a');
    link.href = iframeSrc;
    link.target = '_blank';
    link.click();
});
