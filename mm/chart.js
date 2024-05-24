javascript:(async()=>{

	document.body.innerHTML='';
	
	var el = document.createElement('div');
	document.body.appendChild(el);
	
	el.innerHTML=`
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	
  <div>
    <div style="display:grid">
	  <div class="input-group input-group-sm m-2">
		<button class="btn btn-secondary" type="button" onclick="getToken()">
		  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-incognito" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205l-.014-.058-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5s-1.411-.136-2.025-.267c-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a30 30 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5q.001-.264.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085q.084.236.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5"/>
		  </svg>
		</button>
    <input id="token" type="text" value="" class="form-control">
    <button class="btn btn-secondary" type="button" onclick="getCollections()">Collections</button>
	  </div>
    <div id="collection_list" style="display:none"></div>
    <div id="collection_charts" style="display:none"><table><tbody id="collection_charts_list"></tbody></table></div>
    </div>

	  <div class="input-group input-group-sm m-2">
		<span class="input-group-text">Chart ID</span>
		<input id="chart_id" type="text" value="" class="form-control">
		<span class="input-group-text">Stat ID</span>
		<input id="stat_id" type="text" value="" class="form-control">
		<button class="btn btn-secondary" type="button" onclick="getMMChart()">
		  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-incognito" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205l-.014-.058-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5s-1.411-.136-2.025-.267c-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a30 30 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5q.001-.264.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085q.084.236.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5"/>
		  </svg>
		</button>
	  </div>

    <div id="stat_list" class="m-2">
    <div style="display:grid">
      <div class="input-group input-group-sm">
        <input id="ticker_1" type="text" value="" class="form-control" list="datalist_1" onkeyup="ac(this.value, this)">
        <datalist id="datalist_1"></datalist>
        <button id="btn_1" type="button" class="btn btn-outline-secondary" onclick="showOption(this.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
        <button id="add_1" type="button" class="btn btn-outline-secondary" onclick="addSeries(this.id)">+</button>
        <button id="delete_1" type="button" class="btn btn-outline-secondary" onclick="deleteSeries(this.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
      </div>
      <div id="option_1" style="display:none"></div>
    </div>

	  </div>
  
	  <div class="m-2">
		<div id="title" class="p-2 fw-bold"></div>
		<div id="container" class="m-2"></div>
		<div id="des" class="p-2"></div>
	  </div>
	
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"><\/script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"><\/script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"><\/script>
	`;
	
	getToken();
	
	async function getToken(){
	  var res=await fetch('https://www.macromicro.me/trader-insights');
	  var str=await res.text();
	  str=str.match(/data-stk="[\s\S]*?"/g)[0].replace('data-stk="','').replace('"','');
	  document.getElementById('token').value=str;
  }
  
  async function getCollections(){
    if (document.getElementById('collection_list').style.display=='none'){
      var res=await fetch('https://evenbeiter.github.io/mm/collections.json');
      var raw=await res.json();
      var countryName=['美國','中國','歐洲','日本','亞洲','台灣','新興市場'];
      var el=document.getElementById('collection_list');
      el.innerHTML='';
      countryName.forEach((c)=>{
        el.innerHTML+='<button type="button" class="btn btn-secondary btn-sm mx-2" onclick="getCollectionCharts(this.innerText)">'+c+'</button>';
      })
      document.getElementById('collection_list').style.display='block';
    } else {
      document.getElementById('collection_list').style.display='none';
    }
  }
  
  async function getCollectionCharts(c){
    if (document.getElementById('collection_charts').style.display=='none'){
      var res=await fetch('https://evenbeiter.github.io/mm/collections.json');
      var raw=await res.json();
      var cols=raw.filter((r) => r.country==c);
      cols.forEach((col)=>{
        var chartList=col.charts;
        chartList.forEach((chart)=>{
          var tr=document.createElement('tr');
          tr.innerHTML='<tr><td><a href="#" onclick="getMMCollectionChart('+chart[0]+');return false;\">'+chart[1]+'</a></td></tr>';
          document.getElementById('collection_charts_list').appendChild(tr);
        })
      })
      document.getElementById('collection_charts').style.display='block';
    } else {
    document.getElementById('collection_charts').style.display='none';
    }
  }

  function getMMCollectionChart(id){
    document.getElementById('collection_charts_list').style.display='none';
    document.getElementById('chart_id').value=id;
    getMMChart('chart_id');
  }

	var idGetChart=document.querySelectorAll('[id*="_id"]');
	for (let i=0;i<idGetChart.length;i++){
	  idGetChart[i].addEventListener('keydown', onKeyDown);
	  function onKeyDown(e) {
		if(e.key == 'Enter'){
      if (this.id.slice(0,1)=='c'){document.getElementById('stat_id').value=''} else {document.getElementById('chart_id').value=''}
      getMMChart(this.id);
    };
	  }
  }
  
  function showOption(btnid){
    if(document.getElementById('option_'+btnid.slice(-1)).style.display=='none'){
      var options=document.querySelectorAll('[id^=option]');
      options.forEach((opt)=>opt.style.display='none');
      document.getElementById('option_'+btnid.slice(-1)).style.display='block';
    } else {
      document.getElementById('option_'+btnid.slice(-1)).style.display='none';
    }
  }

  function addSeries(btnid){
    if (typeof(btnid)=='string'){var i=Number(btnid.slice(btnid.indexOf('_')+1))+1}else{var i=btnid};
    var div=document.createElement('div');
    div.innerHTML=`<div style="display:grid">
    <div class="input-group input-group-sm">
      <input id="ticker_`+i+`" type="text" value="" class="form-control" list="datalist_`+i+`" onkeyup="ac(this.value, this)">
      <datalist id="datalist_`+i+`"></datalist>
      <button id="btn_`+i+`" type="button" class="btn btn-outline-secondary" onclick="showOption(this.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
      <button id="add_`+i+`" type="button" class="btn btn-outline-secondary" onclick="addSeries(this.id)">+</button>
      <button id="delete`+i+`" type="button" class="btn btn-outline-secondary" onclick="deleteSeries(this.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg>
      </button>
      </div>
    <div id="option_`+i+`" style="display:none"></div>
    </div>`;
    document.getElementById('stat_list').appendChild(div);
    optionPanel();
  }

  function deleteSeries(btnid){
    document.getElementById(btnid).parentElement.parentElement.remove();
  }

  
  function optionPanel(){
    var option = document.querySelectorAll('[id^=option]');
    for (let n=0;n<option.length;n++){
      if (option[n].innerHTML.indexOf('background')==-1){
      option[n].innerHTML='<div>';
      for (let i=0;i<all_colors.length;i++){
        option[n].innerHTML+='<button type="button" id="c'+(n+1)+'c'+i+'" class="btn" style="background-color:'+all_colors[i]+'" onclick="changeColor(this.id)"></button>';
      }
      option[n].innerHTML+='</div>';
      }
    }
  }

	var tags=await getList();

	async function getList(){
	  let res=await fetch('https://evenbeiter.github.io/mm/stats.json');
	  let list=await res.json();
	  return list
	}
		
	function ac(value, element){
	  var id=element.nextSibling.nextSibling.getAttribute('id');
	  document.getElementById(id).innerHTML = '';
	  l = value.length;
	  for (let i = 0; i < tags.length; i++) {
		var node = document.createElement('option');
		if (/[a-zA-Z]/.test(value)){
		  if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
			var val = document.createTextNode(tags[i])
		  }
		} else {
		  if (tags[i].indexOf(value) > -1) {
			var val = document.createTextNode(tags[i])
		  }
		}
		if (val !== null && val !== undefined) {
		  node.appendChild(val);
		  document.getElementById(id).appendChild(node);
		}
	  }
	}
	
	var kd=document.querySelectorAll('[id^=ticker]');
	for (let i=0;i<kd.length;i++){
	  kd[i].addEventListener('keydown', onKeyDown);
	  function onKeyDown(e) {
		if(e.key == 'Enter'){chart()};
	  }
	}

	// const colors=['rgba(110,141,176,1)','rgba(173,174,176,1)','rgba(55,81,114,1)','rgba(95,130,137,1)','rgba(110,178,189,1)','rgba(220,181,150,1)'];
	// const strong_colors=['rgba(192,109,89,1)','rgba(70,70,70,1)'];
	var all_colors=[ "#6E8DB0" , "#ADAEB0" , "#375172" , "#5f8289" , "#6eb2bd" , "#dcb596" , "#c06d59" , "#67707A" , "#4CB4E7" , "#A6A97B" , "#f1e1d5" , "#9db6bb" , "#ffb837" , "#dd3d41" , "#1a8a4d" , "#464646"];
	// all_colors.push(...colors);
	// all_colors.push(...strong_colors);
  
  function zi(lineType){
    if (lineType=='column'){return 2} else {return 10};
  }

  function changeColor(id){
    var n=Number(id.slice(1,2));
    var c=Number(id.slice(3));
    highchart.series[n-1].update({color:all_colors[c]});
    console.log(highchart.series[0].name);
  }



  var highchart;

	async function getMMChart(field_id){

    var toClear=document.querySelectorAll('[id^=ticker]');
    for (let i=0;i<toClear.length;i++){
      toClear[i].value='';
      if (i>0){toClear[i].parentElement.parentElement.remove()}
    }

	  var chart_id=document.getElementById(field_id).value;
	  var key=document.getElementById('token').value;
	  var response=await fetch('https://www.macromicro.me/'+field_id.slice(0,field_id.indexOf('_'))+'s/data/'+chart_id,{
		method:'GET',
		headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
	  });
	  var str=await response.text();
	  var raw=JSON.parse(str).data[field_id.slice(0,1)+':'+chart_id]; console.log(raw);
  
	  document.getElementById('title').innerText=raw.info.name_tc;
	  document.getElementById('des').innerText=raw.info.description_tc;

    var series=[];
    var ybaselines;

	  for (let i=0;i<raw.series.length;i++){
      if (i>0){addSeries(i+1)}

		s=raw.info.chart_config.seriesConfigs[i];
    document.getElementById('ticker_'+(i+1)).value='s'+s.stats[0].stat_id+' '+s.name_tc+' '+s.name_en;
		series.push({_i: i, zIndex: zi(s.lineType), type: s.lineType, yAxis: s.yoppo, name: s.name_tc, color: all_colors[i], lineWidth: Number(s.line_width), data: raw.series[i].map((x) => [Date.parse(x[0]),parseFloat(x[1])])});
    }
    if (s.ybaselines!==''){ybaselines=s.ybaselines};
	  console.log(series);

    optionPanel();

    highchart=Highcharts.setOptions({
      credits: {
        enabled: !1
      },
      langOptions: {
        numericSymbols: ["K", "M", "B", "T", "P", "E"],
        thousandsSep: ","
      },
      tooltipOptions: {
        shared: !0
      },
      exporting: {
        button: {
          contextButton: {
            enabled: !1
          }
        }
      },
      navigation: {
        buttonOptions: {
          enabled: !1
        }
      },
      chart: {
        backgroundColor: "transparent",
        zooming: {
          type: "xy",
          mouseWheel: {
            enabled: !1
          }
        }
      },
      legend: {
        enabled: !0
      },
      plotOptions: {
        series: {
          lineWidth: 2,
          marker: {
            enabled: !1
          },
          states: {
            inactive: {
              enabled: !1
            },
            hover: {
              enabled: !1
            }
          }
        }
      },
      rangeSelector: {
        enabled: !0,
        inputEnabled: !0,
        dropdown: "responsive",
        inputPosition: {align:'right'},
        buttons: [{
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
          type: "all",
          text: "All"
        }],
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
          style: {
            fontSize: "11px",
            color: "#666"
          }
        },
        title: {
          style: {
            fontSize: "12px",
            color: "#666"
          }
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
          style: {
            fontSize: "11px",
            color: "#666"
          }
        },
        title: {
          style: {
            fontSize: "12px",
            color: "#666"
          }
        }
      }
    });

	  highchart=Highcharts.chart("container", {
		title: {text: raw.info.name_tc},
    subtitle: {text: null},
    plotOptions: {
      series: {
          animation: false
      }
    },
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
	  })
  
	  let logo_img=document.getElementsByTagName('image');
	  for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};

  }
  
  })();
