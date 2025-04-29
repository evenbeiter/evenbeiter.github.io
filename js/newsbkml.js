javascript:(function(){
  const targetUrl = "https://hao.cnyes.com/ch/361680";
  const externalScriptUrl = "https://evenbeiter.github.io/js/news.js";

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
