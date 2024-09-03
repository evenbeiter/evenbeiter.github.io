

oChart.setSize(948,460);


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
...document.querySelectorAll('.mm-eyebrow-alert')
];

for (const el of el2Remove) {
el.remove();
}

if (Highcharts.charts[Highcharts.charts.length-1] !==undefined){
var oCharts=Highcharts.charts;
for (let oChart of oCharts){
	if (oChart !== undefined){

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
    legend: {enabled:!0}
})
}};
let logo_img=document.querySelectorAll('image');
for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};


} else {
	
getChart();

function zi(lineType){
  if (lineType=='column'){return 2} else {return 10};
}



var highchart;

highchart=Highcharts.setOptions({
  credits: {enabled:!1},
  chart: {animation:!1},
  langOptions: {
    numericSymbols: ["K", "M", "B", "T", "P", "E"],
    thousandsSep: ","
  },
  tooltipOptions: {shared: !0},
  exporting: {
    button: {
      contextButton: {enabled: !0}
    }
  },
  navigation: {
    buttonOptions: {enabled: !1}
  },
  chart: {
    backgroundColor: "transparent",
    zooming: {
      type: "xy",
      mouseWheel: {enabled: !1}
    }
  },
  legend: {enabled: !0},
  plotOptions: {
    series: {
      lineWidth: 2,
      marker: {enabled: !1},
      states: {
        inactive: {enabled: !1},
        hover: {enabled: !1}
      }
    }
  },
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
  tooltip: {
    split: !1,
    shared: !0,
    dateTimeLabelFormats: {
      millisecond: "%b %e, %Y",
      second: "%b %e, %Y",
      minute: "%b %e, %Y",
      hour: "%b %e, %Y",
      day: "%b %e, %Y",
      week: "%b %e, %Y",
      month: "%B %Y",
      year: "%Y"
    }
  },
  xAxis: {
    labels: {
      style: {fontSize: "11px", color: "#666"}
    },
    title: {
      style: {fontSize: "12px",color: "#666"}
    },
    lineColor: "#d8d8d8",
    tickColor: "#d8d8d8",
    tickLength: 3,
    type: "datetime",
    minTickInterval: 864e5,
    crosshair: !0
  },
  yAxis: {
    labels: {
      style: {fontSize: "11px", color: "#666"}
    },
    title: {
      style: {fontSize: "12px", color: "#666"}
    }
  }
});


let logo_img=document.querySelectorAll('image');
for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i]); if (logo_img[i].href.indexOf('watermark')>0){logo_img[i].remove()}};

}

async function getChart(){
var url=window.location.href;
var id=url.slice(url.lastIndexOf('/',url.lastIndexOf('/')-1)+1,url.lastIndexOf('/'));
	
var res=await fetch('https://www.macromicro.me/trader-insights');
var str=await res.text();
var key=str.match(/data-stk="[\s\S]*?"/g)[0].replace('data-stk="','').replace('"','');
  var type, suf;
  var response=await fetch('https://www.macromicro.me/charts/data/'+id,{
  method:'GET',
  headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
  });
  var str=await response.text();
  var raw=JSON.parse(str).data['c:'+id]; console.log(raw);

  var cType='';
  var t=raw.info.type; if (t=='1'){cType='line'}else if (t=='2'){cType='bar'}else if (t=='20'){cType='column'};
  var series=[];
  var ybaselines;

  for (let i=0;i<raw.series.length;i++){

  s=raw.info.chart_config.seriesConfigs[i];

  series.push({_i: i, zIndex: zi(s.lineType), type: s.lineType, yAxis: s.yoppo, name: s.name_tc, color: s.color, lineWidth: Number(s.line_width), data: raw.series[i].map((x) => [Date.parse(x[0]),parseFloat(x[1])])});
  }
  if (s.ybaselines!==''){ybaselines=s.ybaselines};
  console.log(series);

  highchart=Highcharts.chart('c2-'+id, {
    type: cType,
    title: {text: raw.info.name_tc},
    subtitle: {text: null},
    yAxis: [{
      title: {text: ""},
      plotLines: [{
        value: ybaselines,
        dashStyle: 'Dash',
        width: 2,
        zIndex: 5,
        color: '#999999'
      }]
    },{
      opposite: true,
      title: {text: ""}
    }
    ],
    xAxis: {
      type:'datetime',
      plotBands: [{"color":"rgba(220,181,150,0.5)","from":-1252368000000,"to":-1170547200000},{"color":"rgba(220,181,150,0.5)","from":-1046755200000,"to":-1009324800000},{"color":"rgba(255,184,55,0.7)","from":-946771200000,"to":-926251200000},{"color":"rgba(220,181,150,0.5)","from":-723168000000,"to":-697171200000},{"color":"rgba(255,184,55,0.7)","from":-40406400000,"to":-36406080000},{"color":"rgba(220,181,150,0.5)","from":-27259200000,"to":-24796800000},{"color":"rgba(220,181,150,0.5)","from":-10886400000,"to":-261273600000},{"color":"rgba(220,181,150,0.5)","from":-5853600000,"to":141600000},{"color":"rgba(220,181,150,0.5)","from":-3780000000,"to":1220400000},{"color":"rgba(255,184,55,0.7)","from":320812800000,"to":322780800000},{"color":"rgba(220,181,150,0.5)","from":343958400000,"to":398304000000},{"color":"rgba(220,181,150,0.5)","from":556473600000,"to":566064000000},{"color":"rgba(255,184,55,0.7)","from":648000000000,"to":657417600000},{"color":"rgba(255,184,55,0.7)","from":875808000000,"to":880560000000},{"color":"rgba(255,184,55,0.7)","from":900864000000,"to":904608000000},{"color":"rgba(220,181,150,0.5)","from":953136000000,"to":1034121600000},{"color":"rgba(220,181,150,0.5)","from":1191888000000,"to":1236556800000},{"color":"rgba(255,184,55,0.7)","from":1272230400000,"to":1278028800000},{"color":"rgba(255,184,55,0.7)","from":1311283200000,"to":1312934400000},{"color":"rgba(255,184,55,0.7)","from":1432166400000,"to":1455148800000},{"color":"rgba(255,184,55,0.7)","from":1537488000000,"to":1545609600000},{"color":"rgba(220,181,150,0.5)","from":1582070400000,"to":1584921600000},{"color":"rgba(220,181,150,0.5)","from":1641168000000,"to":1665532800000},{"color":"rgba(231,231,231,0.5)","from":-2124921600000,"to":-2061849600000},{"color":"rgba(231,231,231,0.5)","from":-1977782400000,"to":-1940976000000},{"color":"rgba(231,231,231,0.5)","from":-1893456000000,"to":-1827792000000},{"color":"rgba(231,231,231,0.5)","from":-1798761600000,"to":-1735776000000},{"color":"rgba(231,231,231,0.5)","from":-1622678400000,"to":-1601769600000},{"color":"rgba(231,231,231,0.5)","from":-1577923200000,"to":-1528070400000},{"color":"rgba(231,231,231,0.5)","from":-1472860800000,"to":-1433376000000},{"color":"rgba(231,231,231,0.5)","from":-1364947200000,"to":-1328227200000},{"color":"rgba(231,231,231,0.5)","from":-1275523200000,"to":-1159920000000},{"color":"rgba(231,231,231,0.5)","from":-1031011200000,"to":-994291200000},{"color":"rgba(231,231,231,0.5)","from":-786240000000,"to":-762739200000},{"color":"rgba(231,231,231,0.5)","from":-667958400000,"to":-636508800000},{"color":"rgba(231,231,231,0.5)","from":-520819200000,"to":-494640000000},{"color":"rgba(231,231,231,0.5)","from":-391910400000,"to":-368409600000},{"color":"rgba(231,231,231,0.5)","from":-307756800000,"to":-278985600000},{"color":"rgba(231,231,231,0.5)","from":-2678400000,"to":28771200000},{"color":"rgba(231,231,231,0.5)","from":120960000000,"to":165456000000},{"color":"rgba(231,231,231,0.5)","from":315532800000,"to":333849600000},{"color":"rgba(231,231,231,0.5)","from":362793600000,"to":407462400000},{"color":"rgba(231,231,231,0.5)","from":646790400000,"to":670377600000},{"color":"rgba(231,231,231,0.5)","from":983404800000,"to":1007078400000},{"color":"rgba(231,231,231,0.5)","from":1196467200000,"to":1246320000000},{"color":"rgba(231,231,231,0.5)","from":1580515200000,"to":1588291200000}]    },
    series: series
    });
	
}
	
})();





///////////////////////////
// OLD VERSION
///////////////////////////



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
