javascript:(async()=>{

var el = document.createElement('div');
document.body.appendChild(el);

el.innerHTML=`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<style>
.black_overlay {
  display: none;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1001;
  -moz-opacity: 0.6;
  opacity: .60;
  filter: alpha(opacity=66);
}
.white_content {
  display: none;
  position: absolute;
  top: 8%;
  left: 5%;
  width: 1400px;
  height: 680px;
  padding: 3px;
  border: 1px solid gray;
  background-color: white;
  z-index: 1002;
  overflow: auto;
}
</style>

<div id="light" class="white_content">
  <p style='text-align: right'><a href="javascript:void(0)" onclick="closeChart()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
  </a></p>

  <div class="input-group px-2 py-3">
    <input id="search" type="text" value="" class="form-control" list="datalist" onkeyup="ac(this.value)">
    <datalist id="datalist"></datalist>
    <button class="btn btn-secondary" type="button" onclick="chart()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </button>
  </div>

  <div id="myplot"></div>
  <script src="https://cdn.jsdelivr.net/npm/d3@7"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6"><\/script>

</div>
<div id="fade" class="black_overlay"></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"><\/script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"><\/script>
`;

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

document.getElementById('light').style.display = 'block';
document.getElementById('fade').style.display = 'block';

function closeChart() {
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
}

var tags=await getList();

async function getList(){
  let res=await fetch('https://evenbeiter.github.io/mm/stats.json');
  let list=await res.json();
  return list
}

let n = tags.length;

function ac(value){
  document.getElementById('datalist').innerHTML = '';
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
      document.getElementById('datalist').appendChild(node);
    }
  }
}

async function chart(){
  var q=document.getElementById('search').value;
  var stat_id=q.slice(1,q.indexOf(' '));
  var key='512b529afa97c74eb7856e764e321cd9'
  var response=await fetch('https://www.macromicro.me/stats/data/'+stat_id,{
    method:'GET',
    headers:{'Content-type':'application/json','Authorization':'Bearer '+key}
  });
  var data=await response.text();
  try {
    var raw=JSON.parse(data).data['s:'+stat_id];
    var series=raw.series[0];
    console.log(series);
    var en=raw.info.chart_config.seriesConfigs[0].name_en;
    var tc=raw.info.chart_config.seriesConfigs[0].name_tc;
  } catch (error) {
    console.log('error')
  }
}


const plot = Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot();
const div = document.querySelector("#myplot");
div.append(plot);

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
