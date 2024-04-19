javascript:(function(){

  const title=window.__NEXT_DATA__.props.pageProps.videoData.title;
  var url=JSON.parse(window.__NEXT_DATA__.props.pageProps.videoData.playerData).resources.h264[0].file;

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
          <video id="vp" width="100%" height="200px" controls preload="auto" playsinline ><source src="`+url+`" type="video/mp4" /></video>
      </div>
      <div id="echo" class="">
          <p id="src" class="h"></p>
          <table class="table">
              <tbody id="lines">`;

var txt='';
var c=0;
const data=window.__NEXT_DATA__.props.pageProps.transcriptData.translation.paragraphs;
for (var i=0;i<data.length;i++){
  var p=data[i].cues;
  for (var j=0;j<p.length;j++){txt += '<tr><td class="s fw-lighter">' + (++c) + '</td><td class="h">' + p[j].time/1000 +'</td><td>' + p[j].text + '</td></tr>';
  }
}
txt=txt+'<tr class="h"><td></td><td>36000</td><td></td></tr>';

  const code1=`</tbody>
  </table>
</div>
</div>
<script>

function startPlay(startTime,endTime){
  var vp=document.getElementById('vp');
  vp.currentTime=startTime;
  vp.play();
  vp.ontimeupdate = function(){
    if (vp.currentTime > endTime){
        vp.pause();
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

          let startTime=Number(e.target.parentElement.children[1].textContent)+4;
          let endTime=Number(e.target.parentElement.nextElementSibling.children[1].textContent)+4;

          startPlay(startTime,endTime);
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