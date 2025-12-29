let invoice = {
    name: "Gabriel",
    age: 21,
    products: {
        0: ["Monitor", 1200],
        1: ["Mouse", 80],
        2: ["Keyboard", 300],
        3: ["Headset", 150],
    }
}

function generateInvoice(invoice) {
    console.log('The buyer details are:');
    console.log(`Name: ${invoice.name}`);
    console.log(`Age: ${invoice.age}`);
    console.log(`Products:`);
    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index];
        console.log(`- ${productName}: $${productPrice}`);
    }
}

generateInvoice(invoice)