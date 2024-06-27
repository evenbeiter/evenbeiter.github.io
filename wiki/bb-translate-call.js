javascript:(async()=>{

const code0=`
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TRANSLATE</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <style>
    body {background-color:#F4ECD8;color:#5B4636;font-size:1.3rem}
    .content{display:none;cursor:pointer}
    .sepia{background-color:#F4ECD8;color:#5B4636}
    .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
    h1,h2,h3,h4,h5,h6,.title{font-size:1.3rem;color:#3B2D20 !important;font-weight:bold}
    a{word-wrap:break-word;white-space:normal;overflow-wrap:break-word;word-break:break-word}
    h1 a {color: navy; font-weight: bold; text-decoration:none;cursor:pointer}
    figcaption{font-size:1rem}
    img{display:block !important;margin:auto;width:100%;height:auto}
    @media (min-width:768px){
      @font-face{font-family:"Microsoft JhengHei Bold";src:local("Microsoft JhengHei Bold");unicode-range:U+4E00-9FFF}
      body {background-color:#F4ECD8;color:#5B4636;font-size:1.2rem;font-family:arial,'Microsoft JhengHei Bold', sans-serif !important}
      h1,h2,h3,h4,h5,h6,.title{font-size:1.2rem;color:#3B2D20 !important;font-weight:normal}
    }
  </style>
</head>
<body>

<div class="m-auto" style="max-width:600px">
  <div id="output" class="m-3">
  `;
var txt='';
var lines=document.getElementsByClassName('transcript-container')[0].innerText.split('\n');
for (let line of lines){
  if (/\d\d:\d\d/.test(line)==true){
    txt+=`<p>${line}</p>`;
  } else if (line!==''){    
    txt+=`<p>${line}<br>${await translate(line)}</p>`;
  }
}

async function translate(a){
var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+encodeURIComponent(a);
var res=await fetch(url);
var raw=await res.json();
var ts='';
for (var j=0;j<raw[0].length;j++){
    ts=ts+raw[0][j][0];
}
    return ts
}

const code1=`</div>
<script>document.close()</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</body>
</html>
`;

win=window.open('','','');void(win.document.write(code0+txt+code1));
})();
