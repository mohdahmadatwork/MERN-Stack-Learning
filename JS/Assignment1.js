
product1={id:1,name:"shoe",price:1000,brand:"sparx"};
product2={id:2,name:"shirt",price:500,brand:"6teen"};
product3={id:3,name:"jeans",price:1200,brand:"peter england"};
product4={id:4,name:"watch",price:700,brand:"fastrack"};
product5={id:5,name:"t-shirt",price:500,brand:"polo"};
product6={id:6,name:"shoe",price:1200,brand:"puma"};
product7={id:7,name:"watch",price:900,brand:"sonata"};
product8={id:8,name:"socks",price:200,brand:""};
product9={id:9,name:"mobile",price:10000,brand:"realme"};
product10={id:10,name:"jeans",price:1900,brand:"levis"};
products = [product1,product2,product3, product4, product5, product6, product7,product8,product9,product10];




products.sort((a, b) => {
    return a.price - b.price;
});
//desc
products.sort((a, b) => {
    return b.price - a.price;
});
//name
//asc
products.sort((a, b) => {
    let pa = a.name.toLowerCase(),
        pb = b.name.toLowerCase();

    if (pa < pb) {
        return -1;
    }
    if (pa > pb) {
        return 1;
    }
    return 0;
});
//desc
products.sort((a, b) => {
    let pa = a.name.toLowerCase(),
        pb = b.name.toLowerCase();

    if (pa > pb) {
        return -1;
    }
    if (pa < pb) {
        return 1;
    }
    return 0;
});
//brand
//asc
products.sort((a, b) => {
    let pa = a.brand.toLowerCase(),
        pb = b.brand.toLowerCase();

    if (pa < pb) {
        return -1;
    }
    if (pa > pb) {
        return 1;
    }
    return 0;
});
//desc
products.sort((a, b) => {
    let pa = a.brand.toLowerCase(),
        pb = b.brand.toLowerCase();

    if (pa > pb) {
        return -1;
    }
    if (pa < pb) {
        return 1;
    }
    return 0;
});
//total price
var result = products.reduce(function(acc, ele) { return acc + ele.price; }, 0);
result;

//search by price
//only one product 
var res=products.find(product=>product.price==500) ;
res;
//many
var m=products.filter(el=>el.price==10000);
m;

//search by name
//only one product 
var res1=products.find(product=>product.name=='product1');
res1;
//many
var m=products.filter(el=>el.name=='product1');

//add new product at end 
products.push({id:111,name:'product11',brand:'brand4',price:6500});
//at front
products.unshift({id:112,name:'product12',brand:'brand7',price:600});
//any position
products.splice(2,0,{id:113,name:'product13',brand:'brand5',price:750});


//delete single item (splice)
// by brand 
var n=products.findIndex(index=>index.brand=='brand1');
products.splice(n,1);
//by name 
var n=products.findIndex(index=>index.name=='product1');
products.splice(n,1);
// by id 
var n=products.findIndex(index=>index.price=='600');
products.splice(n,1);
//delete multiple item
//by brand 
products=products.filter(h=>h.brand!=='brand1');

//by name
products=products.filter(h=>h.name!=='product1');
//by id 
products=products.filter(h=>h.id!==106);




//Sum of all Products whose price is >2000.
var sum=0;
products.forEach(x=>{ if(x.price>2000){sum+=x.price}});
sum;

//find lowest price product

function getlowerprice() {
    var lower= products.reduce((min, p) => p.price < min ? p.price : min, products[0].price);
    return products.find(e=>e.price==lower);
  };
  getlowerprice();

//find highest price product 
function gethigherprice() {
    var high= products.reduce((max, p) => p.price > max ? p.price : max, products[0].price);
    return products.find(e=>e.price==high);
  };
  gethigherprice();

// find tax
var total_price;

let obj=products.find((o, i) => {
    if (o.price === 10000) {
        total_price=o.price*0.1;

    }
    return total_price;
});
//total_price;
//obj;
console.log(obj,"total price is : ",total_price);

















