// Rest
// Params 
// varArgs
let showProduct = function(id,...products){
    console.log(id);
    console.log(products[0])
    //console.log(products[0][0])
}

//console.log(typeof showProduct)

showProduct(10,"elma","armut","karpuz");
//showProduct(10,["elma","armut","karpuz"]);

// Spread
let points = [7,9,12,53,81,2,15]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H");

// Destructuring 
let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small,medium,high, veryHigh , maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id,name)
