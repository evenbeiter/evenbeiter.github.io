const ym='202304';
const twd=30.743;

const item=['本期申購', 'Sales Impact', '本期AUM', '本期台灣比重'];//bdeg
//const item=[ym + ' GS', ym + ' NS', ym + ' AUM', ym + ' TW'];//bdeg
//const item=['GS', 'NS','AUM','TW'];//bdeg

var fRow=[];
var doList=[];


//境內最新(小計後) https://announce.fundclear.com.tw/MOPSonshoreFundWeb/INQ711.jsp

var getAgt=await fetch('https://announce.fundclear.com.tw/MOPSonshoreFundWeb/INQ711.jsp?_sm_byp=iVVJJpbnDD5n7V5R');
var getAgtStr=await getAgt.text();
var agtHtml=getAgtStr.match(/<select[\s\S]*?<\/select>/g)[0];

//var agentList=['A0018'];
var agentList=agtHtml.match(/<option value="[\s\S]*?"/g); var first=agentList.shift();console.log('Number of onshore agents is '+agentList.length);
doList=agentList;

do{
var agentList=doList; doList=[];
for (var z=0;z<agentList.length;z++){agentList[z]=agentList[z].replace('<option value="','').replace('"','')}; console.log(agentList);

//const item=['GS', 'NS','AUM','TW'];//bde&g
//var fRow=[];

for (var n=0;n<agentList.length;n++){

grecaptcha.ready(function() {grecaptcha.execute('6Le_-cwUAAAAAMOhuVQifEh-yxgKJLlm0zbfvgiN', {action:'validate_captcha'}).then(function(token) {
document.frmE02.btnQuery.disabled = true;
document.frmE02.g_response.value = token;
document.frmE02.btnQuery.disabled = false})});

var page=await fetch('https://announce.fundclear.com.tw/MOPSonshoreFundWeb/INQ711.jsp?agentNo='+agentList[n]+'&fundcomNo=&fundCode=all&commit=1&fundClassType=2&g_response='+document.frmE02.g_response.value);
var str=await page.arrayBuffer();
str=new TextDecoder('BIG5').decode(str);
//var str=await page.text();
var count=0;
if (str.match(/return false">/g)!==null){if (str.match(/return false">/g).length%8==0){count=str.match(/return false">/g).length/8}else {count=Math.round(str.match(/return false">/g).length/8)-1};

var a=[];var b=[];var d=[];var e=[];var g=[];var aa='';var bb='';var dd='';var ee='';

for (var i=0;i<count;i++){
aa=str.match(/fundId[\s\S]*?'/g)[i].replace('fundId=','').replace(/'/g,'');
if ('\''+aa.slice(0,8)==a[a.length-1]){
b[b.length-1]+=Number(str.match(/return false">[\s\S]*?<\/a>/g)[8*i+1].replace('return false">','').replace('</a>','').replace(',',''))/twd;
d[d.length-1]+=Number(str.match(/return false">[\s\S]*?<\/a>/g)[8*i+3].replace('return false">','').replace('</a>','').replace(',',''))/twd;
e[e.length-1]+=Number(str.match(/return false">[\s\S]*?<\/a>/g)[8*i+4].replace('return false">','').replace('</a>','').replace(',',''))/twd;
}else{
a.push('\''+aa.slice(0,8));
b.push(Number(str.match(/return false">[\s\S]*?<\/a>/g)[8*i+1].replace('return false">','').replace('</a>','').replace(',',''))/twd);
d.push(Number(str.match(/return false">[\s\S]*?<\/a>/g)[8*i+3].replace('return false">','').replace('</a>','').replace(',',''))/twd);
e.push(Number(str.match(/return false">[\s\S]*?<\/a>/g)[8*i+4].replace('return false">','').replace('</a>','').replace(',',''))/twd);
g.push(1);
}};

for (var k=0;k<a.length;k++){fRow.push([a[k], b[k], d[k], e[k], g[k]])}

}else{doList.push(agentList[n]);console.log(agentList[n])}};

}while(doList.length>0); //do while loop

console.log('Number of onshore funds is ' + fRow.length);


doList=[];

//境外最新 https://announce.fundclear.com.tw/MOPSFundWeb/INQ711.jsp

var getAgt=await fetch('https://announce.fundclear.com.tw/MOPSFundWeb/INQ711.jsp?&_sm_byp=iVVJJpbnDD5n7V5R');
var getAgtStr=await getAgt.text();
var agtHtml=getAgtStr.match(/<\/select>[\s\S]*?<\/select>/g)[0];
//var agentList=['023','077','085'];
var agentList=agtHtml.match(/<option value="[\s\S]*?"/g); var first=agentList.shift();console.log('Number of offshore agents is '+agentList.length);
//var index=agentList.indexOf('<option value="120"'); var removeItem=agentList.splice(index,1); ///////////////////////////////////////////////////////////////////////CHECK WHETHER NEEDED
doList=agentList;

do{
var agentList=doList; doList=[];
for (var z=0;z<agentList.length;z++){agentList[z]=agentList[z].replace('<option value="','').replace('"','')}; 
console.log(agentList);

for (var n=0;n<agentList.length;n++){

grecaptcha.ready(function() {grecaptcha.execute('6Le_-cwUAAAAAMOhuVQifEh-yxgKJLlm0zbfvgiN', {action:'validate_captcha'}).then(function(token) {
document.frmE02.btnQuery.disabled = true;
document.frmE02.g_response.value = token;
document.frmE02.btnQuery.disabled = false})});

var a='';var b='';var d='';var e='';var g='';

var page=await fetch('https://announce.fundclear.com.tw/MOPSFundWeb/INQ711.jsp?agentNo='+agentList[n]+'&fundcomNo=all&fundCode=&commit=1&fundClassType=1&g_response='+document.frmE02.g_response.value);
var str=await page.arrayBuffer();
str=new TextDecoder('BIG5').decode(str);
//var str=await page.text();
var count=0;
if (str.match(/return false">/g)!==null){if (str.match(/return false">/g).length%9==0){count=str.match(/return false">/g).length/9}else {count=Math.round(str.match(/return false">/g).length/9)-1};

for (var i=0;i<count;i++){
var a='\''+str.match(/&fundCode[\s\S]*?'/g)[i+1].replace('&fundCode=','').replace(/'/g,'');
var b=Number(str.match(/return false">[\s\S]*?<\/a>/g)[9*i+1].replace('return false">','').replace('</a>','').replace(',',''))/twd;
//var c=Number(str.match(/return false">[\s\S]*?<\/a>/g)[9*i+2].replace('return false">','').replace('</a>','').replace(',',''))/twd;
var d=Number(str.match(/return false">[\s\S]*?<\/a>/g)[9*i+3].replace('return false">','').replace('</a>','').replace(',',''))/twd;
var e=Number(str.match(/return false">[\s\S]*?<\/a>/g)[9*i+4].replace('return false">','').replace('</a>','').replace(',',''))/twd;
//var f=str.match(/return false">[\s\S]*?<\/a>/g)[9*i+5].replace('return false">','').replace('</a>','');
var g=Number(str.match(/return false">[\s\S]*?<\/a>/g)[9*i+6].replace('return false">','').replace('</a>','').replace(',',''))/100;

fRow.push([a,b,d,e,g]);

}} else if (str.match(/序號/g)!==null){console.log('no data for '+agentList[n])} ////////////////////////////////CHECK THIS LINE

else {doList.push(agentList[n]);console.log(agentList[n])}}

}while(doList.length>0); //do while loop

console.log('Number of onshore + offshore funds is ' + fRow.length);


let infoHeader=['Fund Code'];
let arrayHeader = infoHeader.concat(item);

let arrayData = fRow;
let header = arrayHeader.join(',') + '\r\n';
var csv = header;
arrayData.forEach( array => {csv += array.join(',')+"\r\n"});
var csvData = new Blob([csv], { type: 'data:text/csv;charset=utf-8' });
var csvUrl = URL.createObjectURL(csvData);
 
let link = document.createElement('a');
link.href = csvUrl;
link.target = '_blank';
link.download = ym + '.csv';
link.click();

