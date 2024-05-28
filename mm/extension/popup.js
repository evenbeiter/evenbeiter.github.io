document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnAdd').addEventListener('click', () => {
    sendMessageToContentScript({ action: 'addBtn' });
  });
  document.getElementById('btnChangeColor').addEventListener('click', () => {
    sendMessageToContentScript({ action: 'changeColor' });
  });
  document.getElementById('btnEnlargeFont').addEventListener('click', () => {
    sendMessageToContentScript({ action: 'enlargeAxisFontSize' });
  });
  document.getElementById('btnReduceFont').addEventListener('click', () => {
    sendMessageToContentScript({ action: 'reduceAxisFontSize' });
  });

  function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.runtime.sendMessage({ action: message.action, tabId: tabs[0].id });
    });
  }
});
