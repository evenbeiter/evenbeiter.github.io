javascript:(async()=>{

var scriptTag=document.createElement('script');
document.body.appendChild(scriptTag);

scriptTag.innerHTML=`

function openOptions(){
  var options=document.getElementById('btn-group');
    if (options.style.display=='none'){
    options.style.display='block';
  }else{options.style.display='none'}
}

async function getList(tt){
document.getElementById('btn-group').style.display='none';
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
var items = [];
var url='';
for (let t of tt) {
  if (/[0-9]/.test(t)){
    url='https://today.line.me/webapi/trending/cp/latest/listings/module:cp:'+t+':5f4dd7e908b2af5b0e13bba1:0?offset=0&length=50&country=tw&targetContent=ALL&cps='+t+':200';
    let res=await fetch(url);
    let str=await res.json();
    for (let a of str.items){
      items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title]))
    }
  } else {
    url='https://today.line.me/_next/data/v1/tw/v3/page/'+t+'.json';
    let res=await fetch(url);
    let str=await res.json();
    var data=str.pageProps.fallback['getPageData,'+t].modules;
    data=data.filter(d=>d.source=='LISTING');
    data=data.map(d=>d.listings[0].id);
    
    for (let d of data){
      res=await fetch('https://today.line.me/api/v6/listings/'+d+'?country=tw&offset=0&length=20');
      str=await res.json();
      for (let a of str.items){
          items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title]))
      }
    } 
  }
}
items=[...new Set(items)];
items=items.map(i=>JSON.parse(i));
items=items.filter(i=>i[0]!==null && i[0]!=='');
items.sort((a, b) => {return Number(b[1]) - Number(a[1])});

var html ='';
for (let h of items){
  html+=\`<p class="title" onclick="getContent(this.id,'\${h[0]}')">\${h[2]}</p><div id="\${h[0]}" class="content" onclick="getContent(this.id,'\${h[0]}')"></div><hr>\`
}
document.getElementById('list').innerHTML=html;
}
`
async function playAudio(a){
var res=await fetch('https://learn.dict.naver.com/dictPronunciation.dict?filePaths='+a);
var str=await res.json();
str.url
}
`;
  
scriptTag=document.createElement('script');
scriptTag.src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js';
scriptTag.integrity='sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy';
scriptTag.crossOrigin='anonymous';
document.body.appendChild(scriptTag);

var tabs=[['top','焦點'],['finance','理財'],['100140','鉅亨'],[['103214','100267'],'M平方'],['100295','今周刊'],['101131','CMoney'],[['100422','100421'],'商周'],['101170','路透社'],[['104453','101006'],'財訊'],[['100150','103088'],'鏡週刊'],[['100004','101886'],'風傳媒'],[['100275','101201'],'關鍵評論網'],['global','國際'],['100003','中央社'],['worldtrend','世界趨勢'],['101074','CNN'],['tech','科技'],['AI','AI'],['100317','數位時代'],['100341','科技新報'],['101196','科技報橘'],['104322','優分析'],['104264','產業定錨筆記'],['100198','經理人月刊'],['101499','德國之聲'],['100462','換日線'],[['100568','100158'],'天下雜誌'],['101031','地球圖輯隊'],['101934','Readmoo'],['100394','Openbook閱讀誌'],['domestic','國內'],['TOPIC-BingeWatching','追劇'],['TOPIC-KoreaStar','韓星最前線'],['health','健康'],['life','生活'],['cleanandstorage','生活智慧王'],['fun','鄉民'],['entertainment','娛樂'],['travel','旅遊'],['TOPIC-TravelJapan','日本旅遊情報']];
var btn='';
for (let tab of tabs){
  if(Array.isArray(tab[0])){
  var ti=tab[0].join('\',\'')}else{var ti=tab[0]};
  btn+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getList(['${ti}'])">${tab[1]}</button>`;
}



  

var res=await fetch('https://gateway.dict.naver.com/krdict/kr/kozh/today/20241111/conversation.dict?callback=angular.callbacks._0');
var str=await res.text();
var data=JSON.parse(str.slice(21,-1)).data;



  

document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>LINE TODAY</title>
          <style>
          body {background-color:#F4ECD8;color:#5B4636;font-size:1.3rem}
          .content{display:none;cursor:pointer}
          .sepia{background-color:#F4ECD8;color:#5B4636}
          .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
          h1,h2,h3,h4,h5,h6,.title{font-size:1.3rem;color:#3B2D20 !important;font-weight:bold}
          a{word-wrap:break-word;white-space:normal;overflow-wrap:break-word;word-break:break-word}
          h1 a {color: navy; font-weight: bold; text-decoration:none;cursor:pointer}
          figcaption{font-size:1rem}
          img{display:block !important;margin:auto;width:100%;height:auto}
          @media (min-width:768px){
            @font-face{font-family:"Microsoft JhengHei Bold";src:local("Microsoft JhengHei Bold");unicode-range:U+4E00-9FFF}
            body {background-color:#F4ECD8;color:#5B4636;font-size:1.2rem;font-family:arial,'Microsoft JhengHei Bold', sans-serif !important}
            h1,h2,h3,h4,h5,h6,.title{font-size:1.2rem;color:#3B2D20 !important;font-weight:normal}
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
  <form id="btn-group" class="py-2 sticky-top container-fluid justify-content-start sepia-contrast">`+btn+`
  </form>
<div id="list" class="mx-3 pt-3">
</div>
</div></body></html>
`;

getList(['finance'])
})();
