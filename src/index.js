const $body = document.querySelector("body");
const API = "https://api.escuelajs.co/api/v1/products/?offset=5&limit=10";
import logo from './assets/logo.png';
import './styles/styles.css';

const main = async () => {
    const response = await fetch(API);
    const products = await response.json();
    const output = products.map((product)=>{
        return `
            <article class="Card"> 
            <img src="${product.images[0]}" />
            <h3>
                ${product.title} <small>Precio $${product.price}</small>
            </h3>
            </article>
        `
    }).json('');

    const newItem = document.createElement('section');
    newItem.classList.add('Items');
    newItem.innerHTML = output;

    const newHeader = document.createElement('header');
    const newImg = document.createElement('img');

    newImg.src = logo;
    newHeader.appendChild(newImg);

    $body.appendChild(newHeader);
    $body.appendChild(newItem);

}

main()

