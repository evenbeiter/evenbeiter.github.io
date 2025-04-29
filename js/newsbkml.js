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



javascript:(function(){
  const targetUrl = "https://example.com";
  const externalScriptUrl = "https://yourdomain.com/logic.js";

  const injectScript = () => {
    const script = document.createElement('script');
    script.src = externalScriptUrl;
    script.onload = () => console.log('[Bookmarklet] Script loaded.');
    script.onerror = () => console.error('[Bookmarklet] Script failed to load.');
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
    // 儲存狀態以便 reload 後知道該注入腳本
    sessionStorage.setItem('__inject_script__', 'true');
  } else if (sessionStorage.getItem('__inject_script__')) {
    sessionStorage.removeItem('__inject_script__');
    waitAndInject();
  } else {
    waitAndInject();
  }
})();
