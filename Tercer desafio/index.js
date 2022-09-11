const notaExamen = [
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

console.log(resultado)