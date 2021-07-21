const fs = require('fs');
const colors = require('colors');

const multiplicacion = async (base = 5, listar=false, hasta=10) => {
    try {
        let salida = ''
        let consola = ''
        for (i = 1; i <= hasta; i++) {
            consola += (`${base} ${'x'.red} ${i} ${'='.green} ${base * i}\n`);
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        if (listar) {
            console.log('==================='.green);
            console.log('   Tabla del:'.green,colors.green(base));
            console.log('==================='.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);
        return (`table${base}.txt`);
    } catch (error) {
        throw error;
    }
}
module.exports = {
    multiplicacion
}