//https://root.eng.tw/

var res = await fetch(window.location.href);
var str=await res.text();
var data=str.match(/(?<=<a class='post-count-link' href=')[\s\S]*?_archive.html/g);
var urls=data.map((x) => x.replace(/https:\/\/root.eng.tw[\s\S]*?class='post-count-link' href='/g,''));

var roots=[];
var items,ols;

for (let url of urls){
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var rt=doc.querySelectorAll('h3');
  if (rt.length!==0){
    var content=doc.querySelectorAll('.entry-content');
    for (var c=0;c<content.length;c++){
      if (content[c].innerText!==''){
      var list=[];
      var vocab=[];

      items=content[c].querySelectorAll('li');
      for (let li of items){
          ols=li.querySelectorAll('ol');
          for (let ol of ols){
              vocab.push([ol.querySelector('a').textContent,ol.lastChild.textContent]);
          }
          list.push({build:li.innerText,vocab:vocab})
      }
      roots.push({root:rt[c].innerText, des:content[c].outerHTML.match(/(?<=itemprop="description articleBody">)[\s\S]*?(?=<ul>)/g)[0],list:list});
      }
    }
  }
}
var csv=JSON.stringify(roots);
console.log(csv);

var csvData = new Blob([csv], { type: 'data:text/csv;charset=utf-8' });
var csvUrl = URL.createObjectURL(csvData);
 
let link = document.createElement('a');
link.href = csvUrl;
link.target = '_blank';
link.download = 'roots.txt';
link.click();
