async function getProducts (){
    const products = await fetch("https://dummyjson.com/products");
    const jsonOfProducts = await products.json();
    const mobiles = jsonOfProducts.products;
    console.log(mobiles);
    let result = mobiles.map(element => {
        return `<div class = "mobile">
          <div class="img"> <img src=${element.thumbnail} alt="Mobile image not found">  </div>
          <h2>${element.title}</h2>
          <div class="about-mobile"> 
          <p>Brand: ${element.brand}</p>
          <p>Available: ${element.stock}</p>
          </div>
          <div class="about-mobile"> 
          <p>Price: ${element.price}$</p>
          <p>Rating: ${element.rating}/5</p>
          </div>

        </div>`
    }).join("");
    document.querySelector(".products .products-contant").innerHTML = result;
}

getProducts ();