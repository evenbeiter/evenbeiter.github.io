javascript:(async()=>{

	document.body.innerHTML='';
	
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
  
	  <div class="input-group m-2">
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

	  <div class="m-2">
		<div class="input-group">
			<input id="ticker_1" type="text" value="" class="form-control" list="datalist_1" onkeyup="ac(this.value, this)">
			<datalist id="datalist_1"></datalist>
			<div class="btn-group">
				<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
				<ul class="dropdown-menu dropdown-menu-end">
					<li><select class="form-select form-select-sm" aria-label=".form-select-sm example">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
						</select></li>
					<li><select class="form-select form-select-sm" aria-label=".form-select-sm example">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
						</select></li>
				</ul>
			</div>
		</div>

		<div class="input-group"><input id="ticker_2" type="text" value="" class="form-control" list="datalist_2" onkeyup="ac(this.value, this)">
		<datalist id="datalist_2"></datalist><select id="color_2" class="form-select"></select></div>
		<div class="input-group"><input id="ticker_3" type="text" value="" class="form-control" list="datalist_3" onkeyup="ac(this.value, this)">
		<datalist id="datalist_3"></datalist><select id="color_3" class="form-select"></select></div>
		<div class="input-group"><input id="ticker_4" type="text" value="" class="form-control" list="datalist_4" onkeyup="ac(this.value, this)">
		<datalist id="datalist_4"></datalist><select id="color_4" class="form-select"></select></div>
	  </div>
  
	  <div class="m-2">
		<div id="title" class="p-2 fw-bold"></div>
		<div id="des" class="p-2"></div>
		<div id="container" class="m-2"></div>
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
	
	var idGetChart=document.querySelectorAll('[id*="_id"]');
	for (let i=0;i<idGetChart.length;i++){
	  idGetChart[i].addEventListener('keydown', onKeyDown);
	  function onKeyDown(e) {
		if(e.key == 'Enter'){console.log(e.key);getMMChart()};
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

	const colors=['rgba(110,141,176,1)','rgba(173,174,176,1)','rgba(55,81,114,1)','rgba(95,130,137,1)','rgba(110,178,189,1)','rgba(220,181,150,1)'];
	const strong_colors=['rgba(192,109,89,1)'];
	var all_colors=[];
	all_colors.push(...colors);
	all_colors.push(...strong_colors);
  
	var color_select = document.querySelectorAll('[id^=color]');
	for (let i=0;i<all_colors.length;i++){
		select.options[select.options.length] = new Option(all_colors[i], '0')
	}
  
	for (let i = 0; i < all_colors.length; i++) {
	  var node = document.createElement('option');
	  var val = document.createTextNode(all_colors[i]);
	  node.appendChild(val);
	  node.style.backgroundColor=all_colors[i];
	  document.getElementById('color_'+i).appendChild(node);
	}
  
	async function getMMChart(){
	  var chart_id=document.getElementById('chart_id').value;
	  var key=document.getElementById('token').value;
	  var response=await fetch('https://www.macromicro.me/charts/data/'+chart_id,{
		method:'GET',
		headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
	  });
	  var str=await response.text();
	  var raw=JSON.parse(str).data['c:'+chart_id]; console.log(raw);
  
	  document.getElementById('title').innerText=raw.info.name_tc;
	  document.getElementById('des').innerText=raw.info.description_tc;
  
	  var series=[];
	  for (let i=0;i<raw.series.length;i++){
		s=raw.info.chart_config.seriesConfigs[i];
		document.getElementById('ticker_'+(i+1)).value='s'+s.stats[0].stat_id+' '+s.name_tc+' '+s.name_en;
		series.push({index: s.yoppo, type: s.lineType, name: s.name_tc, color: colors[i], lineWidth: Number(s.line_width), data: raw.series[i].map((x) => [Date.parse(x[0]),parseFloat(x[1])])});
	  }
	  console.log(series);
  
	  Highcharts.chart("container", {
		title: {text: raw.info.name_tc},
		subtitle: {text: null},
		yAxis: [{
		  title: {
			text: ""
		  }
		}],
		xAxis: {type:'datetime'},
		series: series
	  })
  
	  let logo_img=document.getElementsByTagName('image');
	  for (let i=0;i<logo_img.length;i++){logo_img[i].parentNode.removeChild(logo_img[i])};
	  let logo_text=document.getElementsByClassName('highcharts-subtitle');
	  for (let i=0;i<logo_text.length;i++){logo_text[i].parentNode.removeChild(logo_text[i])}
  
	}
  
  })();
