
////////////////////////////
// GET YARN LINES & VIDEOS
////////////////////////////

var txt='[';
var response=await fetch(window.location.href);
var str=await response.text();

let name=str.match(/videoTitle:"[\s\S]*?"/g)[0].replace('videoTitle:"','').replace('"','');
console.log(name);
var title=str.match(/og:title" content[\s\S]*?">/g)[0].replace('og:title" content=','').replace('>',',');
var video=str.match(/og:video:url" content[\s\S]*?\?/g)[0].replace('og:video:url" content=','').replace('?','"');
console.log('['+title+video+']');
txt=txt+'['+title+video+']';

var next=str.match(/Next Clip" href="[\s\S]*?"/g)[0].replace('Next Clip" href="','https://getyarn.io').replace('"','');

do {
response=await fetch(next);
str=await response.text();
var title=str.match(/og:title" content[\s\S]*?">/g)[0].replace('og:title" content=','').replace('>',',').replace(/&quot;/g,'').replace(/&amp;/g,'&').replace(/&#x27;/g,'\'');
var video=str.match(/og:video:url" content[\s\S]*?\?/g)[0].replace('og:video:url" content=','').replace('?','"');
console.log('['+title+video+']');
txt=txt+',\r\n['+title+video+']';

next=str.match(/Next Clip" href="[\s\S]*?"/g)[0].replace('Next Clip" href="','https://getyarn.io').replace('"','');
}
while (str.match(/Next Clip" href="[\s\S]*?"/g)[0]!=='Next Clip" href="/yarn-clip/null/gif')

txt=txt+']';

// txt=txt.replace(/&quot;/g,'').replace(/&amp;/g,'&').replace(/&#x27;/g,'\'');

console.log(txt);

let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = name+'.txt';
link.click();


////////////////
////////////////


javascript: (async()=>{

var response=await fetch(window.location.href);
var str=await response.text();

let name=str.match(/videoTitle:"[\s\S]*?"/g)[0].replace('videoTitle:"','').replace('"','');
let filename=name.replace(/ /g,'');

let head = '<!DOCTYPE html><html><head><meta http-equiv=""Content-Type"" content=""text/html; charset=UTF-8"" name=""viewport"" content=""width=device-width, initial-scale=1"><title>'+name+'</title><style>body {font-family: Calibri, Microsoft JhengHei, sans-serif; background: #f2f2f2; padding: 0.7em;font-size=50px;}h1, h2, h3, h4, h5, h6, p {color: navy; font-weight: bold;font-size: 2.5em;}audio {display:block;float:right;max-width:100px;}table{border-collapse:collapse;}table tr{border-bottom:2px solid grey;}</style></head><body>';
var content='<div class="container"><table>';

var title='<td><p>[1] '+str.match(/og:title" content[\s\S]*?">/g)[0].replace('og:title" content="','').replace('">','</p></td>');
var video=str.match(/og:video:url" content[\s\S]*?.mp4/g)[0].replace('og:video:url" content=','<td><audio controls preload="auto"><source src=').replace('.mp4','.mp4"/></audio></td>');
content=content+'<tr>'+title+video+'</tr>';

var next=str.match(/Next Clip" href="[\s\S]*?"/g)[0].replace('Next Clip" href="','https://getyarn.io').replace('"','');

var i=2;
do {
response=await fetch(next);
str=await response.text();
var title='<td><p>['+i+'] '+str.match(/og:title" content[\s\S]*?">/g)[0].replace('og:title" content="','').replace('">','</p></td>');
var video=str.match(/og:video:url" content[\s\S]*?.mp4/g)[0].replace('og:video:url" content=','<td><audio controls preload="auto"><source src=').replace('.mp4','.mp4"/></audio></td>');
content=content+'<tr>'+title+video+'</tr>';

i=i+1;
next=str.match(/Next Clip" href="[\s\S]*?"/g)[0].replace('Next Clip" href="','https://getyarn.io').replace('"','');
}
while ((i<201) && (next!=='https://getyarn.io/yarn-clip/null'))

win=window.open('','','');void(win.document.write(head+content+'</table></div></body></html>'));

let link = document.createElement('a');
link.href = 'data:text/html;charset=utf-8,'+ encodeURIComponent(head+content+'</div></body></html>');
link.target = '_blank';
link.download = filename+'.html';
link.click();

})();
