numerosAleatorios = []
// Se genera una funcion para llenar el arreglo con numeros aleatorios dependiendo de un minimo y un maximo.

    function generarAleatorio(minimo, maximo){
        return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
            
    }
// Se genera un for para ingresar los numeros aleatorios dentro del array numerosAleatorios.

        for (let i = 1; i < 41; i++){
            numerosAleatorios.push(generarAleatorio(1, 2000))
            // console.log(numerosAleatorios);
         }

 
function cantidadElementos(numerosAleatorios){
    return `La cantidad de elementos que tiene el arreglos es : ${numerosAleatorios.length}`;
 }

function contarParesImpares(numerosAleatorios, n) {
    if (numerosAleatorios instanceof Array) {
        if (typeof n === 'number' && Number.isInteger(n)) {
            numerosAleatorios.sort();
            let contadorPares = 0;
            let ContadorImpares = 0;

            for(let i = 0; i < numerosAleatorios.length; ++i) {
                if (numerosAleatorios[i] % 2 === 0 && numerosAleatorios[i] <= n) {
                    ++contadorPares;

                    if (numerosAleatorios[i] === n) {
                        break;
                    }
                }
                if (numerosAleatorios[i] % 2 === 1 && numerosAleatorios[i] <= n){
                    ++ContadorImpares;

                    if (numerosAleatorios[i] === n) {
                        break;
                    }
                }
            }
            PorcentajePares = (contadorPares * 100)/numerosAleatorios.length ;
            PorcentajeImpares = (ContadorImpares * 100)/numerosAleatorios.length ;
            return `El porcentaje de pares es: ${PorcentajePares}\nEl porcentaje de Impares es : ${PorcentajeImpares} %`;

        } 
    } 
}

function numerosMayoresA(numerosAleatorios, a){
    let numerosMayoresA =[]
    for (let i = 0; i < a; i++) {
        if (numerosAleatorios[i] > a) {
            numerosMayoresA.push(numerosAleatorios[i])
            // console.log(numerosAleatorios[i]);
        }
        
    }
    return `Los numeros mayores a ${a} son: ${numerosMayoresA}`;
}

function mayorMenor(numerosAleatorios){
    return (`El valor maximo es: ${Math.max.apply(null,numerosAleatorios)} \nEl valor minimo es: ${Math.min.apply(null,numerosAleatorios)}`);
}

function porcentajePromedio(numerosAleatorios){
    const numeroMayor = Math.max.apply(null,numerosAleatorios)
    const numeroMenor = Math.min.apply(null,numerosAleatorios)
    const porcentajeMinimo = (numeroMenor*100)/numeroMayor;
    const sum = numerosAleatorios.reduce((previous, current) => current += previous);
    const avg = sum / numerosAleatorios.length;
    const promedioMayor = (avg*100)/numeroMayor;
    return (`Porcenaje Numero minimo: ${(porcentajeMinimo)} \nEl promedio es: ${(promedioMayor)}`);
    
}

console.log(`Dado el siguiente array :`);
console.log(numerosAleatorios)
console.log("se obtienen los siguientes datos:")

console.log(`\n${cantidadElementos(numerosAleatorios)}`); 

console.log(`\n${contarParesImpares(numerosAleatorios, 2000)}`); 

console.log(`\n${numerosMayoresA(numerosAleatorios, 1000)}`); 

console.log(`\n${mayorMenor(numerosAleatorios)}`); 

console.log(`\n${porcentajePromedio(numerosAleatorios)}`);

