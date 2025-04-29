javascript:(function(){
  const targetUrl = "https://example.com";
  const externalScriptUrl = "https://yourdomain.com/logic.js";

  const injectScript = () => {
    const script = document.createElement('script');
    script.src = externalScriptUrl;
    script.onload = () => console.log('Script loaded.');
    document.body.appendChild(script);
  };

  if (location.href !== targetUrl) {
    window.location.href = targetUrl;
    window.addEventListener('load', injectScript, false);
  } else {
    injectScript();
  }
})();