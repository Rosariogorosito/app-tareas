const fs = require ("fs") 


let archivoTareas = {archivo:"tareas.json", leerArchivo:function()
{const tareas = fs.readFileSync ("./tareas.json")
return JSON.parse(tareas)}
} 

module.exports = archivoTareas