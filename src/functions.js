function addToCart(productName){
    if (productName != undefined && typeof(productName) === "string") {
        console.log(`${productName} sepete eklendi...`)
    }
    //console.log(`${productName} sepete eklendi...`)
}

addToCart()
addToCart("Yumurta")
addToCart(15);

//Arrow function
let sayHello = () => {
    console.log("Hello")
}
let sayHello2 = function() {
    console.log("Hello 2")
}
sayHello()
sayHello2()


let product1 = {productName:"elma",unitprice:"10", quantity:5}

function addToCart2(product) {
    console.log("Ürün : " +product.productName)
    console.log("Adet : " +product.quantity)
    console.log("Fiyat : " +product.unitprice)
}

addToCart2(product1)

let product2 = {productName:"elma",unitprice:"10", quantity:5}
let product3 = {productName:"armut",unitprice:"20", quantity:2}

product2 = product3;
product2.productName = "karpuz"
console.log(product3.productName)

let products = [
    {productName:"elma",unitprice:"10", quantity:5},
    {productName:"armut",unitprice:"20", quantity:3},
    {productName:"muz",unitprice:"30", quantity:6}
]

function addToCart3(products){
    console.log(products)
}

addToCart3(products);

//rest
function add(...numbers){
    let total = 0;
    for(var i=0; i<numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

console.log(add(1,2,5,8));
console.log(add(2,4,5));

let numbers =[2,4,96,43,24]

console.log(Math.max(12,35,84,95))
console.log(Math.max(...numbers))

//let [icAnadolu,marmara,karadeniz] = ["İç Anadolu","Marmara","Karadeniz"]

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu", populations:"20M"},
    {name:"Marmara", populations:"30M"},
    {name:"Karadeniz", populations:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]


console.log(icAnadolu.name +"\n"+ icAnadolu.populations)
console.log(icAnadoluSehirleri[0])

let newProductName, newUnitprice, newQuantity;
({productName:newProductName, unitprice:newUnitprice, quantity:newQuantity} 
= {productName:"Telefon",unitprice:"4000", quantity:10})

console.log(`${newProductName} \n ${newUnitprice} \n ${newQuantity}`)

