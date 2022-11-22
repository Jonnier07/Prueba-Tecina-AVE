const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let contrasena = "";

rl.question("Ingrese la contraseña a validar: \n", function (string) {
  contrasena = string;
  validarContrasena(contrasena);
  rl.close();
});
function validarContrasena(contrasena){
    const caracteresEspeciales = "!@#$%ˆ&*-_+=?";

    const caracteresArray = caracteresEspeciales.split("");
    const contrasenaArray = contrasena.split("");
    let resultadoValidacion = []
    resultadoValidacion = validarString(validarLogintud(contrasenaArray, 16),resultadoValidacion);
    resultadoValidacion = validarString(contieneMinuscula(contrasenaArray , 1,caracteresEspeciales),resultadoValidacion);
    resultadoValidacion = validarString(contieneMayuscula(contrasenaArray , 1,caracteresEspeciales), resultadoValidacion);
    resultadoValidacion = validarString(contieneNumero(contrasenaArray , 0),resultadoValidacion);
    resultadoValidacion = validarString(contieneLetraConsecutiva(contrasenaArray),resultadoValidacion);
    resultadoValidacion = validarString(contieneCantidadNumeros(contrasenaArray, 4),resultadoValidacion);
    resultadoValidacion = validarString(contieneEspacio(contrasenaArray),resultadoValidacion);
    resultadoValidacion.push.apply(resultadoValidacion,validarCaracteresEspeciales(contrasenaArray, caracteresEspeciales));

    const respuesta = resultadoValidacion.length ? resultadoValidacion : "La contraseña ingresada es valida";
    console.log(respuesta);
}

function validarString(str, resultadoValidacion){
    if (str !== "") {
        resultadoValidacion.push(str)    
    }
    return resultadoValidacion;
}

function validarLogintud(contrasenaArray, longitudEsperada){
    return contrasenaArray.length >= longitudEsperada ? "" :  "Minimo debe tener 16 caracteres" ;
}

function contieneMinuscula(contrasenaArray, minusculasEsperadas,caracteresEspeciales){
    const caracteresEspecialesArray = caracteresEspeciales.split("")
    const arrayFiltrado = contrasenaArray
        .filter(letra => isNaN(letra) && !caracteresEspecialesArray.includes(letra) && letra.toLowerCase() === letra);
    return arrayFiltrado.length >= minusculasEsperadas ? "" : "Minimo debe tener una letra minuscula";
}

function contieneMayuscula(contrasenaArray, mayusculasEsperadas,caracteresEspeciales){
    const caracteresEspecialesArray = caracteresEspeciales.split("")
    const arrayFiltrado = contrasenaArray
    .filter(letra => isNaN(letra) && !caracteresEspecialesArray.includes(letra)&& letra.toUpperCase() === letra);
    return arrayFiltrado.length >= mayusculasEsperadas ? "" : "Minimo debe tener una letra mayuscula";
}

function contieneNumero(contrasenaArray, numero){
    const arrayFiltrado = contrasenaArray.filter(letra => !isNaN(letra)).map(letra => parseInt(letra));
    return arrayFiltrado.includes(numero) ? "No debe contener el numero 0" : "";
}

function contieneLetraConsecutiva(contrasenaArray){
    for (let index = 1; index < contrasenaArray.length; index++) {
        const esLetraConsecutiva = contrasenaArray[index-1].toUpperCase() === contrasenaArray[index].toUpperCase();
        if (esLetraConsecutiva) {
            return true ? "No puede contener ninguna letra ni numeros iguales consecutivos" : "";
        }    
    }
    return false ? "No puede contener ninguna letra ni numeros iguales consecutivos" : "" ;
}

function contieneCantidadNumeros(contrasenaArray, cantidadNumeros){
    const arrayFiltrado = contrasenaArray.filter(letra => !isNaN(letra)).map(letra => parseInt(letra));
    return arrayFiltrado.length >= cantidadNumeros ? "" : "Minimo debe tener 4 numeros ";
}

function contieneEspacio(contrasenaArray){
    return contrasenaArray.includes(" ") ? "No puede contener espacios" : "";
}

function validarCaracteresEspeciales(contrasenaArray, caracteresEspeciales){
    const caracteresEspecialesArray = caracteresEspeciales.split("")
    const caracteresEspecialesFiltrados = contrasenaArray
        .map((elemento, indice) => [elemento, indice])
        .filter(([elemento, indice]) => caracteresEspecialesArray.includes(elemento))
    const contieneAlmenosDosCaracteresEspeciales = caracteresEspecialesFiltrados.length >= 2;
    
    const caracteresEspecialesFiltradosElemento = caracteresEspecialesFiltrados.map(([elemento, indice]) => elemento)
    const contieneCaracteresEspecialesDuplicados = caracteresEspecialesFiltrados.length !== new Set(caracteresEspecialesFiltradosElemento).size;
    const caracteresEspecialesFiltradosindice = caracteresEspecialesFiltrados.map(([elemento, indice]) => indice)
    const diferenciaDeIndices = caracteresEspecialesFiltradosindice
        .slice(1)
        .map(function(n, i) { return n - caracteresEspecialesFiltradosindice[i]; });
    const contieneCaracteresEspecialesJuntos= diferenciaDeIndices.some(value => value == 1)  
    
    const respuesta = []
    if (!contieneAlmenosDosCaracteresEspeciales) {
        respuesta.push("Debe contener almenos dos caracteres especiales")
    }
    if (contieneCaracteresEspecialesDuplicados) {
        respuesta.push("No puede conterner caracteres especiales duplicados");
    }
    if (contieneCaracteresEspecialesJuntos) {
        respuesta.push("No puede contener caracteres especiales juntos")
    }
    return respuesta;
}       
    




