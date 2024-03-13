

//////Youtube


javascript:(async function(){
const url=window.location.href;
const response=await fetch('https://www.youtube.com/youtubei/v1/get_transcript?prettyPrint=false',{
  method:'POST',
  body:'',
  headers:{'Content-type':'application/json'}
})
.then((response)=>response.json());

var start=[];
var text=[];
var segments=[];
var data=response.actions[0].updateEngagementPanelAction.content.transcriptRenderer.content.transcriptSearchPanelRenderer.body.transcriptSegmentListRenderer.initialSegments;
for (var i=0;i<data.length;i++){
  start.push(data[i].transcriptSegmentRenderer.startMs);
  text.push(data[i].transcriptSegmentRenderer.snippet.runs[0].text);
}
segments=start.map((start, i) => ({ start, text: text[i] }));
var txt=JSON.stringify({segments:segments});
let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = 'txt.txt';
link.click();
alert(txt);
//alert('["'+name+'",'+audio+',0],');
})();


javascript:(async function(){
const url=window.location.href;
const response=await fetch('https://www.youtube.com/youtubei/v1/get_transcript?prettyPrint=false',{
  method:'POST',
  body:'{"context":{"client":{"hl":"ja","gl":"TW","remoteHost":"2001:b011:380e:1c56:c00d:343:7bad:7ac","deviceMake":"Apple","deviceModel":"","visitorData":"Cgt3T3VMSkdkMkNtQSiuxcWvBjIKCgJUVxIEGgAgVQ%3D%3D","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36,gzip(gfe)","clientName":"WEB","clientVersion":"2.20240312.01.00","osName":"Macintosh","osVersion":"10_15_7","originalUrl":"'+url+'","platform":"DESKTOP","clientFormFactor":"UNKNOWN_FORM_FACTOR","configInfo":{"appInstallData":"CK7Fxa8GEJaZ_xIQkLKwBRC9mbAFEMzfrgUQiIewBRC3768FEKiasAUQl4OwBRClwv4SEOvo_hIQ9quwBRCCtrAFEN3o_hIQ-qewBRCikrAFEK-P_xIQvbauBRCmgbAFELrKsAUQ7ciwBRC8-a8FELiqsAUQ0I2wBRDX6a8FEO6zsAUQg7-wBRCigbAFEL75rwUQmrCwBRC36v4SENWIsAUQiOOvBRDqw68FEIyY_xIQkbuwBRClu7AFELfgrgUQ57qvBRDxmv8SENuvrwUQn8mwBRC3q7AFENPhrwUQ2cmvBRD0q7AFEKPJsAUQieiuBRCmmrAFEMa5sAUQ7qKvBRCjxbAFEOuTrgUQ8JywBRCGtrAFEOevsAUQz6iwBRD3wLAFEPyFsAUQ_LCwBRCiu7AFEKq7sAUQvYqwBRCApLAFELvSrwUQlpWwBRCju7AFEJrwrwUQyfevBRDUoa8FEOHyrwUQ86GwBRChw7AFENyCsAUQiZj_EhCHw7AFEOLUrgUQj8SwBRDktrAFEP2W_xIQnPuvBRC2068FEJ66sAUqLENBTVNIQlVmb0wyd0ROSGtCb2paSHNXcUQtWHR5QXYycHdhT2twY05IUWM9"},"userInterfaceTheme":"USER_INTERFACE_THEME_LIGHT","timeZone":"Asia/Taipei","browserName":"Chrome","browserVersion":"122.0.0.0","acceptHeader":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","deviceExperimentId":"ChxOek0wTlRjMk1EazJOekk1TnpZeU5EZzROdz09EK7Fxa8GGK7Fxa8G","screenWidthPoints":869,"screenHeightPoints":705,"screenPixelDensity":1,"screenDensityFloat":1,"utcOffsetMinutes":480,"connectionType":"CONN_CELLULAR_4G","memoryTotalKbytes":"4000000","mainAppWebInfo":{"graftUrl":"'+url+'","pwaInstallabilityStatus":"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED","webDisplayMode":"WEB_DISPLAY_MODE_BROWSER","isWebNativeShareAvailable":false}},"user":{"lockedSafetyMode":false},"request":{"useSsl":true,"consistencyTokenJars":[{"encryptedTokenJarContents":"AKreu9uTnHxhIq0Rt4Y11XakWmh0zuQ5JG93PXLypYY-aURfm8jZHTPVhf9GnMUGgqBQxNcrxWDitvgkjSE6UhgWAEfG78nqDChqPRqrb1ylkepYo_7OZzPqZH4Kwi3B_WzNc3tPizDrQL1WFiJQPG8"}],"internalExperimentFlags":[]},"clickTracking":{"clickTrackingParams":"CBMQ040EGAYiEwjo06OA6PCEAxUm6UwCHbtAB_A="},"adSignalsInfo":{"params":[{"key":"dt","value":"1710318257524"},{"key":"flash","value":"0"},{"key":"frm","value":"0"},{"key":"u_tz","value":"480"},{"key":"u_his","value":"3"},{"key":"u_h","value":"1080"},{"key":"u_w","value":"1920"},{"key":"u_ah","value":"1057"},{"key":"u_aw","value":"1920"},{"key":"u_cd","value":"24"},{"key":"bc","value":"31"},{"key":"bih","value":"705"},{"key":"biw","value":"854"},{"key":"brdim","value":"54,-1018,54,-1018,1920,-1057,1396,826,869,705"},{"key":"vis","value":"1"},{"key":"wgl","value":"true"},{"key":"ca_type","value":"image"}],"bid":"ANyPxKpNw6LQkEiEMgnGKkBciZbYgxlFajRpmSQIIH8txNomI2Y03DDqgCPqcuq7sYWIl9dl7khMwuueAmj4Cpcz5yhRq7JT-w"}},"params":"CgtOVjNzQmxSZ3pUSRISQ2dOaGMzSVNBbVZ1R2dBJTNEGAEqM2VuZ2FnZW1lbnQtcGFuZWwtc2VhcmNoYWJsZS10cmFuc2NyaXB0LXNlYXJjaC1wYW5lbDAAOAFAAQ%3D%3D"}',
  headers:{'Content-type':'application/json'}
})
.then((response)=>response.json());

var start=[];
var text=[];
var segments=[];
var data=response.actions[0].updateEngagementPanelAction.content.transcriptRenderer.content.transcriptSearchPanelRenderer.body.transcriptSegmentListRenderer.initialSegments;
for (var i=0;i<data.length;i++){
  start.push(data[i].transcriptSegmentRenderer.startMs);
  text.push(data[i].transcriptSegmentRenderer.snippet.runs[0].text);
}
segments=start.map((start, i) => ({ start, text: text[i] }));
var txt=JSON.stringify({segments:segments});
let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = 'txt.txt';
link.click();
alert(txt);
//alert('["'+name+'",'+audio+',0],');
})();




//////WSJ

javascript:(function(){
let str=document.documentElement.innerHTML;
let name=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','').replace(' - WSJ Podcasts</title>','').replace(/[\:\?]/g,'').replace(/ /g,'_');
let audio=str.match(/"https:\/\/m.wsj.net\/audio[\s\S]*?\.mp3"/g)[0];
str = document.documentElement.innerText;
str=str.match(/FULL TRANSCRIPT[\s\S]*?Looking for more episodes/g)[0].replace('FULL TRANSCRIPT','').replace('Looking for more episodes','');
let txt=str.replace(/\."/g,'".').replace(/\./g,'.\r\n').replace(/\?/g,'?\r\n');
let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = name+'-0.txt';
link.click();
alert('["'+name+'",'+audio+',0],');
})();


///////EUDIC

javascript:(function(){
let str=document.documentElement.innerHTML;
let name=str.match(/<h1>[\s\S]*?<\/h1>/g)[0].replace(/<h1>[\s\S]*? /g,'').replace('</h1>','').replace(/[\:\?]/g,'').replace(/ /g,'_');
let audio=str.match(/"http:\/\/api.frdic.com\/api\/v3\/media[\s\S]*?\?/g)[0].replace('?','"');
let raw=str.match(/paragraphs":[\s\S]*?content_update_time/g)[0].replace(/\n/g,'').replace(/  /g,'').replace('paragraphs":','').replace(',"content_update_time','');
let data=JSON.parse(raw);
var txt='';
for(var i=0;i<data.length;i++){
  txt=txt+data[i].timestamps[0]+data[i].origintext+'\r\n';
}
let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = name+'.txt';
link.click();
alert('["'+name+'",'+audio+',0],');
})();



///////////////////////////////////////////
// GET TED JSON
///////////////////////////////////////////

javascript:(function(){
let str=document.documentElement.innerHTML;
let a=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','["').replace('</title>','","').replace(/[\:\?]/g,'').replace(/ /g,'_');
let b=str.match(/https:\/\/download.ted.com\/products[\s\S]*?\.mp4/g)[0].replace('.mp4','.mp4",3],');
let el = document.createElement('textarea');
document.body.appendChild(el);
el.value = a+b;
el.select();
document.execCommand('copy');
alert(a+b);
})();



///////////////////////////////
// DOWNLOAD TRANSCRIPT AS FILE
///////////////////////////////

javascript:(async()=>{

let response = await fetch(window.location.href);
let str = await response.text();
let filename=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','').replace('</title>','.txt').replace(/[\:\?]/g,'').replace(/ /g,'_');
let raw=str.match(/transcriptData":[\s\S]*?video":{/g)[0].replace(/\\n/g,' ').replace('transcriptData":{"translation":','').replace(',"video":{','');
let data=JSON.parse(raw);
var txt='';
for(var i=0;i<data["paragraphs"].length;i++){
  for(var j=0;j<data["paragraphs"][i].cues.length;j++){
    var t=data["paragraphs"][i].cues[j]["time"];
    txt=txt+timestamp(t)+data["paragraphs"][i].cues[j]["text"]+'\r\n';
  }
}
function timestamp(time){
  let mm=Math.floor(time/1000/60);
  let ss=Math.floor((time-mm*60000)/10)/100;
  ss=ss.toFixed(2);
  return '['+[("0"+mm).slice(-2),("0"+ss).slice(-5)].join(':')+']';
}
let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = filename;
link.click();
})();



///////////////////////////////
// DOWNLOAD TRANSCRIPT AS TEXT
///////////////////////////////


javascript:(async()=>{

let response = await fetch(window.location.href);
let str = await response.text();
let filename=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','').replace('</title>','.txt');
let raw=str.match(/transcriptData":[\s\S]*?video":{/g)[0].replace(/\\n/g,' ').replace('transcriptData":{"translation":','').replace(',"video":{','');
let data=JSON.parse(raw);

var txt='';
for(var i=0;i<data["paragraphs"].length;i++){
  for(var j=0;j<data["paragraphs"][i].cues.length;j++){
    var t=data["paragraphs"][i].cues[j]["time"];console.log(t+', '+(t));console.log(timestamp(t));
    txt=txt+timestamp(t)+data["paragraphs"][i].cues[j]["text"]+'\r\n';
  }
}
txt=txt+filename;

let el = document.createElement('textarea');
document.body.appendChild(el);
el.value = txt;
el.select();
document.execCommand('copy');

function timestamp(time){
  let mm=Math.floor(time/1000/60);
  let ss=Math.floor((time-mm*60000)/10)/100;
  ss=ss.toFixed(2);
  return '['+[("0"+mm).slice(-2),("0"+ss).slice(-5)].join(':')+']';
}

})();
