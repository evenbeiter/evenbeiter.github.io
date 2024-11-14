javascript:(async()=>{

var scriptTag=document.createElement('script');
document.body.appendChild(scriptTag);

scriptTag.innerHTML=`

function openOptions(){
  var options=document.getElementById('btn-group');
    if (options.style.display=='none'){
    options.style.display='block';
document.getElementById('navbar').style.display='none';
    document.getElementById('dateInput').value='';
    renderCalendar();
  }else{options.style.display='none';
  document.getElementById('navbar').style.display='block';
  }
}

async function playAudio(a){
var res=await fetch('https://learn.dict.naver.com/dictPronunciation.dict?filePaths='+a);
var str=await res.json();
var audio=document.getElementById('ap');
audio.src=str.url;
audio.play(); 
}

let currentDate = new Date();
const today = new Date();

async function openDateLink(date){
var options=document.getElementById('btn-group');
options.style.display='none';
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

const {prevDate,nextDate}=getAdjacentDates(date);
document.getElementById('nav').innerHTML=\`
<div class="container">
<div class="row">
<div class="col-4 text-end fs10">
  <span id="prevButton" onclick="openDateLink('\${prevDate}')">\${prevDate}</span>
</div>
<div class="col-4 text-center fs10">
  <span id="nav-t" onclick="openDateLink('\${date}')">\${date}</span>
</div>
<div class="col-4 text-start fs10">
  <span id="nextButton" onclick="openDateLink('\${nextDate}')">\${nextDate}</span>
</div>
</div>
</div>
\`;
document.getElementById('navbar').style.display='block';

if (isSunday(date)){console.log('sunday');
document.getElementById('list').style.display='none';
document.getElementById('gpt-area').style.display='block';
document.getElementById('gpt').innerHTML=\`
<div class="pt-3 text-center" style="font-size:1.3rem"><p>No Lessons for \${date}.</p></div>
\`;
}else{
var res=await fetch('https://gateway.dict.naver.com/krdict/kr/kozh/today/'+date+'/conversation.dict?callback=angular.callbacks._0');
var str=await res.text();
var data=JSON.parse(str.slice(21,-1)).data;

try {
var res=await fetch('https://evenbeiter.github.io/wiki/korean/'+date+'.json');
document.getElementById('list').style.display='block';
document.getElementById('gpt-area').style.display='none';
var gpt=await res.json();

document.getElementById('title').innerHTML=\`<p>\${date}</p><p>\${data.title}</p><p>\${data.title_translation}</p>\`;

var cvs='';var std='';var vocab='';
var s=data.sentences;
for (let i=0;i<s.length;i++){
  cvs+=\`<p class="zh sepia-contrast p-2" onclick="playAudio('\${s[i].sentence_pron_file}')"><strong>\${i+1}. \${s[i].orgnc_sentence}<br>\${s[i].trsl_orgnc_sentence}</strong></p><div class="fs12">\${gpt[i]}</div><br><hr>\`;
}
document.getElementById('cvs').innerHTML=cvs;

var e=data.studys[0].examples;
for (let j=0;j<e.length;j++){
  std+=\`<p class="zh sepia-contrast p-2" onclick="playAudio('\${e[j].pron_file_url}')"><strong>\${j+1}. \${e[j].origin_example}<br>\${e[j].origin_translation}</strong></p><div class="fs12">\${gpt[s.length+j]}</div><br><hr>\`;
}
document.getElementById('std').innerHTML=\`<p class="zh">\${data.studys[0].title}<br>\${data.studys[0].origin_translation}</p><hr>\${std}\`;

for (let t of data.entrys){
  vocab+=\`<p class="zh" onclick="playAudio('\${t.pron_file_url}')">\${t.orgnc_entry_name}<br>\${t.mean}</p><hr>\`;
}
document.getElementById('vocab').innerHTML=vocab;
}catch{
document.getElementById('list').style.display='none';
document.getElementById('gpt-area').style.display='block';
var txt='<p>詳細解析以下句子包括翻譯、「逐字說明」單詞用法及活用、文法和句型四大段說明。並把每段說明的標題(翻譯、單詞用法及活用、文法、句型)和說明的內文都寫成用p標籤包裹的HTML格式，標題和各單詞及文法和句型的說明都自成一個p標籤，每個單詞的用法和活用說明也都是各自獨立的p標籤；標題用粗體、內文用標準字體顯示。最後再把所有的HTML寫成JSON格式，每一個韓文句子的解析整合為一個字串(裡面應該會包含多個p標籤)，成為JSON的一個項目。JSON的格式為\[字串,字串…\］。</p><br>';
var n=1;
for (let s of data.sentences){txt+=\`<p>\${n++}. \${s.orgnc_sentence}</p>\`};
for (let e of data.studys[0].examples){txt+=\`<p>\${n++}. \${e.origin_example}</p>\`};
document.getElementById('date').innerHTML=date;
document.getElementById('gpt').innerHTML=txt;
}
}
}

function getAdjacentDates(date) {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6) - 1;
  const day = date.slice(6, 8);
  
  const currentDate = new Date(year, month, day);
  currentDate.setHours(currentDate.getHours() + 8);

  const prevDate = new Date(currentDate);
  prevDate.setDate(currentDate.getDate() - 1);
  const prevDateFormatted = prevDate.toISOString().split('T')[0].replace(/-/g, '');

  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  const nextDateFormatted = nextDate.toISOString().split('T')[0].replace(/-/g, '');
  
  return {
      prevDate: prevDateFormatted,
      nextDate: nextDateFormatted
  };
}

function renderCalendar() {
    document.getElementById('navbar').style.display='none';
    calendar.innerHTML = '';
    currentDate.setDate(1);
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    currentMonthYear.innerText = \`\${currentDate.toLocaleString('default', { month: 'long' })} \${year}\`;

    const firstDayIndex = currentDate.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('calendar-day', 'inactive');
        calendar.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day');
        dayDiv.textContent = i;

        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayDiv.classList.add('today');
        }

        dayDiv.addEventListener('click', () => openDateLink(cvtDate(year, month + 1, i)));
        calendar.appendChild(dayDiv);
    }
}

function goToDate(inputDate) {
    const year = parseInt(inputDate.slice(0, 4));
    const month = parseInt(inputDate.slice(4, 6)) - 1;
    const day = parseInt(inputDate.slice(6, 8));
    currentDate = new Date(year, month, 1);
    renderCalendar();
}
    
function cvtDate(year,month,day){
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');
  return year+formattedMonth+formattedDay;
}

function isSunday(date) {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);
  const currentDate = new Date(\`\${year}-\${month}-\${day}\`);
  return currentDate.getDay() === 0;
}

`;
  
scriptTag=document.createElement('script');
scriptTag.src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js';
scriptTag.integrity='sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy';
scriptTag.crossOrigin='anonymous';
document.body.appendChild(scriptTag);

document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>NAVER KOREAN</title>
          <style>
          body {background-color:#F4ECD8;color:#5B4636;font-size:1.3rem}
          .content{display:none;cursor:pointer}
          .sepia{background-color:#F4ECD8;color:#5B4636}
          .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
          h1,h2,h3,h4,h5,h6,.title{font-size:1.3rem;color:#3B2D20 !important;font-weight:bold}
          .zh{font-family: 'PingFang SC';font-weight:800;font-variant-east-asian: traditional}
          a{word-wrap:break-word;white-space:normal;overflow-wrap:break-word;word-break:break-word}
          h1 a {color: navy; font-weight: bold; text-decoration:none;cursor:pointer}
          .fs13{font-size:1.3rem}
          .fs12{font-size:1.2rem}
          .fs10{font-size:1rem}
          audio{display:none;margin-right:auto;margin-left:auto;width:100%}
          img{display:block !important;margin:auto;width:100%;height:auto}
          @media (min-width:768px){
            @font-face{font-family:"Microsoft JhengHei Bold";src:local("Microsoft JhengHei Bold");unicode-range:U+4E00-9FFF}
            body {background-color:#F4ECD8;color:#5B4636;font-size:1.2rem;font-family:arial,'Microsoft JhengHei Bold', sans-serif !important}
            h1,h2,h3,h4,h5,h6,.title{font-size:1.2rem;color:#3B2D20 !important;font-weight:normal}
          }

        .calendar-container {
            max-width: 400px;
            margin: 20px auto;
            background-color: #faf6ee;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .calendar-header {
            padding: 10px;
            background-color: #d3cbb8;
            color: #4f4a42;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .calendar-header button {
            color: #4f4a42;
        }
        .month-year {
            font-size: 1.2em;
            font-weight: bold;
        }
        .calendar-weekdays, .calendar-days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 3px;
            text-align: center;
            padding: 5px;
        }
        .calendar-day {
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            background-color: #faf6ee;
            color: #4f4a42;
            font-size: 0.9em;
        }
        .calendar-day:hover {
            background-color: #e8e3d8;
        }
        .day-name, .calendar-day.inactive {
            color: #c2bba8;
        }
        .calendar-day.today {
            background-color: #d3cbb8;
            color: #fff;
            font-weight: bold;
        }
        /* "Today's Lesson" Button Styling */
        .today-btn {
            background-color: #d3cbb8;
            color: #4f4a42;
            font-size: 1em;
            padding: 8px 16px;
            text-align: center;
            cursor: pointer;
            display: block;
            width: 100%;
            margin-top: 10px;
            border-radius: 0 0 10px 10px;
            transition: background-color 0.3s;
        }
        .today-btn:hover {
            background-color: #b3ad9c;
        }
        /* Responsive adjustments */
        @media (max-width: 480px) {
            .calendar-container {
                max-width: 95%;
            }
        }
      </style>
</head>
<body>
<nav id="navbar" class="navbar sticky-top border-bottom" style="background-color:#d3cbb8;max-width:600px;margin:auto;display:none">
  <div id="nav" class="container-fluid justify-content-between">
  </div>
</nav>
<div style="max-width:600px;margin:auto">
<audio id="ap" controls preload="auto"></audio>

<button type="button" class="sticky-top m-2 btn btn-light position-fixed top-0 end-0 sepia-contrast opacity-25" style="z-index:1030" onclick="openOptions()">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
  </svg>
</button>
  <form id="btn-group" class="py-2 sticky-top container-fluid justify-content-start sepia-contrast">
    <h2 class="text-center mt-4 text-light">每日韓語會話</h2>
    <div class="calendar-container">
        <div class="calendar-header">
            <button id="prevMonth" class="btn btn-link">&lt;</button>
            <span id="currentMonthYear" class="month-year"></span>
            <button id="nextMonth" class="btn btn-link">&gt;</button>
        </div>
        <div class="calendar-weekdays">
            <div class="day-name">Sun</div>
            <div class="day-name">Mon</div>
            <div class="day-name">Tue</div>
            <div class="day-name">Wed</div>
            <div class="day-name">Thu</div>
            <div class="day-name">Fri</div>
            <div class="day-name">Sat</div>
        </div>
        <div id="calendar" class="calendar-days"></div>
        <div id="goToToday" class="today-btn">Today's Lesson</div>
        <div class="date-input-group m-1">
        <div class="input-group">
          <input type="text" id="dateInput" class="form-control" placeholder="Enter date (yyyymmdd)">
          <button id="viewCalendar" class="btn btn-secondary text-white border-white">View</button>
          <button id="submitDate" class="btn btn-secondary text-white border-white">Go</button>
        </div>
    </div>
    </div>
  </form>
<div id="list" class="mx-3 pt-3" style="display:none">
  <div id="title" class="title zh"></div>
  <br><br>
  <h2><strong>Conversation</strong></h2>
  <div id="cvs"></div>
  <br><h2><strong>Study</strong></h2>
  <div id="std"></div>
  <br><h2><strong>Vocabulary</strong></h2>
  <div id="vocab"></div>
</div>
<div id="gpt-area" class="mx-3 pt-3" style="font-size:0.8rem;display:none">
  <p id="date"></p>
  <div id="gpt"></div>
  <button class="btn btn-secondary" onclick="copyText()">Copy</button>
</div>
</div></body>
<script>

</script>
</html>
`;

renderCalendar();

var scriptTag=document.createElement('script');
document.body.appendChild(scriptTag);

scriptTag.innerHTML=`
const calendar = document.getElementById('calendar');
const currentMonthYear = document.getElementById('currentMonthYear');

document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});
document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});
document.getElementById('goToToday').addEventListener('click', () => {
    currentDate = new Date(today);
    renderCalendar();
    openDateLink(cvtDate(today.getFullYear(), today.getMonth() + 1, today.getDate()));
});
document.getElementById('viewCalendar').addEventListener('click', () => {
    const dateInput = document.getElementById('dateInput').value;
    goToDate(dateInput);
});
document.getElementById('submitDate').addEventListener('click', () => {
    const dateInput = document.getElementById('dateInput').value;
    openDateLink(dateInput);
});

function copyText() {
  const textElement = document.getElementById("gpt");
  const text = textElement.innerText;
  
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied!");
  }).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
}
`;
})();
