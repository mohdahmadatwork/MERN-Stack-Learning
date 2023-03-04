var a;
console.log(typeof a);

var a;
a=10;
console.log(typeof a);
a="Mohd Ahmad";
console.log(typeof a);
a=12.40;
console.log(typeof a);

var b = 10 + "10";
console.log(b)

b = 10 - "10";
console.log(b)

b=10/0;
console.log(b);

b= 10 - "Ten";
console.log(b);

b = Number.MAX_SAFE_INTEGER;
console.log(b);
b++;
console.log(b);
b++;
console.log(b);
b++;
console.log(b);

b = Number.MAX_VALUE;
console.log(b);
b++;
console.log(b);
b++;
console.log(b);
b++;
console.log(b);

b = Number.POSITIVE_INFINITY
console.log(b);
b++;
console.log(b);
b++;
console.log(b);
b++;
console.log(b);

b = 10;
a = true;
var c = a + b;
console.log(c);
c = b - a;
console.log(c);

var arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof arr);

a = "10";
console.log(a+10); //Conacte
console.log(parseInt(a)+10); //Type cast string to int
console.log(parseFloat(a)+10); //Type Cast string to Float

console.log(null == undefined); //Loose Comparision
console.log(null === undefined); //Strict Comparision 

a=10;
b="10";
console.log(a==b);
console.log(a===b);