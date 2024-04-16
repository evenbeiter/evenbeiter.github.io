var captionLines=window.__NUXT__.data[0].video.captionLines;
var startAt=0;
var originalText='';
var translatedText='';
for (var i=0;i<captionLines.length;i++){
  startAt=captionLines[i].startAt;
  originalText=captionLines[i].originalText.text;
  translatedText=captionLines[i].translatedText.text;
  console.log(startAt+originalText+translatedText)
}
