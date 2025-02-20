var scriptTag=document.createElement('script');
document.body.appendChild(scriptTag);

scriptTag.innerHTML=`

function openOptions(){
  var options=document.getElementById('btn-group');
    if (options.style.display=='none'){
    options.style.display='block';
  }else{options.style.display='none'}
}

var rt='';
var rr=0;

async function get1stList(t){
rr=0;
getList(t);
}

async function getList(t){
var items = [];
rr++;
rt=t;
alert(rr);
if (rr==1){
  document.getElementById('btn-group').style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById('list').innerHTML='';
}
var url='https://www.ishares.com/us/'+t;alert(url);
let res=await fetch(url);
let str=await res.text();
var parser = new DOMParser();
var doc = parser.parseFromString(str, "text/html");
var hh=doc.querySelectorAll('.ds-from-dal-article');
for (let h of hh){
  items.push([h.href,h.title]);
}
var html='';
for (let h of items){
  html+=\`<p class="title" onclick="getContent(this.id,'\${h[0]}')">\${h[1]}</p><div id="\${h[0]}" class="content" onclick="getContent(this.id,'\${h[0]}')"></div><hr>\`
}
document.getElementById('list').innerHTML+=html;
}

async function getContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    cEl.style.display='block';
    const res = await fetch('https://www.ctee.com.tw'+id);
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    const t=doc.querySelector('.news-credit');
    const a = doc.querySelector('article');

    if (a) {
      var nuxtDataItem = '<p class="fs10">'+t.innerText+'</p>'+a.outerHTML + '<p class="text-end"><a href="https://www.ctee.com.tw' + id + '" target="_blank">分享</a></p><br>';
      cEl.innerHTML=nuxtDataItem;
      var ads=cEl.querySelectorAll('.ad');
      for (let ad of ads){ad.remove()};
      cEl.style.display='block';
    }
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){cEl.style.display='none';
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}

async function get1stSearchResults(){
rr=0;
getSearchResults();
document.getElementById('search-term').value='';
}

var t='';

async function getSearchResults(){
  rt='s';
  rr++;
  var items=[];
  if (rr==1){
  document.getElementById('btn-group').style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById('list').innerHTML='';
  t=document.getElementById('search-term').value;
}
  var html = '';
  var url='';

  url='https://www.ctee.com.tw/api/search/'+t+'?p='+rr;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.articleUrl,h.title])
  }
  var html='';
  for (let h of items){
    html+=\`<p class="title" onclick="getContent(this.id,'\${h[0]}')">\${h[1]}</p><div id="\${h[0]}" class="content" onclick="getContent(this.id,'\${h[0]}')"></div><hr>\`
  }
    document.getElementById('list').innerHTML+=html;
}

let scrollTimeout;
window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 5) {
      if(rt!=='s'){getList(rt)}else{getSearchResults()}
    }
  }, 1000);
};
`;
  
scriptTag=document.createElement('script');
scriptTag.src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js';
scriptTag.integrity='sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy';
scriptTag.crossOrigin='anonymous';
document.body.appendChild(scriptTag);

var tabs=[['insights','Insights'],['category/finance/','要聞'],['category/stock/','證券'],['category/finance/','金融'],['category/wealth/','理財'],['category/industry/','產業'],['category/house/','房市'],['category/world/','國際'],['category/view/','觀點'],['category/bookstore/','書房'],['category/lohas/','樂活']];
var btn='';
if (tabs.length>0){
  for (let tab of tabs){
    btn+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${tab[0]}')">${tab[1]}</button>`;
  }
}
document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>iShares</title>
          <style>
          body {background-color:#F4ECD8;color:#3B2D20;font-size:1.3rem}
          .content{display:none;cursor:pointer}
          .sepia{background-color:#F4ECD8;color:#3B2D20}
          .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
          h1,h2,h3,h4,h5,h6,.title{font-size:1.3rem;color:#3B2D20 !important;font-weight:bold}
          a{word-wrap:break-word;white-space:normal;overflow-wrap:break-word;word-break:break-word}
          h1 a {color: navy; font-weight: bold; text-decoration:none;cursor:pointer}
          .fs10, figcaption{font-size:1rem}
          img{display:block !important;margin:auto;width:100%;height:auto}
          @media (min-width:768px){
            @font-face{font-family:"Microsoft JhengHei Bold" !important;src:local("Microsoft JhengHei Bold") !important;font-weight:bold !important;unicode-range:U+4E00-9FFF !important}
            body {background-color:#F4ECD8;color:#3B2D20;font-size:1.2rem;font-family:arial,'Microsoft JhengHei Bold', sans-serif !important}
            #list{font-weight:bold}
            h1,h2,h3,h4,h5,h6,.title{font-size:1.2rem;color:#3B2D20 !important;font-weight:bold}
          }
      </style>
</head>
<body>
<div style="max-width:600px;margin:auto">
<button type="button" class="sticky-top m-2 btn btn-light position-fixed top-0 end-0 sepia-contrast opacity-25" style="z-index:1030" onclick="openOptions()">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
  </svg>
</button>
  <form id="btn-group" class="py-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="max-height:100vh;display:none">
    <div>`+btn+`</div>
    <div class="input-group mb-3">
      <input type="text" id="search-term" class="form-control">
      <button class="btn sepia" type="button" id="search-btn" onclick="get1stSearchResults()">Search</button>
    </div>
  </form>
<div id="list" class="mx-3 pt-3">
</div>
</div></body></html>
`;

getList('insights');
