/* EJEMPLO 1 */

let suma = 0;

let numero = parseInt(prompt("Ingrese un numero (no negativos):"));

while(numero >= 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese otro numero (recuerde que no negativos)"));
}

if (numero < 0 || !numero) {
    alert("A ingresado un numero negativo o no ingreso ningun numero");
}

alert("la suma es (no se cuenta el numero negativo) " + suma);
console.log("la suma es " + suma);



/* EJEMPLO 2 */

/* let opcion

do {
    opcion = parseInt(prompt("Gracias por comunicarse al servicio de Autoayuda para cosas simples. Selecione una opcion: \n 1. Huelo feo \n 2. Tengo hambre \n 3. Me pica un huevo \n 4. Son unos inservibles"))

    switch (opcion){
        case 1:
            alert("El jabon es tu amigo, bañese")
            break
        case 2:
            alert("Pedite un lomito/pizza/tacos, nunca fallan.")
            break
        case 3:
            alert("Rasque RASQUE!")
            break
        case 4:
            alert("Exacto, ahi te ves pues")
            break
        default:
            alert("se te complica con 4 numeros hermano? ahora se porq usas este servicio")
    }
} while (opcion !== 4) */



/* EJEMPLO 3 */

/* let numero = parseInt(prompt("ingrese un numero:"));

for (let i = 0; i < numero; i++) {
    console.log("hola")
} */
