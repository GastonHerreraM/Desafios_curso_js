/* ==============================EJEMPLO 2 CARGAR TABLA================================= */


let Products = [];

const preloadItems = [
    {
        code: 1,
        name: "Buckshot",
        Price: 40,
        stock: 420
    },
    {
        code: 2,
        name: "Slug",
        Price: 60,
        stock: 200
    },
    {
        code: 3,
        name: "Dragon's breath",
        Price: 88,
        stock: 112
    },
    {
        code: 4,
        name: "Fusion cell",
        Price: 142,
        stock: 431
    },
    {
        code: 5,
        name: "10mm round",
        Price: 80,
        stock: 1370
    },
    {
        code: 6,
        name: ".308",
        Price: 210,
        stock: 642
    }
]



let html = "<table>"
html+= '<tr>';
html+= '<th>'+" code "+'</th>';
html+= '<th>'+" name "+'</th>';
html+= '<th>'+" Price "+'</th>';
html+= '<th>'+" stock "+'</th>';
html+= '</tr>';

for(let i=0; i<preloadItems.length; i++){
    html+= '<tr>';
    html+= '<td>'+preloadItems[i].code+'</td>';
    html+= '<td>'+preloadItems[i].name+'</td>';
    html+= '<td>'+preloadItems[i].Price+'</td>';
    html+= '<td>'+preloadItems[i].stock+'</td>';
    html+= '</tr>';
}

document.getElementById("table").innerHTML = html