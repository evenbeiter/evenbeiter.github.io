function addBtn(){
var walls=document.getElementsByClassName('wall');
for (var wall of walls){wall.remove()};
var ads=document.getElementsByClassName('ad');
for (var ad of ads){ad.remove()};
var xbtn=document.querySelectorAll('#close-btn');
for (var btn of xbtn){btn.remove()};
var nav=document.querySelectorAll('.navbar');
for (var n of nav){n.remove()};
var eba=document.querySelectorAll('.mm-eyebrow-alert');
for (var a of eba){a.remove()};
var pbtn=document.querySelectorAll('.btn-primary');
for (var b of pbtn){b.style.backgroundColor='grey';b.style.border='grey'};

var stats=document.getElementsByClassName('stat-name');
for (let s of stats){
	if (s.firstChild.href!==undefined){
		var stat_id=' s'+s.firstChild.href.match(/series\/[\s\S]*?\//g)[0].replace('series/','').replace('\/','')} else {var stat_id=''};
	s.innerHTML=s.innerHTML+'<span style="font-size:0.7rem;color:grey">'+stat_id+'</span>'};
	
var oChart=Highcharts.charts[Highcharts.charts.length-1];
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
        buttons: [{
          type: "month",
          count: 1,
          text: "1m"
        }, {
          type: "month",
          count: 3,
          text: "3m"
        }, {
          type: "month",
          count: 6,
          text: "6m"
        }, {
          type: "ytd",
          text: "YTD"
        }, {
          type: "year",
          count: 1,
          text: "1y"
        }, {
          type: "year",
          count: 3,
          text: "3y"
        }, {
          type: "year",
          count: 5,
          text: "5y"
        }, {
          type: "year",
          count: 10,
          text: "10y"
        }, {
          type: "year",
          count: 20,
          text: "20y"
        }, {
          type: "all",
          text: "All"
        }],
        selected: 9,
        buttonSpacing: 0,
        buttonTheme: {
          fill: "none",
          style: {
            color: "#666666"
          },
          states: {
            select: {
              fill: "#ADAEB0",
              style: {
                color: "#333333"
              }
            }
          }
        }
	  },

    xAxis: {tickLength: 3}
});
let logo_img=document.getElementsByTagName('image');
for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};
}

function changeColor(){
var walls=document.getElementsByClassName('wall');
for (var wall of walls){wall.remove()};
var ads=document.getElementsByClassName('ad');
for (var ad of ads){ad.remove()};
var xbtn=document.querySelectorAll('#close-btn');
for (var btn of xbtn){btn.remove()};

var all_colors=[ "#6E8DB0" , "#ADAEB0" , "#375172" , "#5f8289" , "#6eb2bd" , "#dcb596" , "#c06d59" , "#67707A" , "#4CB4E7" , "#A6A97B" , "#f1e1d5" , "#9db6bb" , "#ffb837" , "#dd3d41" , "#1a8a4d" , "#464646"];
var oChart=Highcharts.charts[Highcharts.charts.length-1];
for (var n=0;n<oChart.series.length;n++){
	oChart.series[n].update({
		color: all_colors[n]
	});
}
}


function enlargeAxisFontSize() {
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

}


function reduceAxisFontSize() {
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
	
}

// Inject initial function call if on the specified site
if (window.location.href.match(/:\/\/.*\.macromicro\.com\//)) {
  addBtn();
}