let containerProducts = document.getElementById("containerProducts");
let cartLabel = document.getElementById("cartLabel")
let productsList = []
let basket = [];
const botonSwal = document.getElementById("btnshowSwal")

function generateShop(basket) {
    containerProducts.innerHTML = "";
    for (let product of basket) {
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
                            <button onclick="triggerEvent()" class="btn btn-primary" id="${product.id}">Eliminar</button>
                        </div>
                    </div>`;
        containerProducts.append(column);
    }
}

function basketEvent(select) {
    let index = basket.findIndex(x => x.id == select);
    basket.splice(index, 1);
    updateStorage();
    updateCounter(basket);
    generateShop(basket);
}

function updateCounter(productbasket) {
    let total = 0;
    for (const product of productbasket) {
        total += product.stock;
    }
}

function triggerEvent() {
    containerProducts.onclick = (event) => basketEvent(event.target.id);
}

let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { stock, id } = x;
            let search = productsList.find((y) => y.id === id) || [];
            return stock * search.price
        }).reduce((x, y) => x + y)
        cartLabel.innerHTML = `
        <h2> Total a pagar: $ ${amount} dolares</h2>
        <button onclick="showSwal()" class="checkout btn btn-success">Finalizar</button>
        `
    } else return
}

function showSwal() {
    Swal.fire({
        title: 'Desea efectuar la compra?',
        text: "Este seguro de preseguir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Compra efectuada',
                'Muchas gracias',
            )
        }
    })
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

function main() {
    getItemStorage();
    generateShop(basket);
    totalAmount(basket);
}

main();