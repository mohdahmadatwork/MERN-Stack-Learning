var f = 0;
console.log(f);
console.log(typeof f);
f=undefined;
console.log(f);
console.log(typeof f);


var arr = [10,20,30,40,50]; //Array declaration and initialization
var arr2 = null;
console.log("before copy arr: ",arr);
console.log("before copy arr2: ",arr2);

arr2 = arr;
console.log("after copy arr: ",arr);
console.log("after copy arr2: ",arr2);

arr2[0]=1000;
console.log("after change in arr2, arr: ",arr);
console.log("after change in arr2, arr2: ",arr2);

arr2 = [...arr];

console.log(arr2);
console.log(arr);

console.log(arr == arr2);
console.log(arr === arr2);

arr2[0]=10;
console.log(arr2);
console.log(arr);

var arr = [10,20,30,40,50];
console.log(arr);

arr=null;
console.log(arr);
console.log(typeof arr);

var arr = [10,20,30,40,50];
console.log(typeof arr);
arr = null;
console.log(typeof arr);

var a =10;
console.log(typeof a);
a=null;
console.log(typeof a);

console.log(null==undefined);
console.log(null===undefined);

var a =10;
var b = "10";

console.log(a==b);