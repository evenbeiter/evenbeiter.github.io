javascript:(async()=>{

const code0=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Media Player</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
    <style>.sticky-top, .fixed-bottom{background-color:#FFF}.table-hover tbody tr:hover td, .table-hover tbody tr:hover th{color:green}.h{display:none}.s{font-size:0.7rem}
    </style>
</head>
<body>
<div id="container" class="my-2 mx-auto align-content-center" style="max-width:500px">
    <div id="top" class="sticky-top">
        <div id="video-placeholder"></div>
    </div>
    <div id="echo" class="mx-2">
        <table class="table">
            <tbody id="lines">`;

var txt='';
var c=0;
var kr='';
var en='';
var ct=[];
var mediaSrc=window.ytInitialPlayerResponse.videoDetails.videoId;
if (window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer.captionTracks!==undefined){
  ct=window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer.captionTracks;
}
if(ct.find(item=>item.vssId=='.ko')){
  kr=ct.find(item=>item.vssId=='.ko').baseUrl;
} 
else if (ct.find(item=>item.vssId=='a.ko')){
  kr=ct.find(item=>item.vssId=='a.ko').baseUrl;
}

let response=await fetch(kr);
let str=await response.text();
let data=new window.DOMParser().parseFromString(str,'text/xml').querySelectorAll('text');
for (var i=0;i<data.length;i++){
  txt += '<tr><td class="s fw-lighter">' + (++c) + '</td><td class="h">' + data[i].attributes[0].value +'</td><td class="tl">' + d(data[i].textContent.replace('\n',' ')) + '</td></tr>';
}

function d(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

txt=txt+'<tr class="h"><td></td><td>36000</td><td></td></tr>';

const code1=`</tbody>
  </table>
</div>
</div>
<script src="https://www.youtube.com/iframe_api"></script>
<script>
var player, stopPlayAt=0, stopPlayTimer;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        height: '200',
        width: '100%',
        videoId: '`+mediaSrc+`',
        playerVars:{
            rel:0
        },
        events: {
            onStateChange: onPlayerStateChange
        }
    });
}

function pauseVideo(){
    player.pauseVideo();
}

function onPlayerStateChange(event){
    var time, rate, remainingTime;
    clearTimeout(stopPlayTimer);
    if (event.data == YT.PlayerState.PLAYING){
        time=player.getCurrentTime();
        if (time+.4<stopPlayAt){
            rate=player.getPlaybackRate();
            remainingTime=(stopPlayAt-time)/rate;
            stopPlayTimer=setTimeout(pauseVideo, remainingTime*1000);
        }
    }
}

document.getElementById('lines').addEventListener('click', function (e) {
  if(e.target.nodeName === 'TD') {
      var selectedRow = e.target.parentElement;
      if (selectedRow) {
        var tr=document.querySelectorAll('tr');
        for (var i=0;i<tr.length;i++){
            tr[i].style.color='';
            tr[i].style.backgroundColor='';
        }
          selectedRow.style.color='green';
          selectedRow.style.backgroundColor='#E5E4E2';

          let startTime=Number(e.target.parentElement.children[1].textContent);
          let endTime=Number(e.target.parentElement.nextElementSibling.children[1].textContent);

          stopPlayAt=endTime;
          player.seekTo(startTime);
          player.playVideo();
      }
  }
});
document.close();
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</body>
</html>`;

win=window.open('','','');void(win.document.write(code0+txt+code1));

})();