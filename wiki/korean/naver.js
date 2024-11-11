
javascript: (async()=>{
var li=[...document.getElementsByClassName('_txt_origin_wrap'),...document.getElementsByClassName('example_lst')[0].children];
var txt='逐字詳細解析以下句子包括單詞活用、文法和句型三大段說明。並把每段說明的標題(單詞活用、文法、句型)和說明的內文都寫成用p標籤包裹的HTML格式，標題和各單詞及文法和句型的說明都自成一個p標籤，每個單詞的活用說明也都是各自獨立的p標籤；標題用粗體、內文用標準字體顯示。最後再把所有的HTML寫成JSON格式，每一個韓文句子的解析整合為一個字串(裡面應該會包含多個p標籤)，成為JSON的一個項目。<br>';
for (var i=0;i<li.length;i++){
    txt+=`${i+1}. ${li[i].innerText.slice(0,li[i].innerText.indexOf('\n'))} <br>`;
}
win=window.open('','','');void(win.document.write(txt));
})();



javascript: (async()=>{
document.getElementById('main').style.height="6000px";
var date=window.location.href.slice(-8);
var li=[...document.getElementsByClassName('_txt_origin_wrap'),...document.getElementsByClassName('example_lst')[0].children];
var res=await fetch(`https://evenbeiter.github.io/wiki/korean/${date}.json`);
var str=await res.json();
for (var i=0;i<li.length;i++){
    li[i].outerHTML+=`<div style="margin-left:2rem;line-height:1.3rem;color:grey">${str[i]}</div><br>`
}
})();