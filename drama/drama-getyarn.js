javascript: (async()=>{
  
let url='https://y.yarn.co/200103_nn.mp4';
const code0=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Media Player</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
    <style>.sticky-top, .fixed-bottom{background-color:#FFF}.table-hover tbody tr:hover td, .table-hover tbody tr:hover th{color:green}.h{display:none}.s{font-size:0.7rem}video{margin-right:auto;margin-left:auto;width:100%}
    </style>
</head>
<body>
<div id="container" class="my-2 mx-auto align-content-center" style="max-width:500px">
    <div id="top" class="sticky-top">
        <video id="vp" controls preload="auto" playsinline src="`+url+`"></video>
    </div>
    <div id="echo" class="mx-2">
        <table class="table">
            <tbody id="lines">`;

var response=await fetch('https://raw.githubusercontent.com/wuzhiguocarter/English-Learning-Tool/master/subtitles/himym/s01/How%20I%20Met%20Your%20Mother%20-%201x07%20-%20Matchmaker.en.srt');
var str=await response.text();
var data=str.split('\n');
var txt='<tr>';
var c=1;
for (var i=0;i<data.length-12;i++){
if(data[i]==c){
  txt+='<td class="s fw-lighter">' + data[i] + '</td>';
  c=c+1;
} else if (/\d\d\:\d\d\:/.test(data[i])){
  txt+='<td class="h">' +s2n(data[i].slice(0,12).replace(',','.'))+'</td><td class="tl">';
} else if (data[i]==''){}
else {
  txt+=data[i];
  if (data[i+1]==''){txt+='</td></tr>'}
} 

}
txt=txt+'<tr class="h"><td></td><td>36000</td><td></td></tr>';

function s2n(a) {
    n = a.split(":");
    n = parseInt(n[0]) * 3600 + parseFloat(n[1])*60+parseFloat(n[2])+1.5;
    return n.toFixed(3);
}

const code1=`</tbody>
  </table>
</div>
</div>

<script>
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

let audio=document.getElementById('vp');
audio.currentTime=startTime;
audio.play();
audio.ontimeupdate = function(){
  if (audio.currentTime > endTime){
    audio.pause();
              }  
            }
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