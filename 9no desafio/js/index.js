/* let productsList = [
    {
        id: 1, 
        name: "Kodama box set (2xlp, 2x1 LP 45rpm + 2 cds + 6 art prints + artbook + certificate)", 
        band: "Alcest", 
        genre: "Blackgaze",
        type: "Set", 
        price: 80,
        stock: 1,
        imagen: "kodama-box-set-alcest.webp"
    },
    {id: 2, name: "Kodama", band: "Alcest", genre: "Blackgaze", type: "Vinyl", price: 25, stock: 5, imagen: "alcest-kodama-vinyl.jpg"},
    {id: 3, name: "Écailles de lune", band: "Alcest", genre: "Blackgaze", type: "Vinyl", price: 32, stock: 2, imagen: "alcest-ecailles.de.lune.jpg"},
    {id: 4, name: "Lore", band: "Elder", genre: "Stoner Rock", type: "Vinyl", price: 26, stock: 3, imagen: "elder-lore-2lp.jpeg"},
    {id: 5, name: "Lore", band: "Elder", genre: "Stoner Rock", type: "CD", price: 15, stock: 11, imagen: "Elder_Lore.jpeg"},
    {id: 6, name: "Trascendental", band: "MONO & The Ocean", genre: "Post Rock", type: "Vinyl", price: 23, stock: 2, imagen: "mono-trascendental.jpg"},
    {id: 7, name: "Hymn to the immortal wind (10th Anniversary Edition)", band: "MONO", genre: "Post Rock", type: "Vinyl", price: 90, stock: 1, imagen: "MONO-Hymn.to.the.immortal.wind.jpg"},
    {id: 8, name: "Departure Songs", band: "We Lost The Sea", genre: "Post Rock", type: "Vinyl", price: 39, stock: 4, imagen: "we.lost.the.sea-departure.songs.jpg"}
] */

let containerProducts = document.getElementById("containerProducts");
let productsList = []
let basket = [];

function generateShop() {
        containerProducts.innerHTML = "";
        for (let product of productsList) {
            let column = document.createElement("div");
                column.className = "col-sm-12 col-md-6 col-lg-4 mw-100 mh-100 d-flex pb-2";
                column.id = `columna-${product.id}`;
                column.innerHTML = `
                    <div class="card">
                        <img class="card-img-top resizeCard_img" src="img/${product.imagen}" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Nombre: <b>${product.name}</b></p>
                            <p class="card-text">Formato: <b>${product.type}</b></p>
                            <p class="card-text">Precio en dolares: <b>${product.price}</b></p>
                            <p class="card-text" id="cant-${product.id}">stock: <b>${product.stock}</b></p>
                        </div>
                        <div class="card-footer">
                            <button onclick="basketEvent(select)" class="btn btn-primary" id="${product.id}">Agregar</button>
                        </div>
                    </div>`;
                    containerProducts.append(column);
        }
}

function basketEvent(select){
    select = parseInt(select);
    productsList.map(function(y){
        if(y.id == select){
            if (y.stock > 0){
                let product = productsList.find(amount => amount.id == select);
                let same = basket.find((x)=> x.id === product.id);
                if (same === undefined){
                    basket.push({   
                        id: product.id,
                        imagen: product.imagen,
                        name: product.name,
                        type: product.type,
                        price: product.price,
                        stock: 1,});
                    }else{
                        same.stock += 1;
                    }
                    y.stock -= 1;
                    updateStorage();
                    positiveToast();
                }else{
                    showSwal();
                    negativeToast();
            }
        }
    });
    updateCounter(basket);
    generateShop();
}



function positiveToast() {
    Toastify({
        text: "Item se añadio al carrito con exito!",
        duration: 1800,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

function negativeToast() {
    Toastify({
        text: "Hubo un error al cargar el item al carrito",
        duration: 1800,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "red",
        },
    }).showToast();
}

function showSwal() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nos quedamos sin stock!',
      })
}

function updateCounter(cartNumber){
    let total = 0;
    for (let y of cartNumber) {
        total += y.stock;
    }
    cartAmount.innerHTML = total;
}

function triggerEvent() {
    containerProducts.onclick = (event) => basketEvent(event.target.id);
}

function getItemStorage() {
    let productosJSON = localStorage.getItem("basket");
    if (productosJSON) {
        basket = JSON.parse(productosJSON);
        updateCounter(basket);
    }
}

function updateStorage() {
    let productosJSON = JSON.stringify(basket);
    localStorage.setItem("basket", productosJSON);
}

async function callingProductsServer () {
    try {
        const response = await fetch("https://63472f9b0484786c6e7ca19b.mockapi.io/Products");
        const data = await response.json();
        productsList = [...data];
        generateShop();
    } catch (error) {
        console.log(error);
    }
}

function main() {
    callingProductsServer ()
    triggerEvent();
    basketEvent();
    getItemStorage();
}

main();