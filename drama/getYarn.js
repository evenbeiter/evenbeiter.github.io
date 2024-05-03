

let ids=[188098,397,188099,188100,200089,200096,200103,200109,210347,368,200123,200132,200140,200147,200153,200164,369,200173,200185,200198,200210,200220,200226,200234,200240,200250,200256,187841,200263,200272,445,200279,200285,200291,200296,200303,200310,200314,200319,412,200325,200333,414,200339,408,200346,200351,392,200357,386,200372,200393,200416,200423,469,200431,510,200441,200446,491,200449,200458,200464,191267,200472,443,200474,529,200488,465,200491,447,200497,200502,200505,200516,200522,404,200527,200533,200535,200539,200544,370,200546,364,200549,383,200551,375,200560,350,200565,200567,200573,200580,200596,200606,200613,355,200617,200627,200629,200630,200631,200634,200635,200636,200637,200638,200640,200644,200650,200653,200655,200660,200662,200694,200709,200710,483,200711,200713,200714,200716,200717,200719,200721,200727,200728,209129,426,209131,209169,209176,209207,209209,430,209216,209221,485,209238,209251,209259,209261,209278,209291,421,209313,209328,209334,209345,209368,209384,209391,209411,209423,422,209429,406,209431,209471,209472,209493,209506,209512,209534,209555,209558,209566,209590,209598,209603,209617,497,209629,209635,209648,209657,209668,209669,209678,209685,209693,209701,209706,209727,209736,432,209743,209774,209775,209791,209817,209835,209866,209881,209925,209938,209940,209939,209944,209947,209965,209987,209990,209992,210004,210012,210015,210033,210043,210067,210070,210077,558,210086,210088,210090,210092,210093,210105,210107,530,210108,210113,210120,210127,210146,210147,210161,210222,210228,210249,210250,210261,210270,210266,210311,210326,210345];
ids=ids.filter(e => e>10000);
console.log(ids.length)

let i=[188098,397,188099,188100,200089,200096,200103,200109,210347,368,200123,200132,200140,200147,200153,200164,369,200173,200185,200198,200210,200220,200226,200234,200240,200250,200256,187841,200263,200272,445,200279,200285,200291,200296,200303,200310,200314,200319,412,200325,200333,414,200339,408,200346,200351,392,200357,386,200372,200393,200416,200423,469,200431,510,200441,200446,491,200449,200458,200464,191267,200472,443,200474,529,200488,465,200491,447,200497,200502,200505,200516,200522,404,200527,200533,200535,200539,200544,370,200546,364,200549,383,200551,375,200560,350,200565,200567,200573,200580,200596,200606,200613,355,200617,200627,200629,200630,200631,200634,200635,200636,200637,200638,200640,200644,200650,200653,200655,200660,200662,200694,200709,200710,483,200711,200713,200714,200716,200717,200719,200721,200727,200728,209129,426,209131,209169,209176,209207,209209,430,209216,209221,485,209238,209251,209259,209261,209278,209291,421,209313,209328,209334,209345,209368,209384,209391,209411,209423,422,209429,406,209431,209471,209472,209493,209506,209512,209534,209555,209558,209566,209590,209598,209603,209617,497,209629,209635,209648,209657,209668,209669,209678,209685,209693,209701,209706,209727,209736,432,209743,209774,209775,209791,209817,209835,209866,209881,209925,209938,209940,209939,209944,209947,209965,209987,209990,209992,210004,210012,210015,210033,210043,210067,210070,210077,558,210086,210088,210090,210092,210093,210105,210107,530,210108,210113,210120,210127,210146,210147,210161,210222,210228,210249,210250,210261,210270,210266,210311,210326,210345];
console.log(i.length)


////////////////
////////////////


javascript: (async()=>{
  
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

while (next!=='https://getyarn.io/yarn-clip/null' && next!==undefined) {
response=await fetch(next);
str=await response.text();
title=str.match(/og:title" content[\s\S]*?">/g)[0].replace('og:title" content=','').replace('>',',').replace(/&quot;/g,'').replace(/&amp;/g,'&').replace(/&#x27;/g,'\'');
video=str.match(/og:video:url" content[\s\S]*?\?/g)[0].replace('og:video:url" content=','').replace('?','"');
console.log('['+title+video+']');
txt=txt+',\r\n['+title+video+']';
next=str.match(/Next Clip" href="[\s\S]*?"/g)[0].replace('Next Clip" href="','https://getyarn.io').replace('"','');
}

txt=txt+']';
// txt=txt.replace(/&quot;/g,'').replace(/&amp;/g,'&').replace(/&#x27;/g,'\'');

let txtData = new Blob([txt], { type: 'data:text;charset=utf-8' });
let txtUrl = URL.createObjectURL(txtData);
let link = document.createElement('a');
link.href = txtUrl;
link.target = '_blank';
link.download = name+'.txt';
link.click();

})();



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
