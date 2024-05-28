document.getElementById('btnAdd').addEventListener('click', () => {
  chrome.tabs.executeScript({
    code: 'addBtn();'
  });
});

document.getElementById('btnChangeColor').addEventListener('click', () => {
  chrome.tabs.executeScript({
    code: 'changeColor();'
  });
});

document.getElementById('btnEnlargeFont').addEventListener('click', () => {
  chrome.tabs.executeScript({
    code: 'enlargeAxisFontSize();'
  });
});

document.getElementById('btnReduceFont').addEventListener('click', () => {
  chrome.tabs.executeScript({
    code: 'reduceAxisFontSize();'
  });
});
