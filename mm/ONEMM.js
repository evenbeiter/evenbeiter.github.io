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
  <div class="container-fluid">
  <div class="row me-2" style="display:flex;flex-wrap:nowrap;height:calc(100vh)">
      <div id="data-area" class="col-10 my-1 overflow-auto"></div>
      <div id="side" class="col-2 my-1 pe-1 overflow-auto"></div>
  </div>
  </div>
  <script>document.close()</script>
  `;

  let data=[
    {"cat":"Money Pool","item":"全球央行升息&降息比例","src":"mm","code":"50290","url":"https://www.macromicro.me/collections/6005/global-central-bank/50290/net-pct-of-cbs-last-move-was-a-rate-cut","bbg":""},
    {"cat":"Money Pool","item":"成熟國家基準利率","src":"mm","code":"50813","url":"https://www.macromicro.me/collections/6005/global-central-bank/50813/global-developed-countries-interest-rates","bbg":""},
    {"cat":"Money Pool","item":"全球主要央行資產負債表規模總和","src":"mm","code":"56161","url":"https://www.macromicro.me/collections/6005/global-central-bank/56161/major-cbs-total-assets","bbg":""},
    {"cat":"Money Supply","item":"Money Market Fund (Weekly)","src":"ydn","code":"56a69f62-f983-4a75-9d26-b48ef2d29a3a","url":"https://yardeni.com/charts/money-market-mutual-funds-weekly/","bbg":""},
    {"cat":"Money Supply","item":"Money Supply M0 & M1","src":"te","code":"s=unitedstamonsupm0&s2=unitedstamonsupm1","url":"https://tradingeconomics.com/united-states/money-supply-m0","bbg":""},
    {"cat":"Money Supply","item":"Money Supply M1 & M2","src":"te","code":"s=unitedstamonsupm1&s2=unitedstamonsupm2","url":"https://tradingeconomics.com/united-states/money-supply-m1","bbg":""},
    {"cat":"Money Supply","item":"四大央行M2貨幣供給量","src":"mm","code":"3439","url":"https://www.macromicro.me/collections/6005/global-central-bank/3439/major-bank-m2-comparsion","bbg":""},
    {"cat":"Money Supply","item":"Deposit in M2","src":"ydn","code":"b8191890-3f75-4bd9-a056-15d6c1330de1","url":"https://yardeni.com/charts/monetary-aggregates-monthly/","bbg":""},
    {"cat":"Interest Rates","item":"3M T-Bill","src":"fred","code":"1toIH","url":"https://fred.stlouisfed.org/series/TB3MS","bbg":""},
    {"cat":"Commodity","item":"Raw Industrials & Metals","src":"ydn","code":"a8d7fffb-08e5-438b-a923-f78482b6fbd3","url":"https://yardeni.com/charts/crb-commodity-index-correlations/","bbg":""},
    {"cat":"Commodity","item":"Raw Industrials & Copper Nearby Futures","src":"ydn","code":"ce829cdc-07e9-4c39-837f-ea1e43746ef8","url":"https://yardeni.com/charts/crb-commodity-index-correlations/","bbg":""},
    {"cat":"Commodity","item":"Raw Industrials vs USD","src":"ydn","code":"55416c54-cd59-4e29-b01c-d469ad8b5142","url":"https://yardeni.com/charts/crb-commodity-index-correlations/","bbg":""},
    {"cat":"Inflation","item":"US CPI","src":"te","code":"s=cpi+yoy","url":"","bbg":""},
    {"cat":"Inflation","item":"US Core CPI","src":"te","code":"s=usacorecpirate","url":"","bbg":""},
    {"cat":"Inflation","item":"US CPI & Core CPI","src":"te","code":"s=cpi+yoy&s2=usacorecpirate","url":"","bbg":""},
    {"cat":"Inflation","item":"US Core PCE Price Index Annual Change","src":"te","code":"s=usacppiac","url":"","bbg":""},
    {"cat":"Inflation","item":"CPI By Category","src":"url","code":"","url":"https://www.bls.gov/charts/consumer-price-index/consumer-price-index-by-category.htm","bbg":""},
    {"cat":"Inflation","item":"Raw Industrial vs 10Y Expected Inflation","src":"ydn","code":"071e4501-b2a9-4167-a763-3b5905f9c154","url":"https://yardeni.com/charts/crb-commodity-index-correlations/","bbg":""},
    {"cat":"Valuation","item":"SPX PE Ratio","src":"bbg","code":"","url":"","bbg":"SPX Index GE"},
    {"cat":"Valuation","item":"Yield Comparison","src":"bbg","code":"","url":"","bbg":"G239"},
    {"cat":"Yield Curve","item":"UST10Y - 3M","src":"fred","code":"1toNs","url":"","bbg":""},
    {"cat":"Yield Curve","item":"UST10Y - 2Y","src":"fred","code":"1toNz","url":"","bbg":""},
    {"cat":"Yield Curve","item":"UST10Y - 2Y (Chart)","src":"sc","code":"$UST10Y-$UST2Y","url":"","bbg":""},
    {"cat":"PMI","item":"Raw Industrials & Manufacturing PMI","src":"ydn","code":"82937122-097d-4bb4-ad18-8f5560a4f137","url":"https://yardeni.com/charts/crb-commodity-index-correlations/","bbg":""},
    {"cat":"Overview","item":"Daily Markets Overview","src":"ydn","code":"dailyoverview.pdf#page=3","url":"","bbg":""},
    {"cat":"Overview","item":"DXY Index","src":"sc","code":"$USD|DXY","url":"","bbg":""},
    {"cat":"Overview","item":"UST 10 Year","src":"sc","code":"$UST10Y","url":"","bbg":""},
    {"cat":"Sentiment","item":"Fear & Greed Index","src":"url","code":"","url":"https://edition.cnn.com/markets/fear-and-greed","bbg":""},
    {"cat":"Sentiment","item":"DXY Index","src":"sc","code":"$USD|DXY","url":"","bbg":""},
    {"cat":"Sentiment","item":"VIX Index","src":"sc","code":"$VIX|VIX","url":"","bbg":""},
    {"cat":"Sentiment","item":"MOVE Index","src":"sc","code":"$MOVE","url":"","bbg":""},
    {"cat":"Sentiment","item":"Margin Debt","src":"ydn","code":"7cf88082-02ff-4047-93cb-ea6f890ec45d","url":"https://yardeni.com/charts/margin-debt/","bbg":""},
    {"cat":"Sentiment","item":"CNN 恐懼與貪婪指數","src":"mm","code":"50108","url":"https://www.google.com/search?q=50108+site:www.macromicro.me","bbg":""},
    {"cat":"Sentiment","item":"NAAIM Exposure Index 經理人持倉指數","src":"mm","code":"46198","url":"https://www.google.com/search?q=46198+site:www.macromicro.me","bbg":""},
    {"cat":"Sentiment","item":"NAAIM Exposure Index","src":"url","code":"","url":"https://www.naaim.org/programs/naaim-exposure-index/","bbg":""},
    {"cat":"Sentiment","item":"AAII Sentiment Survey 散戶投資人情緒指數","src":"mm","code":"20828","url":"https://www.google.com/search?q=20828+site:www.macromicro.me","bbg":""},
    {"cat":"Sentiment","item":"AAII Asset Allocation Survey 散戶投資人資產配置調查","src":"mm","code":"23218","url":"https://www.google.com/search?q=23218+site:www.macromicro.me","bbg":""},
    {"cat":"Sentiment","item":"CBOE選擇權Put/Call未平倉比率","src":"mm","code":"449","url":"https://www.google.com/search?q=449+site:www.macromicro.me","bbg":""},
    {"cat":"Sentiment","item":"200MA Breadth 全球股市 >200日均線比例","src":"mm","code":"50191","url":"https://www.google.com/search?q=50191+site:www.macromicro.me","bbg":""},
    {"cat":"Oil","item":"Brent Oil","src":"sc","code":"$BRENT|UK%3ABRENT%20CRUDE","url":"","bbg":""},
    {"cat":"Oil","item":"WTI","src":"sc","code":"$WTIC","url":"","bbg":""},
    {"cat":"GDP","item":"US Real GDP QoQ SAAR","src":"te","code":"s=gdp+cqoq","url":"https://tradingeconomics.com/united-states/gdp-growth","bbg":""},
    {"cat":"GDP","item":"Latest GDPNow","src":"img","code":"https://www.atlantafed.org/-/media/Images/cqer/research/gdpnow/gdpnow-forecast-evolution.gif","url":"https://www.atlantafed.org/cqer/research/gdpnow","bbg":""},
    {"cat":"GDP","item":"亞特蘭大聯儲經濟成長率即時預估","src":"mm","code":"24628","url":"https://www.google.com/search?q=24628+site:www.macromicro.me","bbg":""},
    {"cat":"GDP","item":"Surprise Index","src":"ydn","code":"citigroup.pdf#page=3","url":"","bbg":""},
    {"cat":"GDP","item":"Sahm Rule Recession Indicator","src":"fred","code":"18wJV","url":"","bbg":""},
    {"cat":"Jobs","item":"Labor Force Participation Rate","src":"te","code":"s=unitedstalabforparra","url":"https://tradingeconomics.com/united-states/labor-force-participation-rate","bbg":""},
    {"cat":"Jobs","item":"Non Farm Payrolls","src":"te","code":"s=nfp+tch","url":"https://tradingeconomics.com/united-states/non-farm-payrolls","bbg":""},
    {"cat":"Jobs","item":"Wages Growth","src":"te","code":"s=unitedstawaggro","url":"https://tradingeconomics.com/united-states/wage-growth","bbg":""},
    {"cat":"Jobs","item":"Job Openings","src":"te","code":"s=unitedstajoboff|1trgn","url":"https://tradingeconomics.com/united-states/job-offers","bbg":""},
    {"cat":"Jobs","item":"Unemployment Rate","src":"te","code":"s=usurtot","url":"https://tradingeconomics.com/united-states/unemployment-rate","bbg":""},
    {"cat":"Housing","item":"Case Shiller Home Price Index YoY","src":"te","code":"s=usacshpiy","url":"https://tradingeconomics.com/united-states/case-shiller-home-price-index-yoy","bbg":""},
    {"cat":"Sentiment","item":"Michigan Consumer Sentiment","src":"te","code":"s=concconf","url":"https://tradingeconomics.com/united-states/consumer-confidence","bbg":""},
    {"cat":"Lending","item":"Creidt Availability","src":"ydn","code":"creditavail.pdf#page=3","url":"","bbg":""},
    {"cat":"Lending","item":"Commercial Bank Loans","src":"ydn","code":"commbankloans.pdf#page=8","url":"","bbg":""},
    {"cat":"Lending","item":"Tightening Standards","src":"fred","code":"1tsA9","url":"","bbg":""},
    {"cat":"Lending","item":"嚴重拖欠款項比例","src":"mm","code":"82192","url":"https://www.macromicro.me/collections/9/us-market-relative/82192/us-severe-delinduency-rate","bbg":""},
    {"cat":"Lending","item":"進入嚴重拖欠款項比例","src":"mm","code":"1931","url":"https://www.macromicro.me/collections/9/us-market-relative/1931/us-serious-delinduency","bbg":""},
    {"cat":"China Economy","item":"China GDP Annual Growth Rate","src":"te","code":"s=cngdpyoy","url":"https://tradingeconomics.com/china/gdp-growth-annual","bbg":""},
    {"cat":"China Housing","item":"China Newly Built House Prices YoY Change","src":"te","code":"s=chinahouind","url":"https://tradingeconomics.com/china/housing-index","bbg":""},
    {"cat":"China Housing","item":"China House Price Index MoM","src":"te","code":"s=chnhpim","url":"https://tradingeconomics.com/china/house-price-index-mom","bbg":""},
    {"cat":"BOJ","item":"JPY","src":"sc","code":"$USDJPY|USDJPY","url":"","bbg":""},
    {"cat":"BOJ","item":"BOJ Monetary Policy","src":"ydn","code":"bojmoneycredit.pdf#page=3","url":"","bbg":""},
    {"cat":"JP Inflation","item":"CPI","src":"te","code":"s=jncpiyoy","url":"","bbg":""},
    {"cat":"JP Inflation","item":"CPI Core","src":"te","code":"s=jpncorecpirate","url":"","bbg":""},
    {"cat":"JP Inflation","item":"CPI Core Core","src":"te","code":"s=japancpicorcor","url":"","bbg":""},
    {"cat":"IG","item":"UST 10 Year","src":"sc","code":"$UST10Y","url":"","bbg":""},
    {"cat":"IG","item":"IG vs HY Yield","src":"fred","code":"18rHX","url":"","bbg":""},
    {"cat":"IG","item":"HY - IG Spread","src":"fred","code":"18rUu","url":"","bbg":""},
    {"cat":"IG","item":"BB - BBB Spread","src":"fred","code":"18rHP","url":"","bbg":""},
    {"cat":"USE","item":"Large & SMID Cap","src":"jpm","code":"13","url":"","bbg":""},
    {"cat":"USE","item":"Valuation - 公債殖利率 vs. 實質利率","src":"mm","code":"3361","url":"https://www.macromicro.me/collections/51/us-treasury-bond/3361/real-interest-rate-yield","bbg":""},
    {"cat":"USE","item":"Revenue & Earnings Surprise","src":"ydn","code":"500esm.pdf#page=7","url":"","bbg":""},
    {"cat":"USE","item":"Earnings Forecast","src":"ydn","code":"yriearningsforecast.pdf#page=4","url":"","bbg":""},
    {"cat":"USE","item":"Growth vs Value","src":"ydn","code":"stylegrval.pdf#page=3","url":"","bbg":""},
    {"cat":"EMD vs HYB","item":"EMD vs HYB","src":"sc","code":"HYG:EMD","url":"","bbg":""},
    {"cat":"REIT","item":"REIT Chart","src":"sc","code":"$RMZ|XX:REIT","url":"","bbg":""},
    {"cat":"REIT","item":"US Domestic Returns","src":"pdf","code":"https://www.reit.com/sites/default/files/returns/DomesticReturns.pdf#page=4","url":"","bbg":""},
    ];

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

  for (var i=0;i<data.length;i++){
    var d=data[i];
  
    if (i==0 || d.cat !== data[i-1].cat){
      document.getElementById('side').innerHTML+=`<div class="p-1 mb-1 bg-secondary bg-gradient text-white fw-bold text-uppercase">${d.cat}</div>`;
      document.getElementById('data-area').innerHTML+=`<div class="p-3 mb-1 bg-secondary bg-gradient text-white fw-bold text-uppercase">${d.cat}</div>`;
    };
    if (d.src=='mm'){
      document.getElementById('side').innerHTML+=`<div class="p-1 mb-1 bg-light bg-gradient text-secondary fw-bold"><a href="#${d.cat.replaceAll(' ','_')}-${d.code}">${d.item}</a></div>`;

    var link='';
    if (d.src !=='bbg' && d.url !==''){link=`<a href="${d.url}" target="_blank">Link</a>`}
    else {link=''};

    var bbg='';
    if (d.bbg !==''){bbg=`<a href="bbg://screens/${d.bbg}" target="_blank">BBG</a>`};

    document.getElementById('data-area').innerHTML+=`
    <div id="${d.cat.replaceAll(' ','_')}-${d.code}">
      <div class="p-2 mb-1 bg-light bg-gradient fw-bold">
        ${d.item} 
        <span class="fw-light">${link}</span><span class="fw-light">${bbg}</span>
      </div>
      <div class="row p-2">
        <div id="chart_${d.code}" class="col-9"></div>
        <div id="info_${d.code}" style="height:600px" class="col-3 overflow-auto bg-body-tertiary p-2 fs-7">
        <div id="stats_${d.code}"></div><div id="des_${d.code}"></div>
        </div>
      </div>
      <br><br>
    </div>
    `;
    getCharts('c'+d.code);
    }
  }

  async function getCharts(id){

    var type;
    if (id.slice(0,1)=='s'){type='stats'}else{type='charts'};
    var response=await fetch('https://www.macromicro.me/'+type+'/data/'+id.slice(1),{
    method:'GET',
    headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
    });
    var str=await response.text();
    var raw=JSON.parse(str).data[`${id.slice(0,1)}:${id.slice(1)}`]; console.log(raw);
      
    var cType='';
    var t=raw.info.type; if (t=='1'){cType='line'}else if (t=='2'){cType='bar'}else if (t=='20'){cType='column'};
    var series=[];
    var ybaselines;
  
    for (let i=0;i<raw.series.length;i++){
  
    s=raw.info.chart_config.seriesConfigs[i];
    document.getElementById('stats_'+id.slice(1)).innerHTML=`
    <p>${s.name_tc}<a href="https://www.macromicro.me/series/${s.stats[0].stat_id}"> s${s.stats[0].stat_id}</a></p>
    <p class="fs-8 g">${raw.series[i].slice(-1)[0][0]}</p>
    <p class="fs-7 te">最新：${formatNumber(Number(raw.series[i].slice(-1)[0][1]))}</p>
    <p class="fs-7 te g">前值：${formatNumber(Number(raw.series[i].slice(-2)[0][1]))}</p><hr>
    `;
    document.getElementById('des_'+id.slice(1)).innerText=raw.info.description_tc;
  
    series.push({_i: i, zIndex: zi(s.lineType), type: s.lineType, yAxis: s.yoppo, name: s.name_tc, color: s.color, lineWidth: Number(s.line_width), data: raw.series[i].map((x) => [Date.parse(x[0]),parseFloat(x[1])])});
    }
    if (s.ybaselines!==''){ybaselines=s.ybaselines};
    console.log(series);
  
    highchart=Highcharts.chart("chart_"+id.slice(1), {
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
