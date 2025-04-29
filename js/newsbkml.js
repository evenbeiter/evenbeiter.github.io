javascript:(function(){
  const targetUrl = "https://hao.cnyes.com/ch/361680";
  const externalScriptUrl = "https://evenbeiter.github.io/js/news.js";

  const injectScript = () => {
    const script = document.createElement('script');
    script.src = externalScriptUrl;
    script.onload = () => alert('[Bookmarklet] Script loaded.');
    script.onerror = () => alert('[Bookmarklet] Script failed to load.');
    document.body.appendChild(script);
  };

  const waitAndInject = () => {
    if (document.readyState === 'complete') {
      injectScript();
    } else {
      window.addEventListener('load', injectScript);
    }
  };

  if (location.href !== targetUrl) {
    window.location.href = targetUrl;
    sessionStorage.setItem('__inject_script__', 'true');
  } else if (sessionStorage.getItem('__inject_script__')) {
    sessionStorage.removeItem('__inject_script__');
    waitAndInject();
  } else {
    waitAndInject();
  }
})();
