const archivoTareas = require ("./funcionesDeTareas")
let arrayTareas = archivoTareas.leerArchivo()
let accion = process.argv [2]
switch (accion) {
    case "listar": 
        console.log(arrayTareas)
        break;
    case accion : 
    console.log("no entiendo que quieres hacer")
        break;
    default:
        console.log("atencion tienes que pasar una acción")
        break;
}


