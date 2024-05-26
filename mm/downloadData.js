function mergeArrays(...arrays) {
var md=[];
var dates=[];
var value=[];
arrays.forEach(arr=>{
	var d=[];
	var v=[];
arr.forEach(a=>{
	md.push(a[0]);
	d.push(a[0]);
	v.push(Number(a[1]));
	})
	dates.push(d);
	value.push(v);
})

md=[...new Set(md)];
md=md.sort();

var mergedData = [];
md.forEach(m=>mergedData.push(m));

for (var i=0;i<arrays.length;i++){
 	for (var j=0;j<md.length;j++){
			if (dates[i].indexOf(md[j])==-1){
			mergedData[j]+=',';
		} else{
			mergedData[j]+=','+value[i][dates[i].indexOf(md[j])];
		}
		}
}
return mergedData.join('\n');
}

// Example arrays
const arr1 = [["2020-03-30",23],["2020-03-31",30]];
const arr2 = [["2019-12-31",68],["2020-03-31",39]];
const arr3 = [["2019-12-31",5],["2020-01-31",3],["2020-02-29",2],["2020-03-31",4]];

// Merge arrays
const mergedArray = mergeArrays(arr1, arr2, arr3);

console.log(mergedArray);