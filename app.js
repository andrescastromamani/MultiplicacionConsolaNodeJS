//Tabla del 5
const { multiplicacion } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();
//Para ver los argumentos de consola
//console.log(process.argv);

multiplicacion(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(error => console.log(error))


