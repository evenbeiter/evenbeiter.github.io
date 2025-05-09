<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Economist</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <style>
  .te_article_rubric,.te_article_datePublished{all:unset;display:block}
  body {background-color:#F4ECD8;color:#3B2D20;font-size:1.2rem}
  .section_index_title{display:none}
  h1,h2{font-size:1.2rem;color:#3B2D20 !important;font-weight:bold;text-wrap:wrap;}
  h1,h2,h3,h4,h5,h6,p,ul,li,i,a,btn,p a{text-wrap: wrap !important}
  p,h3{font-size:1.2rem}
  .sepia{background-color:#F4ECD8;color:#3B2D20}
  .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
  .te_article_rubric{font-size:1.2rem}
  .te_article_datePublished{font-size:0.9rem}
  img{display:block !important;margin:auto;width:100%;height:auto}
  h1,h2,h3,h4,h5,h6,p,ul,li,i,a,btn,p a,.te_article_rubric,.te_article_datePublished{font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important}
  @media only screen and (max-width: 767px){.zh{font-size: 1.3rem !important}}
  </style>
</head>
<body>
  <div class="m-3">
    <div id="nav" class="sticky-top p-1 sepia-contrast">
      <button class="btn m-2 sepia" onclick="dlEpub()">Download the Latest</button><br>
      <input type="file" id="fileInput" class="btn" onchange="openBook()"/>
    </div>
  <form id="btn-group" class="py-2 sticky-top container-fluid justify-content-start sepia-contrast" style="display:none"></form>
  <pre id="list" style="max-width:600px;margin:auto"></pre>
  </div>
  <button type="button" class="sticky-top m-2 btn btn-light position-fixed top-0 end-0 sepia-contrast opacity-25" style="z-index:1030" onclick="openOptions()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
  </button>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/epubjs@0.3.88/dist/epub.min.js"></script>

<script>
var content=[];

function openOptions(){
  var options=document.getElementById('btn-group');
    if (options.style.display=='none'){
    options.style.display='block';
  }else{options.style.display='none'}
}
  
function dlEpub(){
  var date = prompt('Issue Date:');
  date=date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
  var link = document.createElement('a');
  link.href = `https://github.com/hehonghui/awesome-english-ebooks/raw/master/01_economist/te_${date}/TheEconomist.${date}.epub`;
  link.target = '_blank';
  link.download = `TheEconomist.${date}.epub`;
  link.click();
  link.remove();
}
  
async function openBook(){
  document.getElementById('nav').style.display='none';
  const fileInput = document.getElementById('fileInput');
  if (fileInput.files.length === 0) {
    alert('Please select an EPUB file.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = async (e) => {
    const arrayBuffer = e.target.result;
    const book = ePub({ replacements: 'blobUrl' });

    await book.open(arrayBuffer);

    var jsonOutput = {
      metadata: book.packaging.metadata,
      chapters: []
    };

    let spineItems = book.spine.spineItems;
    var i=0;
    for (let item of spineItems) {
      i=i+1;
      let chapter = await item.load(book.load.bind(book));
      let content = await item.render(); // Render the chapter to get its content

      jsonOutput.chapters.push({
        id: 'chapter_'+i,
        href: item.href,
        content: content.replace(/<html[\s\S]*?\<body>/g,'').replace(/<link [\s\S]*?\/>/g,'').replace('</body></html>','').replaceAll(' class="link_navbar"','') // Store the rendered content
      });
    }
    console.log(jsonOutput);
    var array=[];
    for (let c of jsonOutput.chapters){
      var parser = new DOMParser();
      var doc = parser.parseFromString(c.content, "text/html");
      if(doc.querySelector('.te_section_title')){
        c.section=doc.querySelector('.te_section_title').textContent;
        array.push(c);
      }
    }
    var tabs = [...new Set(array.map(item => item.section))];
    content = Object.values(array.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = { section: item.section, content: [] };
      }
      acc[item.section].content.push(item);
      return acc;
    }, {})
    );
  
    for (let tab of tabs){
    document.getElementById('btn-group').innerHTML+=`<button class="btn btn-sm sepia me-1 mb-1" type="button" onclick="getList('${tab}')">${tab}</button>`;
    }
      
    getList('Leaders');
  }
  reader.readAsArrayBuffer(file);
};
  
async function getList(a){
  document.getElementById('btn-group').style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById('list').innerHTML='';
  var secA = content.find(item => item.section === a);
  for (let c of secA.content){
    document.getElementById('list').innerHTML += c.content.replace(/<html[\s\S]*?\<body>/g,'').replace(/<link [\s\S]*?\/>/g,'').replace('</body></html>','').replaceAll(' class="link_navbar"','').replace('<h1 class="te_article_title">',`<div id="${c.id}" class="tl" onclick="getContent('${c.id}_content')"><h1 class="te_article_title">`).replace('<h3 class="te_article_datePublished">',`</div><div id="${c.id}_content" onclick="getContent('${c.id}_content')" style="display:none"><h3 class="te_article_datePublished">`).replaceAll('te_article_rubric','tl te_article_rubric').replace(/<p><i>For subscribers only[\s\S]*?<\/p>/g,'').replace(/<p>This article was downloaded by[\s\S]*?<\/p>/g,'').replaceAll('<p>','<p class="tl">')+'</div><hr>';
  }
  var hAll=document.querySelectorAll('div.tl');
  for (let a of hAll){
    if (a.innerText!==''){
      var bb=a.innerText.split('\n');
      for (let b of bb){
        var t=await translate(b);
        if (t!=='' && t!==null && t!==undefined && t!=='undefined'){a.innerHTML+=`<h3 class="zh">${t}</h3>`};
      }
    }
  }
}

async function getContent(id){
  var el=document.getElementById(id);
  if (el.style.display=='none'){
    el.style.display='block';
    if (el.innerText!=='' && cnTest(el.innerText)!==true){
      var all=el.querySelectorAll('.tl');
      for (let a of all){
        if (a.innerText!=='' && cnTest(a.innerText)!==true){
            var t=await translate(a.textContent);
            if (t!==''){a.outerHTML+=`<p class="zh">${t}</p>`};
        }
      }
    }
  }else{
      el.style.display='none';
      el.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView()
  }
}

async function translate(a){
  try{
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+encodeURIComponent(a);
    var res=await fetch(url);
    var raw=await res.json();
    var ts='';
    for (var j=0;j<raw[0].length;j++){
        if (raw[0][j][0]!==null && raw[0][j][0]!==undefined && raw[0][j][0]!=='undefined'){ts=ts+raw[0][j][0]}else{ts=ts}
    }
    return ts
  }catch (error) {console.error(error)}
}

function cnTest(str) {
  const chineseCharRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;
  return chineseCharRegex.test(str);
}

</script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</body>
</html>