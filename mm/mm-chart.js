javascript:(async()=>{

var res=await fetch('https://www.macromicro.me/trader-insights');
var str=await res.text();
var key=str.match(/data-stk="[\s\S]*?"/g)[0].replace('data-stk="','').replace('"','');

document.body.innerHTML='';
var link = document.createElement('link');
document.head.appendChild(link);
link.outerHTML='<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">';
var el = document.createElement('div');
document.body.appendChild(el);
el.outerHTML=`
<style>#nav{position:fixed;top:0;width:100%;height:85px;z-index:1030}p{margin-bottom:0 !important}p a{color:grey;text-decoration:none}#side a{color:#333333;font-weight:normal;text-decoration:none}.fs-7{font-size:0.9rem}.fs-8{font-size:0.7rem;}.g{color:grey;}.te{text-align:right}</style>
<div id="nav" class="bg-white p-2 overflow-auto"></div>
<div class="row mx-2" style="margin-top:85px;display:flex;flex-wrap:nowrap;height:calc(100vh - 85px)">
<div id="side" class="col-3 py-4 px-1 overflow-auto" style="height:100%"></div>
<div id="container" class="col-9 my-2 overflow-auto"></div>
</div>
<script>document.close()</script>
`;

   
  
//document.getElementById('side').style.height=(window.innerHeight-85)+'px';
  
res=await fetch('https://evenbeiter.github.io/mm/collections.json');
var ids=await res.json();
var cats=[];
for (let id of ids){cats.push(id.cat)};
var nav=document.getElementById('nav');
nav.innerHTML='';
for (var i=0;i<cats.length;i++){
  nav.innerHTML+=`<button type="button" id="btn_${i+1}" class="btn btn-outline-secondary btn-sm m-1" onclick="getCollectionCharts(${i})">${cats[i]}</button>`;
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

getCollectionCharts(0);
  
async function getCollectionCharts(i){
  document.getElementById('side').innerHTML='';
  document.getElementById('container').innerHTML='';
for (let id of ids[i].c){
  var div=document.createElement('div');
  document.getElementById('container').appendChild(div);
  div.innerHTML=`
  <div id="title_${id}" class="bg-secondary-subtle fw-bold p-3"></div>
  <div class="row p-2">
  <div id="chart_${id}" class="col-9"></div>
  <div id="info_${id}" style="height:600px" class="col-3 overflow-auto bg-body-tertiary p-2 fs-7"><div id="stats_${id}"></div><div id="des_${id}"></div></div>
  </div>
  `;

  var type, suf;
  if (id.slice(0,1)=='s'){type='stats'}else{type='charts'};
  var response=await fetch('https://www.macromicro.me/'+type+'/data/'+id.slice(1),{
  method:'GET',
  headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
  });
  var str=await response.text();
  var raw=JSON.parse(str).data[`${id.slice(0,1)}:${id.slice(1)}`]; console.log(raw);
  
  document.getElementById('title_'+id).innerHTML=`<p>${raw.info.name_tc} <a href="https://www.macromicro.me/${type}/${id.slice(1)}/${raw.info.slug}" target="_blank">${id}</a></p>`;
  document.getElementById('des_'+id).innerText=raw.info.description_tc;
  
  document.getElementById('side').innerHTML+=`<a href="#title_${id}">${raw.info.name_tc}</a><hr>`;

  var cType='';
  var t=raw.info.type; if (t=='1'){cType='line'}else if (t=='2'){cType='bar'};
  var series=[];
  var ybaselines;

  for (let i=0;i<raw.series.length;i++){

  s=raw.info.chart_config.seriesConfigs[i];
  document.getElementById('stats_'+id).innerHTML+=`
  <p>${s.name_tc}<a href="https://www.macromicro.me/series/${s.stats[0].stat_id}"> s${s.stats[0].stat_id}</a></p>
  <p class="fs-8 g">${raw.series[i].slice(-1)[0][0]}</p>
  <p class="fs-7 te">最新：${formatNumber(Number(raw.series[i].slice(-1)[0][1]))}</p>
  <p class="fs-7 te g">前值：${formatNumber(Number(raw.series[i].slice(-2)[0][1]))}</p><hr>
  `;

  series.push({_i: i, zIndex: zi(s.lineType), type: s.lineType, yAxis: s.yoppo, name: s.name_tc, color: s.color, lineWidth: Number(s.line_width), data: raw.series[i].map((x) => [Date.parse(x[0]),parseFloat(x[1])])});
  }
  if (s.ybaselines!==''){ybaselines=s.ybaselines};
  console.log(series);

  highchart=Highcharts.chart("chart_"+id, {
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
      plotBands: [{"color":"rgba(231,231,231,0.5)","from":-2124921600000,"to":-2061849600000},{"color":"rgba(231,231,231,0.5)","from":-1977782400000,"to":-1940976000000},{"color":"rgba(231,231,231,0.5)","from":-1893456000000,"to":-1827792000000},{"color":"rgba(231,231,231,0.5)","from":-1798761600000,"to":-1735776000000},{"color":"rgba(231,231,231,0.5)","from":-1622678400000,"to":-1601769600000},{"color":"rgba(231,231,231,0.5)","from":-1577923200000,"to":-1528070400000},{"color":"rgba(231,231,231,0.5)","from":-1472860800000,"to":-1433376000000},{"color":"rgba(231,231,231,0.5)","from":-1364947200000,"to":-1328227200000},{"color":"rgba(231,231,231,0.5)","from":-1275523200000,"to":-1159920000000},{"color":"rgba(231,231,231,0.5)","from":-1031011200000,"to":-994291200000},{"color":"rgba(231,231,231,0.5)","from":-786240000000,"to":-762739200000},{"color":"rgba(231,231,231,0.5)","from":-667958400000,"to":-636508800000},{"color":"rgba(231,231,231,0.5)","from":-520819200000,"to":-494640000000},{"color":"rgba(231,231,231,0.5)","from":-391910400000,"to":-368409600000},{"color":"rgba(231,231,231,0.5)","from":-307756800000,"to":-278985600000},{"color":"rgba(231,231,231,0.5)","from":-2678400000,"to":28771200000},{"color":"rgba(231,231,231,0.5)","from":120960000000,"to":165456000000},{"color":"rgba(231,231,231,0.5)","from":315532800000,"to":333849600000},{"color":"rgba(231,231,231,0.5)","from":362793600000,"to":407462400000},{"color":"rgba(231,231,231,0.5)","from":646790400000,"to":670377600000},{"color":"rgba(231,231,231,0.5)","from":983404800000,"to":1007078400000},{"color":"rgba(231,231,231,0.5)","from":1196467200000,"to":1246320000000},{"color":"rgba(231,231,231,0.5)","from":1580515200000,"to":1588291200000}]
    },
    series: series
    });
  
let logo_img=document.querySelectorAll('image');
for (let img of logo_img){img.parentNode.removeChild(img)};
}
}

function zi(lineType){
  if (lineType=='column'){return 2} else {return 10};
}

function formatNumber(number) {
  if (!isFinite(number)) {
      return number.toString();
  }
  let numberString = number.toString();
  let [integerPart, decimalPart] = numberString.split('.');
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (decimalPart) {
    if (decimalPart.length > 3) {
        decimalPart = decimalPart.slice(0, 3);
    }
  }
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

})();
