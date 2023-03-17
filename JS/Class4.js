// JS is a compiled language proof
console.log(a);
var a = 10;
for (let index = 0; index < 10; index++) {
    console.log(index/2);
    if(index%2 === 0){
        console.log(index)
    }
}

// Scope
let MyName = "Mohd Ahmad";
{
  let FriendName = "Vijay Rana";
  console.log(FriendName);
  console.log(MyName);
} 
// console.log(FriendName);
console.log(MyName);

// Let Vs Var using Scopes
var Name = "Mohd Ahmad"; //global variable
// let FriendName = "Vijay Rana"; //global variable

function disp(){
  let FriendName3 = "Radhe Mohan"; //function level scope
  {
    let FriendName1 = "Shivant Kumar"; // Block level scope
    var FriendName2 = "Yogesh Panchal"; //global variable
    console.log(FriendName1);
    console.log(FriendName2);
    console.log(FriendName);
    console.log(FriendName3);
    console.log(Name);
  }
  console.log(FriendName3);
  console.log(Name);
  console.log(FriendName);
  console.log(FriendName2); // No error because the scope of FriendName2 is the functional scope becuase of keyword var
  // console.log(FriendName1); give error that FriendName1 is not defined because the scope of FriendName1 is block level
}

console.log(Name);
console.log(FriendName);
//console.log(FriendName1); give error that FriendName1 is not defined
//console.log(FriendName2); give error that FriendName2 is not defined
// console.log(FriendName3); give error that FriendName3 is not defined

// Let Vs Var using Window Object
var Name = "Mohd Ahmad";
let FriendName = "Vijay Rana";
console.log(Window.Name);
console.log(Window.FriendName);