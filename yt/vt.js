
javascript:(function(){

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

<div id="container" class="m-2">
    <div id="top" class="sticky-top">
        <div id="video-placeholder"></div>
    </div>
    <div id="echo" class="">
        <p id="src" class="h"></p>
        <table class="table">
            <tbody id="lines">`;

//txt

const code1=`</tbody>
        </table>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
<script src="https://www.youtube.com/iframe_api"></script>`;

let data=window.__NUXT__.data[0];
//let title=data.video.title;
let mediaSrc=data.video.youtubeId;
let captionLines=data.video.captionLines;
var startAt=0;
var originalText='';
var translatedText='';
var txt='';
var j=0;
if (data.analytics.properties.video_translated==true){
  for (var i=0;i<captionLines.length;i++){
    startAt=captionLines[i].startAt;
    originalText=captionLines[i].originalText.text;
    translatedText=captionLines[i].translatedText.text;
    txt=txt+'<tr><td class="s fw-lighter">' + (++j) + '</td><td class="h">' + startAt +'</td><td>' + originalText+'<br>'+translatedText + '</td></tr>';
  }
} else {
    for (var i=0;i<captionLines.length;i++){
    startAt=captionLines[i].startAt;
    originalText=captionLines[i].originalText.text;
    txt=txt+'<tr><td class="s fw-lighter">' + (++j) + '</td><td class="h">' + startAt +'</td><td>' + originalText+ '</td></tr>';
  }
}


const code2=`<script>

var player, stopPlayAt=0, stopPlayTimer;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        height: '200', 
        width: '100%',
        videoId: '`;

//mediaSrc

const code3=`',
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

$(function(){
  $(document).on("click", "#lines tr", function(e) {
      console.log('clicked');
      $('#lines tr').css({'color':'','background-color':''});
      $(this).css({'color':'green','background-color':'#E5E4E2'});
      let startTime=Number($(this).children(':nth-child(2)').text());
      let endTime=Number($(this).next().children(':nth-child(2)').text());

      stopPlayAt=endTime;
      player.seekTo(startTime);
      player.playVideo();
      
  });
});

</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</body>
</html>`;

win=window.open('','','');void(win.document.write(code0+txt+code1+code2+mediaSrc+code3));

})();










/////////////////////////////////////////////////////
//
// GET VT PAGE
//
/////////////////////////////////////////////////////








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






