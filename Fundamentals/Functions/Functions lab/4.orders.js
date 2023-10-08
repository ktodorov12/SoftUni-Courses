function orders(product, quantity){
    let orderList = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    }
    let price = orderList[product] * quantity
    return price.toFixed(2)
}

console.log(orders('coffee', 2))