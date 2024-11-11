var date=window.location.href.slice(-8);
var li=document.getElementsByClassName('_txt_origin_wrap');
var ex=document.getElementsByClassName('example_lst')[0].children;
var res=await fetch(`https://evenbeiter.github.io/wiki/korean/${date}.json`);
var str=await res.json();
for (var i=0;i<li.length;i++){
    li[i].outerHTML+=`<div style="margin-left:3rem;line-height:1.3rem;color:grey">${str[i]}</div><br>`
}
for (var i=0;i<ex.length;i++){
    ex[i].outerHTML+=`<div style="margin-left:3rem;line-height:1.3rem;color:grey">${str[li.length+i-1]}</div><br>`
}
