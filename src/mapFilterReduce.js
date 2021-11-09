let cart = [
    {id:1,productName:"Telefon",quantity:2,unitPrice:4000},
    {id:2,productName:"Tablet",quantity:5,unitPrice:2000},
    {id:3,productName:"Kulaklık",quantity:8,unitPrice:400},
    {id:4,productName:"Kalem",quantity:20,unitPrice:12}
]

cart.push({id:5,productName:"Kitap",quantity:30,unitPrice:20})

console.log("<ul>")
cart.map(product=>{
     console.log("<li>"+ product.productName +" : "+ product.quantity * product.unitPrice +"</li>")
})
console.log("<ul>")

let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity,0)
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity > 2)
console.log(quantityOver2)