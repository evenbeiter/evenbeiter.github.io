
//////WSJ

javascript:(function(){
let str=document.documentElement.innerHTML;
let name=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','').replace(' - WSJ Podcasts</title>','').replace(/[\:\?]/g,'');
let audio=str.match(/"https:\/\/m.wsj.net\/audio[\s\S]*?\.mp3"/g)[0];
str = document.documentElement.innerText;
str=str.match(/FULL TRANSCRIPT[\s\S]*?Looking for more episodes/g)[0].replace('FULL TRANSCRIPT','').replace('Looking for more episodes','');
let txt=str.replace(/\."/g,'".').replace(/\./g,'.\r\n').replace(/\?/g,'?\r\n');
let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = name+'.txt';
link.click();
alert('["'+name+'",'+audio+',0],');
})();


///////EUDIC

javascript:(function(){
let str=document.documentElement.innerHTML;
let name=str.match(/<h1>[\s\S]*?<\/h1>/g)[0].replace(/<h1>[\s\S]*? /g,'').replace('</h1>','');
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
let a=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','["').replace('</title>','","').replace(/[\:\?]/g,'');
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
let filename=str.match(/<title>[\s\S]*?<\/title>/g)[0].replace('<title>','').replace('</title>','.txt').replace(/[\:\?]/g,'');
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
