//Recap of previous class
var a = 10;
console.log(a);
console.log(typeof a); 
a = 11.11111;
console.log(a);
console.log(typeof a);
a="Mohd Ahmad";
console.log(a);
console.log(typeof a);

//JS is loosely or Dynamic typed language
// Means JS Decide the data type of a variable on run time

// JS has two types of data type value and reference type
// value type are immutable in nature 
// Immutable means if you change in copy no chanages in original value

var a = 10;
var b = a;
console.log(b);
console.log(a);
b++;
console.log(b);
console.log(a);

// So when we made changes on b there is no changes in a so a is immutable in nature

//Reference Data Type are mutable 

var arr = [1,2,3];
var arr2 = arr;
console.log(arr==arr2);//true
console.log(arr===arr2);//true
arr2[0]=10;
console.log(arr);
console.log(arr2);

// So here  arr containing the address of an object which is an array. While we copying the arr in a new variable called arr2 the reference is copied which is the value containing by the arr. So arr and arr2 both are pointing to a same array so if we make changes in arr2 then the change will be reflect in arr

//Mutability has some benifits as well as some loss
// To achieve mutability in object or reference type data type we have to copy the data from the address stored in the variable which we want to copy so for this reason we use spread operator.
var arr3 = [...arr]; // "..." is called spread operator
arr2[0]=10;
console.log(arr);
console.log(arr2);
arr3[0]=100;
console.log(arr3);
console.log(arr==arr3);
console.log(arr===arr3);

//Spread operator spread the array of arr into a new array which address is stored in arr3
//When we loose compare the arr and arr2 which are pointing to a same array so we get true because they both have same reference
//when we are using strict comparision between arr and arr2 then also we get true because the type and value both are same
//While we use spread operator and made new array named as arr3 and we use loose or strict comparision we get false because the value are different now

//Object is a referal type data type
var o = {};
console.log(typeof o);
// Here o is an object type which means it stores key and value pair
// Array is also an object where key is index and value is the value of array corresponding to index
// We can find the value through the key
var  temp = {delhi:11,hyd:12}
temp.delhi; // 11
temp["delhi"];
temp.hyd; // 12
temp["hyd"];
// We can access value through two syntax with square( [] ) bracket and Dot(.) operator
// What is the difference between Dot operator and square bracket
// you can not access those key which are number or string containing special char like space
// through square bracket you can only access string keys which have no spaces
var ahmad = {name:"Mohd Ahmad",study:"Btech",12:65,"perm add":"Delhi"};
console.log (ahmad.name);
console.log(ahmad["name"]);
// console.log(ahmad.12);
console.log(ahmad[12]);
// console.log(ahmad.perm add);
console.log(ahmad["perm add"]);

// Loop are two types 
// 1.Loop
// 2.Iterator
// Loop
for(var i=0;i<arr.length;i++){
    arr[i];
}
// Iterator are of two type 
// 1. for of loop
// 2. for in loop
for(var element of arr){ // Traverse arr, this is a for of loop can not iterate over object
    console.log(arr[i]);
}
for (let key in ahmad){ //traverse object this is a for in loop used to traverse over key value pair so it can also iterate over array where key is index
    console.log(key,ahmad[key])
}
for (let key in arr){ //traverse object this is a for in loop used to traverse over key value pair so it can also iterate over array where key is index
    console.log(arr[key])
}
for (var key of ahmad){ //traverse object this is a for in loop used to traverse over key value pair so it can also iterate over array where key is index
    console.log(key,ahmad[key])
}