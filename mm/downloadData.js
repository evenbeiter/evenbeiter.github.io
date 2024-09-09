
javascript:(function(){
var item=[];
var data=[];
var title='';
var n=Highcharts.charts.length;
var series=Highcharts.charts[n-1].series;
var url=window.location.href;
if (url.indexOf('/series/')>0){
  title=document.title.slice(0,document.title.indexOf(' |'));
	item.push(title);
} else {title=Highcharts.charts[n-1].title.textStr}
var id=url.slice(url.lastIndexOf('/',url.lastIndexOf('/')-1)+1,url.lastIndexOf('/'));
var filename=id+' '+title;
for (let s of series){
	if (s.name!==undefined){item.push(s.name)};
	var d=[];
	var x=s.processedXData;
	var y=s.processedYData;
	for (var i=0;i<x.length;i++){
		d.push([convertUnixToDate(x[i]),y[i]]);
	}
data.push(d);
}

function mergeArrays(arrays) {
	function createMap(arr) {
			return arr.reduce((map, [date, value]) => {
					map[date] = value;
					return map;
			}, {});
	}
	const maps = arrays.map(createMap);
	const allDates = new Set(arrays.flat().map(([date]) => date));
	const result = Array.from(allDates).sort().map(date => [
			date,
			...maps.map(map => map[date] !== undefined ? map[date] : '')
	]);
	return result;
}

function convertUnixToDate(unixTimestamp) {
	if (unixTimestamp.toString().length === 10) {
			unixTimestamp *= 1000;
	}
	const date = new Date(unixTimestamp);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

var arrayHeader=['Date'];
arrayHeader = arrayHeader.concat(item);
let arrayData = mergeArrays(data);
let header = arrayHeader.join(',') + '\r\n';
var csv = header;
arrayData.forEach( array => {csv += array.join(',')+"\r\n"});
var csvData = new Blob([csv], { type: 'data:text/csv;charset=utf-8' });
var csvUrl = URL.createObjectURL(csvData);
let link = document.createElement('a');
link.href = csvUrl;
link.target = '_blank';
link.download = filename + '.csv';
link.click();
})();






///////////////////////////////////

///////////////////////////////////





function mergeArrays(...arrays) {
	console.log(arrays);
	var md=[];
	var dates=[];
	var value=[];
	arrays.forEach(arr=>{
		var d=[];
		var v=[];
		arr.forEach(a=>{console.log(a);
			md.push(a[0]);console.log(md);
			d.push(a[0]);
			v.push(Number(a[1]));
			})
			dates.push(d);
			value.push(v);
		})
	
	md=[...new Set(md)];
	console.log(md);
	md=md.sort();
	console.log(md);
	var mergedData = [];
	md.forEach(m=>mergedData.push([m[0]]));
	console.log(mergedData);
	for (var i=0;i<arrays.length;i++){
	 	for (var j=0;j<md.length;j++){
			if (dates[i].indexOf(md[j])==-1){
				mergedData[j].push(null);
				} else{
				mergedData[j].push(value[i][dates[i].indexOf(md[j])]);
				}
			}
	}
	return mergedData;
}

// Example arrays
var item=[];
var data=[];
var n=Highcharts.charts.length;
var series=Highcharts.charts[n-1].series;
for (let s of series){
	item.push(s.name);
	var d=[];
	var x=s.processedXData;
	var y=s.processedYData;
	for (var i=0;i<x.length;i++){
		d.push([convertUnixToDate(x[i]),y[i]]);
	}
data.push(d);
}
console.log(data);
var dataHeader=['Date'];
dataHeader = dataHeader.concat(item);

const arr1 = [["2020-03-30",23],["2020-03-31",30]];
const arr2 = [["2019-12-31",68],["2020-03-31",39]];
const arr3 = [["2019-12-31",5],["2020-01-31",3],["2020-02-29",2],["2020-03-31",4]];

// Merge arrays
// const mergedArray = mergeArrays(arr1, arr2, arr3);

console.log(mergeArrays(data));
