javascript:(async()=>{
const code0=`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="screen-orientation" content="portrait">
<meta name="x5-orientation" content="portrait">
<title>Video List</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<style>img{height:40px}.s{font-size:12px}</style>
</head>
<body>
  <div class="m-2">
    <p class="ms-2 fw-bold">Video List</p>
    <table class="table table-hover">
      <tbody id="data-list">`;
var word=prompt('Enter Word:');
var response=await fetch('https://vtapi.voicetube.com/v2.2/words/'+word+'/videos?platform=Web&language=zh-TW&pageLimit=100&pageOffset=0',{
  method:'GET',
  headers:{'Content-type':'application/json','Authorization':'Bearer $2y$05$KyQwiGx4kZ3ok1lJsQuIV.3FOxcuZyFzH7bW/7Eb1vin6Prh78Xr.'}
})
var raw=await response.json();
var pages=Math.ceil(raw.data.total/100);
var data=[];
for (var i=0;i<pages;i++){
  response=await fetch('https://vtapi.voicetube.com/v2.2/words/'+word+'/videos?platform=Web&language=zh-TW&pageLimit=100&pageOffset='+i*100,{
  method:'GET',
  headers:{'Content-type':'application/json','Authorization':'Bearer $2y$05$KyQwiGx4kZ3ok1lJsQuIV.3FOxcuZyFzH7bW/7Eb1vin6Prh78Xr.'}
})
  raw=await response.json();
  data.push(...raw.data.items);
};
var txt='';
var cap='';
for (var i=0;i<data.length;i++){
  cap='';
  if (data[i].isTranslated==true){
    for (var j=0;j<data[i].captionLines.length;j++){
      cap+=data[i].captionLines[j].originalText.text +'<br>' + data[i].captionLines[j].translatedText.text +'<br>';
    }} else {
    for (var j=0;j<data[i].captionLines.length;j++){    
      cap+=data[i].captionLines[j].originalText.text+'<br>';      
  }}
  txt += '<tr><td><span class="me-1 px-1 bg-secondary text-white s">'+data[i].cefrLevel+'</span><span class="s">'+data[i].durationText+'</span><br><a href="https://tw.voicetube.com/videos/'+data[i].id+'" target="_blank">'+data[i].title+'</a><br>'+cap+'</td></tr>';
}
const code1=`</tbody>
    </table>
  </div>
  <script>document.close();</script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https:cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
  </body>
</html>`;
win=window.open('','','');void(win.document.write(code0+txt+code1));
})();
