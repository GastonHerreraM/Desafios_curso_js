let productsList = [
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
]

let containerProducts = document.getElementById("containerProducts");
let cartLabel = document.getElementById("cartLabel")
let basket = [];
const botonSwal = document.getElementById("btnMostrarSwal")

function generateShop(basket){
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

function basketEvent(select){
    let index = basket.findIndex(x => x.id == select);
    basket.splice(index, 1);
    updateStorage();
    updateCounter(basket);
    generateShop(basket);
}

function updateCounter(productbasket){
    let total = 0;
    for (const product of productbasket) {
        total += product.stock;
    }
}

function triggerEvent() {
    containerProducts.onclick = (event) => basketEvent(event.target.id);
}

let totalAmount = () => {
    if(basket.length !== 0) {
        let amount = basket.map((x) => {
            let {stock, id} = x;
            let search = productsList.find((y) => y.id === id) || [];
            return stock * search.price
        }).reduce((x, y) => x + y, 0)
        cartLabel.innerHTML = `
        <h2> Total a pagar: $ ${amount} dolares</h2>
        <button onclick="mostrarSwal()" class="checkout btn btn-success">Finalizar</button>
        `
    } else return
}

function mostrarSwal () {
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
    totalAmount();
}
  
main();