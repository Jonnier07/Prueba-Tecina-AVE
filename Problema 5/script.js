var is_visible = false;
const caracteresEspeciales = "!@#$%ˆ&*-_+=?";
const inputArray = input.split("");

function see()
{
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true; 
        see.style.color='#262626';
    }
    
}

function check()
{
    var input = document.getElementById("password").value;
    
    
    input=input.trim();
    document.getElementById("password").value=input;
    document.getElementById("count").innerText="Length : " + input.length;

    validarLogintud(input, 16);
    contieneMinuscula(input, 1 , caracteresEspeciales);
    contieneMayuscula(input, 1 , caracteresEspeciales);
    contieneNumero(input, 0);
    contieneLetraConsecutiva(input);
    contieneCantidadNumeros(input,4);
    contieneEspacio(input);
    validarCaracteresEspeciales(input,caracteresEspeciales);
   
}
     

function validarLogintud(input, longitudEsperada){
    return input.length >= longitudEsperada ? document.getElementById("check0").style.color="green" :  
    document.getElementById("check0").style.color="red" ;

}

function contieneMinuscula(input, minusculasEsperadas,caracteresEspeciales){
    const caracteresEspecialesArray = caracteresEspeciales.split("")
    const inputArray = input.split("");
    const arrayFiltrado = inputArray
        .filter(letra => isNaN(letra) && !caracteresEspecialesArray.includes(letra) && letra.toLowerCase() === letra);
    return arrayFiltrado.length >= minusculasEsperadas ? document.getElementById("check1").style.color="green" 
    : document.getElementById("check1").style.color="red";
}

function contieneMayuscula(input, mayusculasEsperadas,caracteresEspeciales){
    const caracteresEspecialesArray = caracteresEspeciales.split("")
    const inputArray = input.split("");
    const arrayFiltrado = inputArray
    .filter(letra => isNaN(letra) && !caracteresEspecialesArray.includes(letra)&& letra.toUpperCase() === letra);
    return arrayFiltrado.length >= mayusculasEsperadas ? document.getElementById("check2").style.color="green" 
    : document.getElementById("check2").style.color="red";
}

function contieneNumero(input, numero){
    const inputArray = input.split("");
    const arrayFiltrado = inputArray.filter(letra => !isNaN(letra)).map(letra => parseInt(letra));
    return arrayFiltrado.includes(numero) 
    ? document.getElementById("check3").style.color="red" 
    : document.getElementById("check3").style.color="green";
}

function contieneLetraConsecutiva(input){
    const inputArray = input.split("");
    for (let index = 1; index < input.length; index++) {
        const esLetraConsecutiva = inputArray[index-1].toUpperCase() === inputArray[index].toUpperCase();
        if (esLetraConsecutiva) {
            return document.getElementById("check4").style.color="red";
        }  
        
    }
 
    return document.getElementById("check4").style.color="green";
}   

function contieneCantidadNumeros(input, cantidadNumeros){
    const inputArray = input.split("");
    const arrayFiltrado = inputArray.filter(letra => !isNaN(letra)).map(letra => parseInt(letra));
    return arrayFiltrado.length >= cantidadNumeros 
    ? document.getElementById("check5").style.color="green" 
    : document.getElementById("check5").style.color="red";
}

function contieneEspacio(input){
    const inputArray = input.split("");
    return inputArray.includes(" ") 
    ? document.getElementById("check6").style.color="red" 
    : document.getElementById("check6").style.color="green";
}

function validarCaracteresEspeciales(input, caracteresEspeciales){
    const inputArray = input.split("");
    const caracteresEspecialesArray = caracteresEspeciales.split("")
    const caracteresEspecialesFiltrados = inputArray
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
    
    if (!contieneAlmenosDosCaracteresEspeciales) {
        return document.getElementById("check7").style.color="red";
    }   
    if (contieneCaracteresEspecialesDuplicados) {
        return document.getElementById("check7").style.color="red";
    }
    if (contieneCaracteresEspecialesJuntos) {
        return document.getElementById("check7").style.color="red"
    }
    return document.getElementById("check7").style.color="green" ;
}       