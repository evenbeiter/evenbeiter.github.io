
javascript: (async()=>{
var date=window.location.href.slice(53,61);
var txt='<div style="font-size:12px"><p>逐字詳細解析以下句子包括單詞活用、文法和句型三大段說明。並把每段說明的標題(單詞活用、文法、句型)和說明的內文都寫成用p標籤包裹的HTML格式，標題和各單詞及文法和句型的說明都自成一個p標籤，每個單詞的活用說明也都是各自獨立的p標籤；標題用粗體、內文用標準字體顯示。最後再把所有的HTML寫成JSON格式，每一個韓文句子的解析整合為一個字串(裡面應該會包含多個p標籤)，成為JSON的一個項目。JSON的格式為[字串,字串…］。</p><br>';
var res=await fetch('https://gateway.dict.naver.com/krdict/kr/kozh/today/'+date+'/conversation.dict?callback=angular.callbacks._0');
var str=await res.text();
var data=JSON.parse(str.slice(21,-1)).data;
var n=1;
for (let s of data.sentences){
  txt+=`<p>${n++}. ${s.orgnc_sentence}</p>`
}
for (let e of data.studys[0].examples){
  txt+=`<p>${n++}. ${e.origin_example}</p>`
}
txt+='</div>';
win=window.open('','','');void(win.document.write(txt));win.document.close();
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
