const messages = document.querySelector('.messages');
const productsList = document.querySelector('#products-list');



const fetchingProducts = async () => {
    try {
        const response = await fetch('http://localhost:1234/api/products');
        method = "GET";

        productsList.innerHTML = '';

        productsList.forEach((product) => {
            const li = document.createElement('li');
            li.textContent = product.name;

    }  catch (err) {
        messages.textContent = err.message;
        console.log(err)
    }
}

fetchingProducts();
