javascript:(async()=>{

document.querySelectorAll('script').forEach(script => script.remove());
window.setTimeout = () => {};
window.setInterval = () => {};

var scriptTag=document.createElement('script');
scriptTag.src='https://vjs.zencdn.net/7.20.3/video.min.js';
document.body.appendChild(scriptTag);

scriptTag=document.createElement('script');
scriptTag.src='https://cdn.jsdelivr.net/npm/hls.js@latest';
document.body.appendChild(scriptTag);
  
scriptTag=document.createElement('script');
document.body.appendChild(scriptTag);

scriptTag.innerHTML=`
const cnyeshao=[['W_1','最新'],['W_2','推薦'],['W_8','美股'],['W_40','台股'],['W_14','國際'],['W_62','宏觀'],['W_11','外匯'],['W_13','商品期貨'],['W_40','科技'],['30','美股艾大叔'],['361680','華爾街脈動'],['444','RexAA'],['443','小小天下'],['29','北風窗'],['113','老馬記']];
const yahooTW=[['cff206bf-9612-4903-9863-a9ad12319b12','焦點'],['b11aeba6-28c8-47bd-b0d8-96b89a20d817','即時'],['a8a208bf-23e1-4950-8aba-8a8d1c0c2da5','財經'],['f10835b8-98fe-48b4-a506-023937ab0a4b','Yahoo 特派'],['4e1fb4b1-9bf1-4d00-81a1-64001c935310','股匯市'],['cdbe8dd0-22d4-11ea-bbfb-7e2fb6871bd3','台股盤勢'],['9f0e62c0-22d5-11ea-bede-345eb8f1edf4','國際財經'],['e9628320-22d4-11ea-9ef0-2fabb53ab0e9','基金動態'],['381351b0-6d8c-11e9-bb53-0fc098ecd9a1','雜誌'],['ad05d340-22d5-11ea-9db1-fe39a6582c47','研究報告'],['70394000-22d5-11ea-bef4-114a94a8f820','小資理財'],['875b56b0-22d5-11ea-95cf-d43d8a1a8360','專家專欄'],['ebb0818f-c3e6-4c43-ab06-7fabe34c02f5','產業'],['65c6fa3b-b4c8-42e7-afed-c468a927d71f','國際'],['9336b431-7f5d-4dba-b06d-0dce56fb3f8f','娛樂'],['47409191-3f19-48a5-b99a-b7a19c5152f1','Yahoo'],['1af9d85f-9f45-4f07-a290-d6116fcd7e94','BBC'],['fbe20d0c-5704-4a52-a6dd-862b105734a8','中時'],['e9162370-a63f-41e1-b6ab-a2ca4bc88aa3','三立'],['841ae727-aaf4-4d96-89e8-6023380a5f0d','TVBS'],['d1c5195f-8c50-441f-8d4f-192505ff481a','公視'],['616c3db4-1af4-4d9a-90c2-e8d5b61fdca8','中天'],['24a219a6-e124-4d54-85c0-da53c42dad3f','聯合'],['1eeeee88-4e98-49f5-9283-d95b59faa8d0','東森'],['92e62bbd-f6b0-4ff2-ae60-da5e92602b8b','CWANT'],['15344921-beff-4849-8c1e-799f00eb6104','壹蘋'],['15fd91e7-7935-439f-a2a9-caea96a5c3db','鏡週刊'],['81870ef4-46f4-4ed2-a2b3-d436b9b85c06','NOWNews'],['80c8c637-4f0d-4df0-8c2e-d66523148f6d','台視'],['"75f58300-9102-4339-a493-1e2f3e31313c"','民視'],['f0caaf82-30b3-4e6c-a2eb-aa9577dbe7d4','華視'],['483b66c7-0238-411e-be93-53e1478272d3','新頭殻'],['71b213f3-88c4-41fe-b9f0-a59e9045e2d0','風傳媒'],['275994b0-0e8a-11eb-9ffd-16766ba98f36','BBC中文'],['bd00c410-4b30-4245-abf8-d23656709efa__','Latest'],['db1d46e0-a969-11e9-bff5-6dfdb80d79cf__','Stock Market News'],['04d9350a-bbd1-4787-95be-740cc5ee8852__','Earnings'],['0897608a-7d79-47df-9377-b07bd22b0fde__','Yahoo Finance'],['ed5c8883-d951-4e70-87b3-9f8f375fb410__','Premium News'],['dffbd430-02a2-11e7-bcfc-437e9432ca73__','Tech'],['b1f0c990-db7a-11e7-a937-0d92c86f9da1__','Crypto']];
const cna=[['aall','即時'],['aopl','國際'],['aie','產經'],['asc','證券'],['ait','科技'],['ahel','生活'],['amov','娛樂']];
const yahooVideo=[['00390a14-17cc-49d2-9e32-79365335f0ca','Latest'],['3058c878-ce30-48f5-93ed-567dfcf3e07b','Editor\\'s Picks'],['2d4617cb-4448-4bbe-be69-507820ee12be','Investing & Market Insights'],['9657ccb4-0423-4420-94de-024c54839a21','Trending Stocks'],['e799ec4c-02d3-477d-ba05-e8bb5c88bfc8','Tech News'],['aa2ec37b-b63e-4154-b9bd-18e0b14bb1e7','Asking for a Trend'],['d27bc0dd-04f8-4a61-8b08-9c7c6cc3169f','Catalysts'],['9a665a61-55bd-43bc-8657-6eb984ef9a37','Market Domination'],['0c9d1849-74a9-459f-9131-a9cee22acc8e','Morning Brief'],['739eb51e-bc2e-4bd2-99a8-6793977028ed','Market Domination Overtime']];
const lineToday=[['top','焦點'],['finance','理財'],['100140','鉅亨'],['102394|103101','經濟工商'],['103214|100267','M平方'],['100295','今周刊'],['101131','CMoney'],['100422|100421|100423','商周'],['101170','路透社'],['104453|101006','財訊'],['100150|103088','鏡週刊'],['101427','CTWANT'],['100237','東森'],['100167','TVBS'],['100004|101886','風傳媒'],['100275|101201','關鍵評論網'],['global','國際'],['100003','中央社'],['TOPIC-USelection|2024election','川普2.0'],['worldtrend','世界趨勢'],['101074','CNN'],['tech','科技'],['AI','AI'],['100317','數位時代'],['100341','科技新報'],['101196','科技報橘'],['104322','優分析'],['104264','產業定錨筆記'],['100198','經理人月刊'],['101499','德國之聲'],['100462','換日線'],['100568|100158','天下雜誌'],['101031','地球圖輯隊'],['101934|100394|103227','閱讀'],['domestic','國內'],['TOPIC-BingeWatching','追劇'],['TOPIC-KoreaStar','韓星最前線'],['health','健康'],['life','生活'],['cleanandstorage','生活智慧王'],['100746|TOPIC-DIY','裝潢'],['fun','鄉民'],['entertainment','娛樂'],['travel','旅遊'],['TOPIC-TravelJapan','日本旅遊情報']];
const isbl=[['','Latest']];
const invtCom=[['rates-bonds/u.s.-10-year-bond-yield-news/','債市'],['news/forex-news/','匯市'],['news/latest-news/','最新'],['news/economy/','財經'],['news/economic-indicators/','經濟數據'],['news/commodities-news/','原物料'],['news/cryptocurrency-news/','加密貨幣'],['indices/japan-ni225-news/','日經'],['indices/topix-news/','東證'],['analysis/market-overview/','市場評論'],['analysis/editors-picks/','精選評論']];
const marie=[['160/Julia','Julia']];
const bbgVideo=[['markets;bbiz;technology;cryptocurrencies;pursuits','Latest'],['markets','Markets'],['bbiz','Business'],['technology','Technology'],['cryptocurrencies','Crypto'],['pursuits','Pursuits']];

const faq=[['yahooTW','Yahoo','私募'],['yahooTW','Yahoo','日股'],['yahooTW','Yahoo','美債']];
const searchSites=[['yahooTW','奇摩新聞'],['lineToday','LINE']]; 
const allSites1=[['lineToday','LINE',lineToday,'today.line.me','https://today.line.me/tw/v3/tab'],['yahooTW','奇摩新聞',yahooTW,'tw.news.yahoo.com|tw.stock.yahoo.com','https://tw.news.yahoo.com/'],['cna','中央社',cna,'cna.com.tw','https://www.cna.com.tw/'],['yahooVideo','Yahoo Video',yahooVideo,'https://finance.yahoo.com','https://finance.yahoo.com/'],['cnyeshao','鉅亨號',cnyeshao,'hao.cnyes.com','https://hao.cnyes.com/ch/361680'],['isbl','ISABELNET',isbl,'isabelnet.com','https://www.isabelnet.com/blog/'],['invtCom','Investing.com',invtCom,'investing.com','https://hk.investing.com/'],['marie','美麗佳人',marie,'marieclaire.com','https://www.marieclaire.com.tw/']];
const otherVideo=[['bbgVideo','Bloomberg Video',bbgVideo,'bloomberg.com','https://www.bloomberg.com/video-v2']];

const formHeader='<button class="btn sepia me-1 mb-1" type="button" onclick="openMediaList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><button class="btn sepia me-1 mb-1" type="button" onclick="openUrlList()">網站列表</button><hr style="margin-right:3rem">';

var tabs=[];
var items=[];var url='';var html='';
var siteNameVar='';
var coun='';
var t='';
var uuids='';
var payload={};
var rt='';
var rr=0;

function showTop(t){
  topdiv.innerText=t;
  topdiv.style.display='block';
}

function openMediaList(){
  channelList.style.display='block';
  searchList.style.display='none';
  urlList.style.display='none';
  options.style.display='block';
  topdiv.style.display='none';
}

function openSearchList(){
  channelList.style.display='none';
  searchList.style.display='block';
  urlList.style.display='none';
  options.style.display='block';
  topdiv.style.display='none';
}

function openUrlList(){
  channelList.style.display='none';
  searchList.style.display='none';
  urlList.style.display='block';
  options.style.display='block';
  topdiv.style.display='none';
}

function openOptions(){
  if (options.style.display=='none'){
    options.style.display='block';
    topdiv.style.display='none';
  } else {
    options.style.display='none';
    topdiv.style.display='block';
  }
}

function createBtnGroup(site,siteName,top){
  btn.innerHTML=formHeader;
  for (let tab of site){
    btn.innerHTML+=\`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('\${siteName}','\${top}','\${tab[0]}')">\${tab[1]}</button>\`;
  }
    get1stList(siteName,top,site[0][0]);
}

async function get1stList(siteName,top,t){
  rr=0;uuids='';
  getList(siteName,t);
  showTop(top);
}

async function get1stSearchResults(siteName,top){
  rr=0;uuids='';
  getSearchResults(siteName);
  showTop(top+' - 搜尋：'+document.getElementById('search-term').value);
}

function getFAQSearchResults(siteName,top,t){
  document.getElementById('search-term').value=t;
  get1stSearchResults(siteName,top);
}

async function getList(siteName,t){
  loading.style.display='block';
  siteNameVar=siteName;rr++;rt=t;
  if (rr==1){newNews()};
  items=[];html='';
  list.innerHTML+=await window[\`\${siteName}GetList\`](siteName,t);
  loading.style.display='none';
  if (siteName==='yahooTW'||siteName==='apollo'){
    var all=document.querySelectorAll('.t-tl');
    getTranslation(all);
  }
}

async function getSearchResults(siteName){
  loading.style.display='block';
  siteNameVar=siteName;rr++;rt='s';cursor='';uuids='';
  if (rr==1){newNews()};
  items=[];html='';
  list.innerHTML+=await window[\`\${siteName}GetSearchResults\`](siteName,document.getElementById('search-term').value);
  loading.style.display='none';
}

async function getContent(siteName,clickedId,id){
  var cEl=document.getElementById(id);
  try{document.getElementById('dateAuthor-'+id).style.display='none'}catch{};
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    if (siteName!=='cnyeshao'){
      if (cEl.innerText.length<50){
        if (siteName=='msnTW'){cEl.innerHTML+=await msnGetContent(id,'zh-tw')}
        else if (siteName=='msnUS'){cEl.innerHTML+=await msnGetContent(id,'en-us')}
        else {cEl.innerHTML+=await window[\`\${siteName}GetContent\`](id)};
        cEl.querySelectorAll('img, figure, figure.caas-figure div.caas-figure-with-pb, .bbc-j1srjl, .bbc-j1srjl, .bbc-2fjy3x').forEach(img => {img.removeAttribute('style')});
        if (siteName=='msnTW'||siteName=='msnUS'){cEl.querySelectorAll('img').forEach(img=>{img.src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/'+img.getAttribute('data-document-id').slice(18)+'.img'})};
        if (siteName=='wscn'||siteName=='jin'){convertTextInsideTags(cEl)};
        if (siteName=='dw'){cEl.querySelectorAll('h2 svg').forEach(a=>{a.remove()})};
      }
    }
    loading.style.display='none';
    if (siteName==='marie'){window.instgrm.Embeds.process()};
    if (siteName==='msnUS'||siteName==='apollo'){
      var all=cEl.querySelectorAll('p, h2, li');
      getTranslation(all);
    } else if (siteName=='yahooTW' && coun=='US'){
      var all=cEl.querySelectorAll('p, li');
      getTranslation(all);
    } else if (siteName=='peInsights'){
      var all=cEl.querySelectorAll('.tl');
      getTranslation(all);
    }
  } else {
      var e=window.event;
      if (e && e.target.tagName==='VIDEO'){return}else{
      cEl.style.display='none';
      if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
      try{
        if (siteName=='msnTW'||siteName=='msnUS'){
          cEl.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView();
        } else {
          cEl.previousElementSibling.previousElementSibling.scrollIntoView();
        }
      } catch {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}
    }
  }
  if (siteName.slice(-5)=='Video'){
    cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
  }
}




async function cnaGetList(siteName,t){
  try{url='https://www.cna.com.tw/cna2018api/api/WNewsList';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: '{"action":"0","category":"'+t+'","pagesize":"100","pageidx":1}',
    });
  var str=await res.json();
  for (let a of str.ResultData.Items){
    items.push([a.PageUrl,a.HeadLine])
  }
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[1]}</p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"></div><hr>\`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cnaGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  html= '<p class="fs10">'+doc.querySelector('.updatetime').innerText+'</p>'+doc.querySelector('.paragraph').outerHTML.replaceAll('</span></a><a','</span></a><br><a') + '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}




async function cnyeshaoGetList(siteName,t){
  try{
  var k=4;
  if (t.slice(0,2)=='W_'){url='https://hao.cnyes.com/h_api/1/pg_wall/more';t=t.slice(2)}else{url='https://hao.cnyes.com/h_api/1/pg_ch/more'};
  for (let i=0;i<k;i++){console.log((rr-1)*k+i+1);
    var res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=UTF-8',},
      body: '{"p2":"'+t+'","p3":'+((rr-1)*k+i+1)+',"timezoneOffset":-28800000}',
    });
    var str=await res.json();
    for (let h of str.payload.Root.Page_文章.List_文章){
      items.push([h.文章Id,h.標題,h.排序時間,h.Rendered_內容,h._號.名稱]);
    }
  }
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[1]?h[1]:'【詳內文】'}</p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"><p class="fs10">\${cvt2Timezone(h[2])} | \${h[4]}</p>\${h[3]}<p class="text-end"><a href="https://hao.cnyes.com/post/\${h[0]}" target="_blank">分享</a></p><br></div><hr>\`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}




async function yahooVideoGetList(siteName,t){
  try{var payload={
    "payload":{
      "gqlVariables": {
          "main": {
              "pagination": {
                  "uuids": uuids
              }
          }
      }
  },
    "serviceConfig": {
      "listId": t,
      "count": 200,
      "snippetCount": 50
    }
  };
  var url='https://finance.yahoo.com/xhr/ncp?location=US&queryRef=videosCategoryNeo&serviceKey=ncp_fin&lang=en-US&region=US';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'text/plain;charset=UTF-8',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  uuids=str.data.main.pagination.uudis;
  
  for (let h of str.data.main.stream){
    items.push([h.id,h.content.title,h.content.pubDate,h.content.duration,h.content.thumbnail.originalUrl,h.content.canonicalUrl.url])
  }

  for (let h of items){
    html+=\`<div onclick="yahooVideoGetContent(this.id,'\${h[0]}','\${h[5]}')"><img src="\${h[4]}" class="pb-2"><span class="title">\${h[1]}</span><br><span class="fs10">\${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">\${cvtS2HHMMSS(h[3],1)}</span></div><div id="\${h[0]}" class="content" onclick="yahooVideoGetContent(this.id,'\${h[0]}','\${h[5]}')"></div><hr>\`
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}

async function yahooVideoGetContent(clickedId,id,url){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    cEl.style.display='block';
    var nuxtDataItem = '<iframe id="video-'+id+'" src="'+url+'?format=embed" scrolling=no style="width:100%;height:auto"></iframe>'+'<p class="text-end"><a href="' + url + '" target="_blank">Share</a></p><br>';
    cEl.innerHTML=nuxtDataItem;

    document.getElementById('video-'+id).parentElement.previousElementSibling.firstChild.setAttribute('style', 'display: none !important;');
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){
      cEl.style.display='none';
      cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}





async function yahooTWGetList(siteName,t){
  try{coun='TW';
  if (t.slice(-2)=='__'){t=t.slice(0,-2);coun='US'};
  var url='https://ncp-gw-finance.media.yahoo.com/api/v2/gql/stream_view?count=200&imageFormat=WEBP&namespace=finance&ntkEnabled=false&ssl=true&id=neo-ntk-assetlist-stream&site=finance&version=v1&enableCrossModuleDedup=true&snippetCount=200&listId='+t;
  let res=await fetch(url);
  let str=await res.json();
  var data=str.data.main.stream.slice((rr-1)*50,rr*50);
  for (let h of data){
    if(h.content){
      h=h.content;
      items.push([h.id,h.title])
    }
  }
  for (let h of items){
    html+=\`<p class="title t-tl" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[1]}</p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"></div><hr>\`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function yahooTWGetContent(id){
    try{const res = await fetch('https://www.yahoo.com/caas/content/article/?region='+coun+'&uuid='+id);
    const str=await res.json();
    var a=str.items[0].data.partnerData;
    var b=str.items[0].markup.replaceAll('data-src','src').replace(/padding-bottom[\\s\\S]*?%/g,'');
    html = '<p class="fs10">'+cvt2Timezone(a.publishDate)+' | '+a.publisher+'</p>'+ b + '<p class="text-end"><a href="' + a.finalUrl + '" target="_blank">分享</a></p><br>';
  }catch{html='<p>尚無內容</p><br>'}
  return html;
}




async function yahooTWGetSearchResults(siteName,t){
  try{
  coun='TW'; var k=3;
  for (let i=0;i<k;i++){
  url='https://tw.news.yahoo.com/_td-news/api/resource/NuwaSearchService.newsSearch;loadMore=true;query='+t+';offset='+(k*10*(rr-1)+(i*10));console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  var data=str.data;
  for (let h of data){
    items.push([h.id,h.title,h.published_at,h.provider_name])
  }
  }
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[1]}<br><span id="dateAuthor-\${h[0]}" class="fs10 fw-normal">\${h[2]} | \${h[3]}</span></p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"></div><hr>\`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}




async function lineTodayGetList(siteName,tt){
  tt=tt.split('|');
  for (let t of tt) {
    if (/[0-9]/.test(t)){
      url='https://today.line.me/webapi/trending/cp/latest/listings/module:cp:'+t+':5f4dd7e908b2af5b0e13bba1:0?offset='+(rr-1)*50+'&length=50&country=tw&targetContent=ALL&cps='+t+':200';
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
        res=await fetch('https://today.line.me/api/v6/listings/'+d+'?country=tw&offset='+(rr-1)*20+'&length=20');
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
  
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[2]}</p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"></div><hr>\`
  }
  return html;
}

async function lineTodayGetContent(id){
  try{const res = await fetch('https://today.line.me/webapi/portal/page/setting/article?country=tw&hash=' + id);
  const str=await res.json();
  const a = str.data;
  if (a) {
    if (a.media==undefined){
      var html = '<p class="fs10">' + a.publishTime + ' | ' + a.publisher + '</p>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
    } else {
      html = '<p class="fs10">' + a.publishTime + ' ' + a.publisher + '</p>' + '<video class="video-js" style="width:100%" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+a.media.hash+'/270p.m3u8" muted="muted" type="application/x-mpegURL"></source></video>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
    }
  }
  }catch{html='<p><a href="' + a.url.url + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function lineTodayGetSearchResults(siteName,t){
  try{url='https://today.line.me/webapi/listing/search?country=tw&query='+t;
  let res=await fetch(url);
  let str=await res.json();
  for (let a of str.items){
    items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title,a.publisher]))
  }
  
  items=[...new Set(items)];
  items=items.map(i=>JSON.parse(i));
  items=items.filter(i=>i[0]!==null && i[0]!=='');
  items.sort((a, b) => {return Number(b[1]) - Number(a[1])});
  
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[2]}<br><span id="dateAuthor-\${h[0]}" class="fs10 fw-normal">\${cvt2Timezone(h[1])} | \${h[3]}</span></p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"></div><hr>\`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}




async function isblGetList(siteName,t){
  try{
    url='https://www.isabelnet.com/blog/page/'+rr;console.log(url);
    var res=await fetch(url);
    var str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");

    let ts=doc.querySelectorAll('.entry-title');
    for (let t of ts){
      res=await fetch(t.firstChild.href);
      str=await res.text();
      parser = new DOMParser();
      doc = parser.parseFromString(str, "text/html");
      ss=doc.querySelectorAll('section');
      var hh=doc.querySelector('h2');
      var dt=doc.querySelector('.date-meta').innerText.replaceAll('\\n',' ');
      var pg=doc.querySelector('.elementor-text-editor');
      if (doc.querySelector('.gallery-icon')){var img=doc.querySelector('.gallery-icon')}else{var img=doc.querySelector('.elementor-image')};
      html+='<p class="title">'+hh.textContent+'</p><p class="fs10">'+dt+'</p>'+pg.innerHTML+img.innerHTML+'<br><br><hr>';
      html=html.replaceAll('<p>Image:','<p class=\"fs10\">Image:'); 
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}




async function invtComGetList(siteName,t){
  try{
  var k=2;
  for (let i=0;i<k;i++){
    url='https://hk.investing.com/'+t+((rr-1)*k+i+1);console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser=new DOMParser();
    var doc=parser.parseFromString(str, "text/html");
    if (t.slice(0,8)!=='analysis'){var hh=doc.querySelectorAll('article')}else{var hh=doc.querySelector('#contentSection').querySelectorAll('article')};
    for (let h of hh){
      items.push([h.children[1].children[0].href,h.children[1].children[0].innerText,h.querySelector('time').getAttribute('datetime').replace(' ','T')+'Z',h.children[1].children[2].querySelectorAll('span')[1].innerText]);
    }
  }
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[1]}</p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"><p class="fs10">\${cvt2Timezone(h[2])} | \${h[3]}</p></div><hr>\`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function invtComGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var a=doc.querySelector('#article');
  html=a.outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}





async function marieGetList(siteName,t){
  try{
    url='https://www.marieclaire.com.tw/author/'+t+'?page='+rr;console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser=new DOMParser();
    var doc=parser.parseFromString(str, "text/html");
    var hh=doc.querySelectorAll('.card');
    for (let h of hh){
      items.push([h.querySelector('a').href,h.querySelector('.articleTitle').innerText]);
    }
    
  for (let h of items){
    html+=\`<p class="title" onclick="getContent('\${siteName}',this.id,'\${h[0]}')">\${h[1]}</p><div id="\${h[0]}" class="content" onclick="getContent('\${siteName}',this.id,'\${h[0]}')"></div><hr>\`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function marieGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html='<p class="fs10">'+doc.querySelector('time').innerText+'</p>'+doc.querySelector('.articleContent').outerHTML + '<p class="text-end"><a href="https://www.marieclaire.com.tw' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://www.marieclaire.com.tw' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}




async function bbgVideoGetList(siteName,t){
  try{
    url='https://personalization.bloomberg.com/user/recommendations/cfru?timezoneOffset=-28800000&limit=50&resourceTypes=Video&offset='+(rr-1)*50+'&includedSites='+t;
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str){
      items.push([h.assetID,h.headline,h.publishedAt,h.duration,h.thumbnailUrl,h.url])
    }
    items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

    for (let h of items){
      html+=\`<div onclick="videoGetContent(this.id,'\${h[0]}','\${h[5]}','https:\/\/www.bloomberg.com\/media-manifest\/videos\/android\/WiFi\/\${h[0]}.m3u8')"><img src="\${h[4]}" class="pb-2"><p class="title">\${h[1]}</p><p class="fs10">\${cvt2Timezone(h[2])} | <span class="fw-bold">\${cvtS2HHMMSS(h[3],1000)}</span></p></div><div id="\${h[0]}" class="content" onclick="videoGetContent(this.id,'\${h[0]}','\${h[5]}','https:\/\/www.bloomberg.com\/media-manifest\/videos\/android\/WiFi\/\${h[0]}.m3u8')"></div><hr>\`
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}

async function videoGetContent(clickedId,id,url,m3u8Url){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    var html = '<video id="video-'+id+'" class="video-js" style="width:100%;height:auto" playsinline controls></video>'+'<p class="text-end"><a href="' + url + '" target="_blank">Share</a></p><br>';
    cEl.innerHTML=html;
    const video = document.getElementById('video-'+id);
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.play();
    } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play();
        });
    } else {
        console.error("HLS is not supported in this browser.");
    }

    document.getElementById('video-'+id).parentElement.previousElementSibling.firstChild.setAttribute('style', 'display: none !important;');
    loading.style.display='none';
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){
      cEl.style.display='none';
      cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}


function newNews(){
  options.style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
}

function openUrl(url){
  window.open(url,'_blank')
}

function decodeHTMLEntities(str){
  var ta=document.createElement('textarea');
  ta.innerHTML = str;
  return ta.value;
  ta.remove();
}

function cvtS2HHMMSS(sec,rescale) {
    s = Math.max(0, Math.floor(sec/rescale));
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const remainingSeconds = s % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(remainingSeconds).padStart(2, '0');
    if (hours > 0) {
        const hh = String(hours).padStart(2, '0');
        return hh+':'+mm+':'+ss;
    }
    return mm+':'+ss;
}

function cvt2Timezone(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString('zh-TW',{timeZone:'Asia/Taipei'});
}

async function translate(a){
  try{
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+encodeURIComponent(a);
    var res=await fetch(url);
    var raw=await res.json();
    var ts='';
    for (var j=0;j<raw[0].length;j++){
        if (raw[0][j][0]!==null && raw[0][j][0]!==undefined && raw[0][j][0]!=='undefined'){ts=ts+raw[0][j][0]}else{ts=ts}
    }
    return ts
  }catch (error) {console.error(error)}
}

async function getTranslation(all){
  for (let a of all){
    if (a.innerText!=='' && cnTest(a.innerText)!==true){
      var t=await translate(a.textContent);
      if (t!==''){a.innerHTML+='<br><span class="fs10 d-inline-block py-3">'+t+'</span>'};
    }
  }
}

function cnTest(str) {
  const chineseCharRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;
  return chineseCharRegex.test(str);
}

function convertTextInsideTags(element) {
  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      child.nodeValue = s2t(child.nodeValue.trim());
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      convertTextInsideTags(child);
    }
  }
}

let scrollTimeout;
window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 5) {
      if(rt!=='s'){
        getList(siteNameVar,rt);
      }else{
        getSearchResults(siteNameVar);
      }
    }
  }, 1000);
};

`;
  
var siteNameVar='';var tabs;var docTitle='';
for (let l of [...allSites1,...otherVideo]) {
  var ss=l[3].split('|');
  for (let s of ss){if (window.location.href.indexOf(s) !== -1) {siteNameVar=l[0];docTitle=l[1];tabs=l[2];break}}};
  
if (siteNameVar=='isabelnet'){
  function R(a) {
    ona = "on" + a;
    if (window.addEventListener) window.addEventListener(a, function(e) {
        for (var n = e.originalTarget; n; n = n.parentNode) n[ona] = null;
    }, true);
    window[ona] = null;
    document[ona] = null;
    document.onkeydown = null;
    if (document.body) document.body[ona] = null;
    document.body.oncopy = null;
  }
  R("contextmenu");R("click");R("mousedown");R("mouseup");R("selectstart");
}
  
var bstp='';
if (siteNameVar=='yahooVideo'){bstp=`
  iframe[id^="video"]{width:100%;aspect-ratio:1.78;height:auto;margin-top:0.5rem;border:none;border-radius:0.375rem}
  hr{margin: 1rem 0;color: inherit;border: 0;border-top: 1px solid;opacity: 0.25;}
  .pb-2{padding-bottom:0.5rem !important;}
  .pt-2{padding-top:0.5rem !important;}
  .pt-3{padding-top:0.75rem !important;}
  .py-2{padding-top:0.5rem !important;padding-bottom:0.5rem !important;}
  .p-2{padding:0.5rem !important}
  .m-2{margin:0.5rem !important}
  .me-1{margin-right:0.25rem !important}
  .mb-1{margin-bottom:0.25rem !important}
  .mb-3{margin-bottom:0.75rem !important}
  .mx-3{margin-left:0.75rem !important;margin-right:0.75rem !important}
  .fw-bold{font-weight:700 !important}
  .sticky-top {position: sticky;top: 0;z-index: 1020;}
  .position-fixed{position: fixed !important;} .top-0{top: 0 !important;} .end-0{right: 0 !important;}
  .opacity-25 {opacity: 0.25 !important;}
  .btn {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: var(--bs-body-color);
    --bs-btn-bg: transparent;
    --bs-btn-border-width: var(--bs-border-width);
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-hover-border-color: transparent;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .btn-light {
    --bs-btn-color: #000;
    --bs-btn-bg: #f8f9fa;
    --bs-btn-border-color: #f8f9fa;
  }
  .text-end{text-align:right}
`} else {bstp=''};
  
document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<title>${docTitle}</title>
<style>
  body {background-color:#F4ECD8;color:#3B2D20;font-size:1.5rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  #container{min-height:100vh;margin:auto}
  .content{display:none;cursor:pointer}
  ${bstp}
  iframe{width:100% !important;height:auto !important}
  video{width:100% !important;height:auto !important;border-radius:0.375rem}
  .sepia{background-color:#F4ECD8;color:#3B2D20}
  .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
  h1,h2,h3,h4,h5,h6,.title{font-size:1.5rem;color:#3B2D20 !important;font-weight:bold}
  a,figcaption{word-wrap:break-word;white-space:normal;overflow-wrap:break-word;word-break:break-word}
  h1 a {color: navy; font-weight: bold; text-decoration:none;cursor:pointer}
  .en-us{font-size:1.2rem}
  .fs10, .time, time, figcaption, table,div.inf,strong#article-byline.bbc-m04vo2,.bbc-1rvtlej,.bbc-1276odk {font-size:1rem}
  img{display:block !important;margin:auto;width:100%;height:auto;border-radius:0.375rem}
  .caas-header,.caas-attr,.caas-readmore,.SubscriptionInner.mySubscriptionInner,.gmailNews, .raise_block,div[data-e2e^="youtube-embed"], .div-gpt-ad-cnyes_news_article_middle_2,.bbc-geybui,.bbc-1151pbn.ebmt73l0,img.logo-PsAlMQQF.xxxsmall-PsAlMQQF.wrapper-TJ9ObuLF.skeleton-PsAlMQQF,img.logo-ocURKVwI.xxxsmall-ocURKVwI.skeleton-ocURKVwI.wrapper-TJ9ObuLF,.edn-ads--inlineAds,.inline-ads,.udn-ads,#sf_div-gpt-ad-1599104924568-0-1,.Google-special,#pumpkin_159,#inside_AD,.coffee-btn-wrapper,#bmc-tn-modal,.googlenews_Content,.reflist,.reflist.columns.references-column-width,#references-NoteFoot,.mw-editsection{display:none}
  .mw-heading1, .mw-heading2 {padding-top:3rem;color:#FF4D00;border-bottom:1px solid;border-color:#a2a9b1}
  .infobox.geography.vcard, .wikitable{max-width:100%!important}
  .bbc-2fjy3x{position:relative;height:0;width:5rem;height:5rem;} .bbc-1rvtlej{list-style:none;padding:0;margin:0;}
  #loading{position:fixed !important;width:100% !important;top:0% !important;left:0% !important}
  #loading-gif{position:absolute !important;top:50% !important;left:50% !important;transform: translate(-50%, -50%);}
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1023px) 
    and (-webkit-min-device-pixel-ratio: 2) {
    body{font-size:2rem} h1,h2,h3,h4,h5,h6,.title{font-size:2rem} .en-us{font-size:1.6rem} .fs10, .time, figcaption, .btn{font-size:1.3rem} #list{padding:2rem} svg.bi{height:2.8rem !important;width:2.8rem !important}
  }
  @media only screen 
    and (min-device-width: 1024px) 
    and (max-device-width: 1365px)
    and (-webkit-min-device-pixel-ratio: 2) {
    body{font-size:2rem} h1,h2,h3,h4,h5,h6,.title{font-size:2rem} .en-us{font-size:1.6rem} .fs10, .time, figcaption, .btn{font-size:1.3rem} #list{padding:2rem} svg.bi{height:2.8rem !important;width:2.8rem !important}
  }
  @media (min-width:1200px){
    @font-face{font-family:"Microsoft JhengHei" !important;src:local("Microsoft JhengHei") !important;unicode-range:U+4E00-9FFF !important}
    body {background-color:#E5E4E2;color:#3B3B3B;font-size:1.2rem;font-family:arial,'Microsoft JhengHei', sans-serif !important}
    #container{min-height:100vh;max-width:600px;margin:auto;background-color:#F8F8F8}
    .sepia{background-color:#F8F8F8;color:#3B3B3B}
    .sepia-contrast{background-color:#3B3B3B;color:#F8F8F8}
    #list, .btn {font-weight:bold}
    h1,h2,h3,h4,h5,h6,.title{font-size:1.2rem;color:#3B3B3B !important;font-weight:bold}
    #loading{width:5rem;height:5rem}
  }
</style>
</head>
<body style="margin:0">
<div id="container">
<div class="sticky-top position-fixed m-2 top-0 end-0" style="z-index:1030;padding-top:3rem">
  <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25" onclick="openOptions()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path>
    </svg>
  </button>
</div>
<div id="top" class="fs10 p-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="display:none"></div>
  <form id="btn-group" class="p-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="max-height:100vh">
    <div id="btn">
      <button class="btn sepia me-1 mb-1" type="button" onclick="openMediaList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><button class="btn sepia me-1 mb-1" type="button" onclick="openUrlList()">網站列表</button>
      <hr style="margin-right:3rem">
      <div id="channelList"></div>
      <div id="searchList" style="display:none"></div>
      <div id="urlList" style="display:none"></div>
    </div>
  </form>
<div id="list" class="mx-3 pt-3"></div>
<div id="loading" class="position-fixed w-100 top-0 start-0" style="height:100vh;display:none"><div id="loading-gif" class="position-absolute top-50 start-50 translate-middle" style="z-index:1030;width:3rem;height:3rem">
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" stroke="#555">
  <g fill="none" fill-rule="evenodd">
    <circle cx="30" cy="30" r="26" stroke-opacity="0.2" stroke-width="6"/>
    <path d="M56 30c0-14.36-11.64-26-26-26" stroke="#555" stroke-width="6">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 30 30"
        to="360 30 30"
        dur="1s"
        repeatCount="indefinite"/>
    </path>
  </g>
</svg>
</div></div>
</div>
</body></html>
`;

scriptTag=document.createElement('script');
document.body.appendChild(scriptTag);

scriptTag.innerHTML=`
var options=document.getElementById('btn-group');
var btn=document.getElementById('btn');
var channelList=document.getElementById('channelList');
var searchList=document.getElementById('searchList');
var urlList=document.getElementById('urlList');
var list=document.getElementById('list');
var topdiv=document.getElementById('top');
var loading=document.getElementById('loading');
`;

if (siteNameVar!==''){
for (let tab of tabs){
  channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${siteNameVar}','${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
}
get1stList(siteNameVar,tabs[0][1],tabs[0][0]);

for (let tab of faq){
  searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getFAQSearchResults('${tab[0]}','${tab[1]}','${tab[2]}')">${tab[2]}</button>`;
}  
searchList.innerHTML+='<input type="text" id="search-term" class="form-control my-2">';
for (let tab of searchSites){
  searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stSearchResults('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
}
} else {
  openUrlList()
}

for (let tab of allSites1){
  urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
}
urlList.innerHTML+='<hr>';
for (let tab of otherVideo){
  urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
}

})();
