let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!'); 
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja 
    limpiarCaja();

    //Indicar mensaje de intervalo de números
        
    //Generar el número aleatorio
   
    //Inicializar el número intentos
    condicionesIniciales();
    
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();






/*

//EJERCICIOS DE PRACTICA

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

console.log(listaGenerica);
console.log(lenguagesDeProgramacion);

lenguagesDeProgramacion.push('Java', 'Ruby', 'Golang');

//Funcion para mostrar array por separado
function mostrarLenguajesSeparados() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    } 
}
mostrarLenguajesSeparados();

//Funcion para mostrar array en reverso y separados
function mostrarLenguajesReversoSeparados() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguajesReversoSeparados();

//Funcion para mostrar la media de numeros dados
let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Media:', media);

function calcularMedia(lista) {
    let suma = 0; 
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

//Funcion para mostrar el numero mayor y menos de una lista
let numerosMyM = [15, 8, 25, 5, 12];

function encontrarMayorMenor(lista2) {
    let mayor = lista2[0];
    let menor = lista2[0];

    for (let i = 1; i < lista2.length; i++) {
        if (lista2[i] > mayor) {
            mayor = lista2[i];
        }
        if (lista2[i] < menor) {
            menor = lista2[i];
        }
    }
    console.log('Mayor', mayor);
    console.log('Menor', menor);
}
encontrarMayorMenor(numerosMyM);

//Funcion para sumar todos los elementos de una lista 
let numerosSuma = [15, 8, 25, 5, 12];

function calcularSuma(lista3) {
    let sumaNu = 0;
    for (let i = 0; i < lista3.length; i++) {
        sumaNu += lista3[i];
    }
    return sumaNu;
}
let sumaNu = calcularSuma(numerosSuma);
console.log('Suma:', sumaNu);

//función que reciba una lista como parámetro y retorne el índice 
//de un elemento también pasado como parámetro. Si ese elemento 
//no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista4, elemento) {
    for (let i = 0; i < lista4.length; i++) {
        if (lista4[i] === elemento){
        return i; //Retorna el indice del elemento encontrando
        }
    }
    return -1; //Retorna -1 si el elemento no se cuentra en la lista 
}

*/


/*

// Crea una función que calcule el índice de masa corporal (IMC) 
//de una persona a partir de su altura en metros y peso en kilogramos, 
//que se recibirán como parámetros.
function calcularMasa (altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
}

//Crea una función que calcule el valor del factorial de un número 
//pasado como parámetro.

let numero = 3;
let resultado = calcularFactorial(numero);

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

console.log(`El factorial de ${numero} es ${resultado}`);


//Crea una función que convierta un valor en dólares, pasado como 
//parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
//si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, 
//considera la cotización del dólar igual a R$4,80.

let valorEnDolar = 50;
let valorEnPesos = convertirDolaresaPesoColombiano(valorEnDolar);

function convertirDolaresaPesoColombiano(dolares) {
    var cotizacionDolar = 3.93;
    var pesos = dolares * cotizacionDolar;
    return pesos;
}
console.log(`${valorEnDolar} dólares es $ ${valorEnPesos} pesos`);


//Crea una función que muestre en pantalla el área y el perímetro de 
//una sala rectangular, utilizando la altura y la anchura que se 
//proporcionarán como parámetros.

let altura = 3; // en metros
let anchura = 5; // en metros

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log('Área: ' + area);
    console.log('Perimetro: ' + perimetro);
}

calcularAreaYPerimetroRectangular(altura, anchura);


//Crea una función que muestre en pantalla el área y el perímetro de 
//una sala circular, utilizando su radio que se proporcionará como parámetro. 
//Considera Pi = 3,14.

let radio = 4; //en metros

function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log('Área: ' + area);
    console.log('Perimetro: ' + perimetro);
}
calcularAreaYPerimetroCircular(radio);

//Crea una función que muestre en pantalla la tabla de multiplicar 
//de un número dado como parámetro.

let numero2 = 7;

function mostrarTablaDeMultiplicar(numero2) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numero2 * i;
        console.log(numero2 + " x " + i + " = " + resultado);
    }

}
mostrarTablaDeMultiplicar(numero2);
*/

/*
function saludo() {
    console.log('Hola mundo');
}
saludo();

function mostrarHolaMundo(nombre) {
    console.log(`Hola, ${nombre}`);
}
mostrarHolaMundo('Luis');


function calcularDoble(numero){
    return(numero*2);
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

function encontrarMayor(a,b) {
    return a > b ? a : b; 
}
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

function cuadrado(numero){
    return numero * numero;
}
let resultado = cuadrado(2);
console.log(resultado);
*/

