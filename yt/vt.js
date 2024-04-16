
let data=window.__NUXT__.data[0];
let title=data.video.title;
let id=data.video.youtubeId;
let captionLines=data.video.captionLines;
var startAt=0;
var originalText='';
var translatedText='';
var txt='';
if (data.analytics.properties.video_translated==true){
  for (var i=0;i<captionLines.length;i++){
    startAt=captionLines[i].startAt;
    originalText=captionLines[i].originalText.text;
    translatedText=captionLines[i].translatedText.text;
    txt=txt+timeMark(startAt)+originalText+'<br>'+translatedText+'\r\n';
  }
} else {
    for (var i=0;i<captionLines.length;i++){
    startAt=captionLines[i].startAt;
    originalText=captionLines[i].originalText.text;
    txt=txt+timeMark(startAt)+originalText+'\r\n';
  }
}

function timeMark(sec){
    let mm=Math.floor(sec/60);
    let ss=sec-mm*60;
    ss=ss.toFixed(2);
    return '['+[("0"+mm).slice(-2),("0"+ss).slice(-5)].join(':')+']';
}

alert('["'+title+'","'+id+'"],');

var txtData = new Blob([txt], { type: 'data:text/csv;charset=utf-8' });
var txtUrl = URL.createObjectURL(txtData); 
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = title+'.txt';
link.click();






