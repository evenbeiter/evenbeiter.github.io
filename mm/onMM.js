javascript:(()=>{
var ss=document.querySelectorAll('script');
for (let s of ss){
  if (s.src=='https://www.googletagmanager.com/gtag/js?id=G-4CS94JJY2M'){s.remove()};
  if (s.innerHTML.indexOf('下次再說')!==-1){s.remove()};
}

const el2Remove = [
...document.querySelectorAll('.wall'),
...document.querySelectorAll('.ad'),
...document.querySelectorAll('.alertify'),
...document.querySelectorAll('#close-btn'),
...document.querySelectorAll('.navbar'),
...document.querySelectorAll('.mm-eyebrow-alert')
];

for (const el of el2Remove) {
el.remove();
}

var pbtn=document.querySelectorAll('.btn-primary');
for (var b of pbtn){b.style.backgroundColor='grey';b.style.border='grey'};

var spans=document.querySelectorAll('span');
spans.forEach(s=>{if (s.style.fontSize==='0.7rem'){s.remove()}});

var stats=document.getElementsByClassName('stat-name');
for (let s of stats){
	if (s.firstChild.href!==undefined){
		var stat_id=' s'+s.firstChild.href.match(/series\/[\s\S]*?\//g)[0].replace('series/','').replace('\/','')} else {var stat_id=''};
	s.innerHTML=s.innerHTML+'<span style="font-size:0.7rem;color:grey">'+stat_id+'</span>'};
	
var oCharts=Highcharts.charts;
for (let oChart of oCharts){
	if (oChart !== undefined){
oChart.setSize(948,460);
oChart.update({
    chart: {
        animation: false
    },
    subtitle: {text: ""},
    rangeSelector: {
        enabled: !0,
        inputEnabled: !0,
        dropdown: "responsive",
        inputPosition: {align:'right'},
        buttons: [
          {type: "month",count: 1,text: "1m"}, 
          {type: "month",count: 3,text: "3m"}, 
          {type: "month",count: 6,text: "6m"}, 
          {type: "ytd",text: "YTD"}, 
          {type: "year",count: 1,text: "1y"}, 
          {type: "year",count: 3,text: "3y"}, 
          {type: "year",count: 5,text: "5y"}, 
          {type: "year",count: 10,text: "10y"}, 
          {type: "year",count: 20,text: "20y"}, 
          {type: "all",text: "All"}
        ],
        selected: 9,
        buttonSpacing: 0,
        buttonTheme: {
          fill: "none",
          style: {color: "#666666"},
          states: {
            select: {
              fill: "#ADAEB0",
              style: {color: "#333333"}
            }
          }
        }
	  },
    xAxis: {tickLength: 3, title:{style:{fontFamily:"Arial Narrow, sans-serif", fontSize:"13px"}}, labels:{style:{fontFamily:"Arial Narrow, sans-serif", fontSize:"13px"}}},
    yAxis: {title:{style:{fontFamily:"Arial Narrow, sans-serif", fontSize:"13px"}}, labels:{fontFamily:"Arial Narrow, sans-serif", style:{fontSize:"13px"}}},
    legend: {enabled:!1}
})
}};
let logo_img=document.querySelectorAll('image');
for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};
})();



javascript:(()=>{
var walls=document.getElementsByClassName('wall');
for (var wall of walls){wall.remove()};
var ads=document.getElementsByClassName('ad');
for (var ad of ads){ad.remove()};
var xbtn=document.querySelectorAll('#close-btn');
for (var btn of xbtn){btn.remove()};

var all_colors=[ "#6E8DB0" , "#ADAEB0" , "#375172" , "#5f8289" , "#6eb2bd" , "#dcb596" , "#c06d59" , "#67707A" , "#4CB4E7" , "#A6A97B" , "#f1e1d5" , "#9db6bb" , "#ffb837" , "#dd3d41" , "#1a8a4d" , "#464646"];
var highcharts=Highcharts.charts;
for (let oChart of highcharts){
for (var n=0;n<oChart.series.length;n++){
	oChart.series[n].update({
		color: all_colors[n]
	});
}}
})();


//function enlargeAxisFontSize() {

javascript:(()=>{
var oChart=Highcharts.charts[Highcharts.charts.length-1];
function enlargeFontSize(style) {
	const currentFontSize = parseInt(style.fontSize);
	return (currentFontSize + 1) + 'px';
}

oChart.update({
	xAxis: {
		title: {style: {fontSize: enlargeFontSize(oChart.options.xAxis[0].title.style)}},
		labels: {style: {fontSize: enlargeFontSize(oChart.options.xAxis[0].labels.style)}}
	}
});

var yAxes = oChart.yAxis;
yAxes.forEach((yAxis, index) => {
	yAxis.update({
		title: {style: {fontSize: enlargeFontSize(oChart.options.yAxis[index].title.style)}},
		labels: {style: {fontSize: enlargeFontSize(oChart.options.yAxis[index].labels.style)}}
	});
});

})();

//}


javascript:(()=>{
var oChart=Highcharts.charts[Highcharts.charts.length-1];
function enlargeFontSize(style) {
	const currentFontSize = parseInt(style.fontSize);
	return (currentFontSize - 1) + 'px';
}

oChart.update({
	xAxis: {
		title: {style: {fontSize: enlargeFontSize(oChart.options.xAxis[0].title.style)}},
		labels: {style: {fontSize: enlargeFontSize(oChart.options.xAxis[0].labels.style)}}
	}
});

var yAxes = oChart.yAxis;
yAxes.forEach((yAxis, index) => {
	yAxis.update({
		title: {style: {fontSize: enlargeFontSize(oChart.options.yAxis[index].title.style)}},
		labels: {style: {fontSize: enlargeFontSize(oChart.options.yAxis[index].labels.style)}}
	});
});
	
})();


oChart.setSize(null, 600);


//remove series
var series = Highcharts.charts[0].series;

// Iterate through the series
for (var i = 0; i < series.length; i++) {
	// Check if the series name matches
	if (series[i].name === '美國-聯準會金融脈衝成長指數[FCI-G]-1年回顧'
) {
		// Remove the series
		series[i].remove();
		break; // Stop the loop after removing the series
	}
}
