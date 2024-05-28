chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const actionMap = {
    addBtn,
    changeColor,
    enlargeAxisFontSize,
    reduceAxisFontSize
  };

  if (actionMap[request.action]) {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: actionMap[request.action]
    });
  }
});

function addBtn() {
  // Your original addBtn function code...
}

function changeColor() {
  // Your original changeColor function code...
}

function enlargeAxisFontSize() {
  // Your original enlargeAxisFontSize function code...
}

function reduceAxisFontSize() {
  // Your original reduceAxisFontSize function code...
}
