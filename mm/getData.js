javascript:(async()=>{

	  var res=await fetch('https://www.macromicro.me/trader-insights');
	  var str=await res.text();
	  var key=str.match(/data-stk="[\s\S]*?"/g)[0].replace('data-stk="','').replace('"','');

	  var id=prompt('Enter Chart or Stat ID:');

  if (id.slice(0,1)=='c'){
	  var response=await fetch('https://www.macromicro.me/charts/data/'+id,{
		method:'GET',
		headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
	  });
	  var str=await response.text();
	  var raw=JSON.parse(str).data['c:'+id.slice(1)]; console.log(raw);
  
	  document.getElementById('title').innerText=raw.info.name_tc;
	  document.getElementById('des').innerText=raw.info.description_tc;
  
	  var series=[];
	  for (let i=0;i<raw.series.length;i++){
		s=raw.info.chart_config.seriesConfigs[i];
		document.getElementById('ticker_'+(i+1)).value='s'+s.stats[0].stat_id+' '+s.name_tc+' '+s.name_en;
		series.push({index: s.yoppo, type: s.lineType, name: s.name_tc, color: colors[i], lineWidth: Number(s.line_width), data: raw.series[i].map((x) => [Date.parse(x[0]),parseFloat(x[1])])});
	  }
	  console.log(series);
  
	}
  
  })();
