
javascript: (async()=>{
var li=[...document.getElementsByClassName('_txt_origin_wrap'),...document.getElementsByClassName('example_lst')[0].children];
var txt='逐字詳細解析以下句子的單詞活用、文法和句型。把每個韓文句子的每段解析都寫成用 <p> 標籤包裹的HTML格式，並以標準字體顯示。最後再把所有的HTML寫成JSON格式，每一個韓文句子為JSON的一個項目。';
for (var i=0;i<li.length;i++){
    txt+=`${i+1}. ${li[i].innerText.slice(0,li[i].innerText.indexOf('\n'))} `;
}
})();



javascript: (async()=>{
document.getElementById('main').style.height="6000px";
var date=window.location.href.slice(-8);
var li=[...document.getElementsByClassName('_txt_origin_wrap'),...document.getElementsByClassName('example_lst')[0].children];
var res=await fetch(`https://evenbeiter.github.io/wiki/korean/${date}.json`);
var str=await res.json();
for (var i=0;i<li.length;i++){
    li[i].outerHTML+=`<div style="margin-left:3rem;line-height:1.3rem;color:grey">${str[i]}</div><br>`
}
})();