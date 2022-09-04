function descuento (numeroUno, numeroDos) {
    let resultado = numeroUno - (numeroUno * (numeroDos / 100));
    return resultado;
}

function Cuotas (numeroTres, numeroCuatro) {
    let resultado = numeroTres / numeroCuatro;
    return resultado.toFixed(2);
}

function newDoc() {
    window.location.assign("https://www.omfgdogs.com/#")
  }

function mostrarResultado(resultado) {
    alert("El resultado es: " + resultado);
}

function mostrarMenu () {
    let opcion = prompt("Bienvenido, ingrese la opcion deseada (escriba SALIR pera finalizar)\n1.Calcular descuento \n2.Calcular cuotas \n3.Perritos");
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
                        let resultadoCuotas = Cuotas (numeroTres, numeroCuatro);
                        mostrarResultado(resultadoCuotas);
                        break;

                    case 3:
                        alert("ALABADO SEAN LOS PERRITOS!");
                            newDoc();
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