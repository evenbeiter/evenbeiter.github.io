javascript:(async()=>{

let a = Number(prompt("Please input delay time in ms."));

let response = await fetch(window.location.href);
let str = await response.text();
let raw=str.match(/transcriptData":[\s\S]*?video":{/g)[0].replace(/\\n/g,' ').replace('transcriptData":{"translation":','').replace(',"video":{','');
let data=JSON.parse(raw);

var txt='';
for(var i=0;i<data["paragraphs"].length;i++){
  for(var j=0;j<data["paragraphs"][i].cues.length;j++){
    var t=data["paragraphs"][i].cues[j]["time"];console.log(t+', '+(t+a));console.log(timestamp(t+a));
    txt=txt+timestamp(t+a)+data["paragraphs"][i].cues[j]["text"]+'\r\n';
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
link.download = 'txt.lrc';
link.click();

})();