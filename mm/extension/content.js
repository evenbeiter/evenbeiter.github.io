function addBtn() {
  const elementsToRemove = [
    ...document.getElementsByClassName('wall'),
    ...document.getElementsByClassName('ad'),
    ...document.getElementsByClassName('alertify'),
    ...document.querySelectorAll('#close-btn'),
    ...document.querySelectorAll('.navbar'),
    ...document.querySelectorAll('.mm-eyebrow-alert')
  ];

  for (const element of elementsToRemove) {
    element.remove();
  }

  const pbtn = document.querySelectorAll('.btn-primary');
  for (const b of pbtn) {
    b.style.backgroundColor = 'grey';
    b.style.border = 'grey';
  }

  const stats = document.getElementsByClassName('stat-name');
  for (let s of stats) {
    if (s.firstChild?.href) {
      const stat_id = ' s' + s.firstChild.href.match(/series\/[\s\S]*?\//)[0].replace('series/', '').replace('/', '');
      s.innerHTML += `<span style="font-size:0.7rem;color:grey">${stat_id}</span>`;
    }
  }

  const oChart = Highcharts.charts[Highcharts.charts.length - 1];
  if (oChart) {
    oChart.update({
      chart: {
        animation: false
      },
      subtitle: { text: "" },
      rangeSelector: {
        enabled: true,
        inputEnabled: true,
        dropdown: "responsive",
        inputPosition: { align: 'right' },
        buttons: [
          { type: "month", count: 1, text: "1m" },
          { type: "month", count: 3, text: "3m" },
          { type: "month", count: 6, text: "6m" },
          { type: "ytd", text: "YTD" },
          { type: "year", count: 1, text: "1y" },
          { type: "year", count: 3, text: "3y" },
          { type: "year", count: 5, text: "5y" },
          { type: "year", count: 10, text: "10y" },
          { type: "year", count: 20, text: "20y" },
          { type: "all", text: "All" }
        ],
        selected: 9,
        buttonSpacing: 0,
        buttonTheme: {
          fill: "none",
          style: { color: "#666666" },
          states: {
            select: {
              fill: "#ADAEB0",
              style: { color: "#333333" }
            }
          }
        }
      },
      xAxis: { tickLength: 3 }
    });

    const logo_imgs = document.getElementsByTagName('image');
    for (let i = logo_imgs.length - 1; i >= 0; i--) {
      logo_imgs[i].parentNode.removeChild(logo_imgs[i]);
    }
  }
}

function changeColor() {
  const elementsToRemove = [
    ...document.getElementsByClassName('wall'),
    ...document.getElementsByClassName('ad'),
    ...document.querySelectorAll('#close-btn')
  ];

  for (const element of elementsToRemove) {
    element.remove();
  }

  const all_colors = [
    "#6E8DB0", "#ADAEB0", "#375172", "#5f8289", "#6eb2bd", "#dcb596", "#c06d59",
    "#67707A", "#4CB4E7", "#A6A97B", "#f1e1d5", "#9db6bb", "#ffb837", "#dd3d41",
    "#1a8a4d", "#464646"
  ];

  const oChart = Highcharts.charts[Highcharts.charts.length - 1];
  if (oChart) {
    for (let n = 0; n < oChart.series.length; n++) {
      oChart.series[n].update({ color: all_colors[n] });
    }
  }
}

function changeFontSize(enlarge) {
  const oChart = Highcharts.charts[Highcharts.charts.length - 1];
  if (!oChart) return;

  function adjustFontSize(style, change) {
    const currentFontSize = parseInt(style.fontSize);
    return (currentFontSize + change) + 'px';
  }

  const change = enlarge ? 1 : -1;
  oChart.update({
    xAxis: {
      title: { style: { fontSize: adjustFontSize(oChart.options.xAxis[0].title.style, change) } },
      labels: { style: { fontSize: adjustFontSize(oChart.options.xAxis[0].labels.style, change) } }
    }
  });

  for (const yAxis of oChart.yAxis) {
    yAxis.update({
      title: { style: { fontSize: adjustFontSize(yAxis.options.title.style, change) } },
      labels: { style: { fontSize: adjustFontSize(yAxis.options.labels.style, change) } }
    });
  }
}

function enlargeAxisFontSize() {
  changeFontSize(true);
}

function reduceAxisFontSize() {
  changeFontSize(false);
}

// Execute addBtn() after the page is fully loaded
if (window.location.href.match(/:\/\/.*\.macromicro\.me\//)) {
  window.addEventListener('load', () => {
    addBtn();
  });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'addBtn') {
    addBtn();
  } else if (request.action === 'changeColor') {
    changeColor();
  } else if (request.action === 'enlargeAxisFontSize') {
    enlargeAxisFontSize();
  } else if (request.action === 'reduceAxisFontSize') {
    reduceAxisFontSize();
  }
});
