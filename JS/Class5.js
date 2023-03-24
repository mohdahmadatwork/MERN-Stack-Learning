function calc(){
    function add(a,b){
      return (a+b);
    }
    function sub(a,b){
      return (a-b);
    }
    return [add,sub];
}
console.log(calc()[0](12,12));
console.log(calc()[1](10,4));