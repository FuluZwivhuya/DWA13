const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  products.forEach((product)=>{
    console.log(product.product);
});

// const productLength = products.map((product)=>
//     product.product.length);
// console.log(productLength);

// const provinceFilter = productLength.filter((product) => productLength>5);// BE carefull of the casing
// const filteredOutProvince = provinceFilter.length;
// console.log(filteredOutProvince);

// const filteredProducts = products.filter((product) => product.product.length <= 5);
// console.log(filteredProducts);

const updatedProducts = products.map((product) => {
    const price = parseFloat(product.price);
    return { ...product, price: isNaN(price) ? product.price : price };
});

const filteredProducts = updatedProducts.filter((product) => !isNaN(parseFloat(product.price)));
console.log(filteredProducts);

const totalPrice = filteredProducts.reduce((accumulator, product) => accumulator + parseFloat(product.price), 0);

console.log(totalPrice)



const concatenatedString = products
    .filter(item => String(item.product).trim() !== '')
    .reduce((accumulator, item) => accumulator + (accumulator ? ', ' : '') + item.product, '');

console.log(concatenatedString);



const { highest, lowest } = filteredProducts.reduce((acc, product) => {
    const price = parseFloat(product.price);
    if (price > acc.highest.price) {
        acc.highest = { name: product.product, price: price };
    }
    if (price < acc.lowest.price) {
        acc.lowest = { name: product.product, price: price };
    }
    return acc;
}, {
    highest: { name: '', price: -Infinity },
    lowest: { name: '', price: Infinity }
});

const result = `Highest: ${highest.name}. Lowest: ${lowest.name}`;

console.log(result)


const newProducts = products.map(product =>
    Object.entries(product).reduce((accumulator, [key, value]) => {
        if (key === 'product') {
            accumulator['name'] = value;
        } else if (key === 'price') {
            accumulator['cost'] = value;
        } else {
            accumulator[key] = value;
        }
        return accumulator;
    }, {})
);

console.log(newProducts);