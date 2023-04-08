window.addEventListener('load',bindEvents);
var counter = 0;
function bindevents(){
document.getElementById('add').addEventListener('click',plus);
document.getElementById('subtract').addEventListener('click',minus);
function plus(){
    counter++;
    show();
}
function minus(){
    counter--;
    show();
}
function show(){
    window.document.getElementById("counter-value").innerText = counter;
}
}