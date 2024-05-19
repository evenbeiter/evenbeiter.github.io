javascript:(async()=>{


document.body.innerHTML='';

// let old1=document.getElementsByTagName('div');
// for (let i=0;i<old1.length;i++){
//     old1[i].parentNode.removeChild(old1[i]);
// }
// let old2=document.getElementsByTagName('iframe');
// for (let i=0;i<old2.length;i++){
//   old2[i].parentNode.removeChild(old2[i]);
// }

var el = document.createElement('div');
document.body.appendChild(el);

el.innerHTML=`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<div>
  <div class="input-group m-2">
    <button class="btn btn-secondary" type="button" onclick="getToken()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-incognito" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205l-.014-.058-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5s-1.411-.136-2.025-.267c-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a30 30 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5q.001-.264.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085q.084.236.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5"/>
      </svg>
    </button>
    <input id="token" type="text" value="" class="form-control">
  </div>
  <div class="m-2">
    <input id="ticker_1" type="text" value="" class="form-control" list="datalist_1" onkeyup="ac(this.value, this)">
    <datalist id="datalist_1"></datalist>
    <input id="ticker_2" type="text" value="" class="form-control" list="datalist_2" onkeyup="ac(this.value, this)">
    <datalist id="datalist_2"></datalist>
    <input id="ticker_3" type="text" value="" class="form-control" list="datalist_3" onkeyup="ac(this.value, this)">
    <datalist id="datalist_3"></datalist>
    <input id="ticker_4" type="text" value="" class="form-control" list="datalist_4" onkeyup="ac(this.value, this)">
    <datalist id="datalist_4"></datalist>
  </div>
  <div id="container" class="m-2"></div>


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

var tags=await getList();

async function getList(){
  let res=await fetch('https://evenbeiter.github.io/mm/stats.json');
  let list=await res.json();
  return list
}

let n = tags.length;

function ac(value, element){
  var id=element.nextSibling.nextSibling.getAttribute('id');
  document.getElementById(id).innerHTML = '';
  l = value.length;
  for (let i = 0; i < n; i++) {
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


async function chart(){

  const colors=['navy','blue','grey'];
  var ids=[];
  var a=document.querySelectorAll('[id^=ticker]');
  for (let i=0;i<a.length;i++){
    if (a[i].value!==''){ids.push(a[i].value.slice(1,a[i].value.indexOf(' ')))};
  }
  var key=document.getElementById('token').value;console.log(ids.join(','))
  var response=await fetch('https://www.macromicro.me/stats/data/'+ids.join(','),{
    method:'GET',
    headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
  });
  var str=await response.text();
  for (let i=0;i<ids.length;i++){
    var raw=JSON.parse(str).data['s:'+ids[i]];
    var series=raw.series[0];    
    series = series.map((x) => [Date.parse(x[0]),x[1]]);

    var en=raw.info.chart_config.seriesConfigs[0].name_en;
    var tc=raw.info.chart_config.seriesConfigs[0].name_tc;

    Highcharts.chart("container", {
      title: {text: tc},
      subtitle: {text: null},
      yAxis: [{
        title: {
          text: ""
        }
      }],
      xAxis: {type:'datetime'},
      series: [{
        index: 0,
        type: "line",
        name: tc,
        color: colors[0],
        lineWidth: 2,
        data: series
      }]
    })

    let logo_img=document.getElementsByTagName('image');
    for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};
    let logo_text=document.getElementsByClassName('highcharts-subtitle');
    for (let i=0;i<logo_text.length;i++){logo_text[i].parentNode.removeChild(logo_text[i])}

  }
}







function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function makeChart() {
  const chart = Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Fruit Consumption'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
  });

  let logo_img=document.getElementsByTagName('image');
  for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};
  let logo_text=document.getElementsByClassName('highcharts-subtitle');
  for (let i=0;i<logo_text.length;i++){logo_text[i].parentNode.removeChild(logo_text[i])}
};

















$((function() {
	$(".chart-theater-sidebar .stat-eta").each((function(e, t) {
			let a = $(t).data("eta");
			$(t).text(App.__("attr:eta-qtip", {
				"{eta_human}": App._ts2human(a, "j M Y")
			}))
		})), $("#btn--zoom").on("click", (function(e) {
			$(".chart-theater-wrapper").toggleClass("chart-theater-zoomed"), $("#btn--zoom i.fa").toggleClass("fa-expand fa-compress"), $("#btn--zoom .btn-label").text($(".chart-theater-wrapper").hasClass("chart-theater-zoomed") ? App.__("chart:btn:shrink") : App.__("chart:btn:enlarge"))
		})),
		function() {
			if (1 != $(".sidebar-sec-desc .desc-text").length) return;
			$(".sidebar-sec-desc .desc-text")[0].scrollHeight < 180 ? $(".sidebar-sec-desc").addClass("expanded") : $(".sidebar-sec-desc").removeClass("expanded"), $(".chart-theater-sidebar.mm-scrollbar")[0].scrollTop = 0
		}(), setTimeout((function() {
			Highcharts.setOptions({
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
					enabled: !1
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
					inputEnabled: !1,
					dropdown: "responsive",
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
								fill: "#50e3c2",
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
			}), Highcharts.chart("schart", {
				title: {
					text: null
				},
				subtitle: {
					text: null
				},
				yAxis: [{
					title: {
						text: ""
					}
				}],
				series: [{
					index: 0,
					type: "line",
					name: "",
					color: App.conf.color_opts[10],
					lineWidth: 2,
          data: JSON.parse()
				}]
			}), $("#schart").addClass("loaded")
		}), 1e3)}));

})();



///////////////////////////////////
///////////////////////////////////

document.getElementById('search').addEventListener('keydown', onkeydown);
function onKeyDown(event){console.log(event.key)}

function ac(value){
  document.getElementById('datalist').innerHTML = '';
  l = value.length;
  for (let i = 0; i < n; i++) {
    if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
      let node = document.createElement("option");
      let val = document.createTextNode(tags[i]);
      node.appendChild(val);
      document.getElementById("datalist").appendChild(node);
    }
  }
}


var tags=query(document.getElementById('search').value);
let n = tags.length;

function ac(value){
  document.getElementById('datalist').innerHTML = '';
  l = value.length;
  for (let i = 0; i < n; i++) {
    if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
      let node = document.createElement("option");
      let val = document.createTextNode(tags[i]);
      node.appendChild(val);
      document.getElementById("datalist").appendChild(node);
    }
  }
}

async function query(q){
  var url='https://clients1.google.com/complete/search?client=partner-generic&hl=zh-TW&sugexp=csems,nrl=10&gs_rn=34&gs_ri=partner-generic&partnerid=414d6323cec6d419d&types=t&ds=cse&cp=1&gs_id=h&q='+q+'&callback=google.sbox.p50&gs_gbg=FS6Y6v1U';
  var res=await fetch(url);
  var str=await res.text();
  var raw=JSON.parse(str.slice(0,str.length-1).replace('google.sbox.p50 && google.sbox.p50(',''))[1];
  var node = document.createElement("option");
  for (let i=0;i<raw.length;i++){
    list.push(raw[i][0]);
    var val = document.createTextNode(tags[i]);
    node.appendChild(val);
  }
  document.getElementById("datalist").appendChild(node);
}
