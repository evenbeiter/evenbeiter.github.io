javascript:(async()=>{

var name=prompt('Name:');
var url=window.location.href;
var content=[];
var book={book:book,url:url,content:content};
var id,res,str,parser,doc,imgs,h,c,n;

url=await getContent(url);
do {url=await getContent(url)} while (url!=='');

console.log(book);

async function getContent(url){
id=url.slice(-13,-5);
res=await fetch(url);
str=await res.text();
parser=new DOMParser();
doc=parser.parseFromString(str,'text/html');
h=doc.querySelector('h1').innerHTML;
imgs=doc.images;
for (let img of imgs){
    if (img.alt!==''){
        img.outerHTML+=`<p class="s">註：${img.alt}</p><br>`;
    }
};
c=doc.querySelector('#artWrap').outerHTML.replaceAll('https://imgs.aixifan.com/FhmlfrzZOkKZooXIPOViZXnGRF6Y','');
if (doc.querySelector('#nexturl').href.indexOf('javascript')==-1){n=doc.querySelector('#nexturl').href}else{n=''};
content.push({id:id,u:url,h:h,c:c,n:n});
return n;
}

var csv=JSON.stringify(book);
var csvData=new Blob([csv],{type:'data:text/csv;charset=utf-8'});
var csvUrl=URL.createObjectURL(csvData);
let link=document.createElement('a');
link.href=csvUrl;
link.target='_blank';
link.download=name+'.json';
link.click();

})();
