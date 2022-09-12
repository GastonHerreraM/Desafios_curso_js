/* =================================== EJEMPLO 1 ================================================ */

/* const notaExamen = [
    { nombre: "Julio Caesar", nota: 81},
    { nombre: "Alejandro Magno", nota: 100},
    { nombre: "Anibal Barca", nota:93},
    { nombre: "Alfredo Stroessner", nota:37},
    { nombre: "Cleopatra Thea", nota:76},
    { nombre: "Pol Pot", nota:12},
    { nombre: "Jeanne d'Arc", nota:65},
    { nombre: "Juana Azurduy", nota:88},
    { nombre: "Marie Curie", nota:94},
    { nombre: "Khorloogiin Choibalsan", nota:44},
    { nombre: "Enver Hoxha", nota:29},
    { nombre: "Francisco Solano Lopez", nota:16}
]

let valorInicial = { aprovado: [], reprobado: []}

const resultado = notaExamen.reduce((acumulador, actual) => {
    actual.nota >= 60 ? acumulador.aprovado.push(actual) : acumulador.reprobado.push(actual);
    return acumulador
}, valorInicial)

console.log(resultado) */

/* =================================== EJEMPLO 2 ================================================ */

let arrayNombres = [
    { nombre: "Pedro Lescano", deuda: 783.67},
    { nombre: "Enrique Bonet", deuda: 3488.12},
    { nombre: "Eugenio Berger", deuda: 77.94}
]

function descuento (numeroUno, numeroDos) {
    let resultado = numeroUno - (numeroUno * (numeroDos / 100));
    return resultado;
}

function cuotas (numeroTres, numeroCuatro) {
    let resultado = numeroTres / numeroCuatro;
    return resultado.toFixed(2);
}

function mostrarResultado(resultado) {
    alert("El resultado es: " + resultado);
}

function mostrarMenu () {
    let opcion = prompt("Bienvenido, ingrese la opcion deseada (escriba SALIR pera finalizar)\n1.Calcular descuento \n2.Calcular cuotas \n3.Agendar Deuda \n4.Perritos");
    return opcion;
}

function Main () {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "SALIR") {
        if (opcionSeleccionada !== "") {
            opcionSeleccionada = parseInt(opcionSeleccionada);
            if(!isNaN(opcionSeleccionada)){
                switch(opcionSeleccionada) {
                    case 1:
                        let numeroUno = parseFloat(prompt("ingrese el precio"));
                        let numeroDos = parseFloat(prompt("ingrese el descuento (sin %)"));
                        let resultadoDescuento = descuento (numeroUno, numeroDos);
                        mostrarResultado(resultadoDescuento);
                        break;

                    case 2:
                        let numeroTres = parseFloat(prompt("Ingrese el total"));
                        let numeroCuatro = parseFloat(prompt("ingrese la cantidad de meses"));
                        let resultadoCuotas = cuotas (numeroTres, numeroCuatro);
                        mostrarResultado(resultadoCuotas);
                        break;

                    case 3:
                        let nombre1 = prompt("Ingrese el nombre del cliente");
                        let numeroCinco = parseFloat(prompt("ingrese el monto a deber"));
                        let agendarDeuda = arrayNombres.push ({nombre: nombre1 , deuda: numeroCinco});
                        alert(JSON.stringify(arrayNombres, "", 2))
                        break;

                    case 4:
                        alert("ALABADO SEAN LOS PERRITOS!");
                            location.href = 'https://www.omfgdogs.com/#';
                        break;

                    default:
                        alert("opcion no valida");
                        break;
                }
            }else{
                alert("Debe de selecionar la opcion mediante su numero o escriba SALIR para finalizar");
            }
        }else{
            alert("Seleccione una de las opciones dadas o escriba SALIR para finalizar");
        }
        opcionSeleccionada = mostrarMenu();
    }
}

Main();