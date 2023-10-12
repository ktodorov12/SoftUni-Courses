function listoOfProducts(products){
    let ordered = products.sort().map((x, i) => console.log(`${i + 1}.${x}`));
}

listoOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])