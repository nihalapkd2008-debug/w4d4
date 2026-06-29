let productsContainer = document.getElementById("products");

let loading = document.getElementById("loading");

let error = document.getElementById("error");

async function loadProducts(){

    loading.style.display = "block";

    error.innerText = "";

    productsContainer.innerHTML = "";

    try{

        let response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){

            throw new Error("Failed to fetch products.");

        }

        let products = await response.json();

        let html = "";

        products.forEach(function(product){

            html += `

            <div class="card">

                <img src="${product.image}">

                <h3>${product.title}</h3>

                <p>${product.category}</p>

                <p class="price">$${product.price}</p>

            </div>

            `;

        });

        productsContainer.innerHTML = html;

    }

    catch(err){

        error.innerText = err.message;

    }

    finally{

        loading.style.display = "none";

    }

}

loadProducts();