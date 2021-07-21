const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'Base de la tabla de Multiplicar',
        type: 'number',
        demmandOption: true,
    })
    .option('l', {
        alias: 'listar',
        describe: 'Lista la tabla en consola',
        type: 'boolean',
        default: false,
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Mustra la Tabla hasta el Numero indicado',
        type: 'number',
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            return 'La base debe ser un numero';
        }
        if (argv.hasta && isNaN(argv.hasta)) {
            return 'El numero debe ser un numero';
        }
        return true;
    }).argv

module.exports = argv;