// // 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// // Pediremos al usuario qué figura queremos calcular, su área y, según lo introducido,
// // pedirá los valores necesarios para calcular el área. Para ello has de crear un método
// // por cada figura para calcular cada área, este devolverá un número real. Muestra el
// // resultado por consola.
// // Aquí te mostramos qué necesita cada figura:
// // • Circulo: (radio^2)*PI
// // • Triangulo: (base * altura) / 2
// // • Cuadrado: lado * lado
// let figure = prompt(`Introduce la figura sobre la cual deseas calcular el área (circulo, cuadradro o triangulo)`).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// switch(figure) {
//     case "circulo":
//         const PI = 3.1416;
//         let radius = parseFloat(prompt('Introduce el radio del círculo'));
//         alert(`El área de un círculo de radio ${radius} es ${(Math.pow(radius, 2) * PI)}`);
//         break;
//     case "triangulo":
//         let triangleWidth = parseFloat(prompt('Introduce la base del triángulo'));
//         let triangleHeight = parseFloat(prompt('Introduce la altura del triángulo'));
//         alert(`El área de un triángulo de base ${triangleWidth} y altura ${triangleHeight} es ${(triangleWidth * triangleHeight)/2}`);
//     break;
//     case "cuadrado":
//         let side = parseFloat(prompt('Introduce el lado del cuadrado'));
//         alert(`El área de un cuadrado de lado ${side} es ${(side*side)}`);
//     break;
// }




// // // 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// // // introducidos por el usuario (prompt). Crea un método donde pasamos como parámetros
// // // entre qué números queremos que los genere, podemos pedirlas al usuario antes de
// // // generar los números. Este método devolverá un número entero aleatorio. Muestra
// // // estos números por consola.
//const MinMaxRoundedRandom = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }

// let lowNum = parseInt(prompt(`Introduce el número límite más bajo sobre el que quieres generar aleatorios`));
// let highNum = parseInt(prompt(`Ahora, introduce el número límite más alto sobre el que quieres generar aleatorios`));
// let quantity = parseInt(prompt(`Cuántos números aleatorios quieres generar?`));

// for(let i=1 ; i<= quantity ; i++) {
//     console.log(MinMaxRoundedRandom(lowNum, highNum));
// }






// // 3. Crea una aplicación que nos pida un número por prompt y con un método se lo
// // pasamos por parámetro para que nos indique si es o no un número primo, debe
// // devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
// // entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
// // embargo, 17 si es primo.
// const isPrime = num => {
// for(let i=2; i<num; i++)
//     if(num % i === 0){
//         alert(`El número ${number} NO es primo`);
//         return false;
//     }     
//     alert(`El número ${number} sí es primo!`);
//     return 
// }
        
// let number = parseInt(prompt(`Introduce un número para saber si es primo`));
// isPrime(number);





// // 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// // realizara mediante un método al que le pasamos el número como parámetro. Para
// // calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// // ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.
// const factorialCalc = num => {
//     for(let i=num ; i>1 ; i-- ){
//             num *= (i-1);
//     }
//     return num;
// }
    
// let number = parseInt(prompt(`Introduce un número para calcular su factorial`));
// alert(`El factorial de ${number} es ${factorialCalc(number)}`);
        



// // 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// // realizará un método al que le pasaremos el número como parámetro, devolverá un
// // String con el numero convertido a binario. Para convertir un número decimal a
// // binario, debemos dividir entre 2 el número y el resultado de esa división se divide
// // entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
// // cada división formara el número binario, de abajo a arriba.
// const decToBin = num => {
//     let binString = "";
//     //Convert number to natural number
//     num = Math.abs(num);

//     //If any number distinct to 0:
//     if(num>0){
//         while(num>=1){
//             //Extract the first module
//             let module = num%2;

//             //Concatenate it to the bin variable
//             binString = binString.concat(module);

//             //Divide per 2 for calculate and assing to num to iterate the loop. 
//             //Round the result for binary calculation.
//             num = Math.floor(num / 2);

//         }
//         //Reverse the string
//         binString = binString.split("").reverse().join("")

//         return binString;
//     //If zero:
//     } else if (num === 0) return "0";

// }
// console.log("decToBin(10)", decToBin(1989));




// // // 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// // // (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// // // pasando el número por parámetro devolverá el número de cifras.
// let number = parseInt(prompt(`Introduce un número para contar sus cifras`));

// const digitCounter = num => {
//     num = Math.abs(num);

//     num = num.toString();

//     return num.length;
// }
// alert(`El número ${number} tiene ${digitCounter(number)} cifras.`);





// // 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
// // a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// // parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// // devolverá ningún valor, mostrará un mensaje indicando el cambio.
// // El cambio de divisas es:
// // • 0.86 libras es un 1 €
// // • 1.28611 $ es un 1 €
// // • 129.852 yenes es un 1 €
// let euros = parseFloat(prompt('Introduce la cantidad en euros'));
// let coin;
// let eurosOk;
// let coinOk;

// if (!isNaN(euros)) {
//     eurosOk = true;
//     coin = prompt('Introduce la moneda de cambio (libra, dolar o yen)').toLowerCase();
// } else if (isNaN(euros)) {
//     eurosOk = false;
//     alert(`Por favor introduce un valor numérico para la cantidad de euros`);
// } 

// if ((coin == "libra") || (coin == "dolar") || (coin == "yen")) {
//     coinOk = true;
// } else if ((coin !="libra") && (coin !="dolar") && (coin !="yen")) {
//     coinOk = false;
//     alert('Por favor introduce una moneda válida');
// }

// const coinConvert = (quantity, coin) => {
//     if(eurosOk && coinOk) {
//         switch(coin) {
//             case "libra":
//                 alert(quantity * 0.86);
//             break;

//             case "dolar":
//                 alert(quantity * 1.28611);
//             break;

//             case "yen":
//                  alert(quantity * 129.852);
//             break;
//         }
//     }
// }
// coinConvert(euros, coin);







// // 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// // por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// // rellenar valores y otro para mostrar.
// const fillArray = () => {
//     let valArray = [];
//     for(let i=0 ; i<10 ; i++) {
//         let value = (prompt(`Introduce el valor nº${i+1}`));
//         valArray.push(value);
//     }
//     return valArray;
// }

// const printArray = arr => {
//     for(i=0 ; i<arr.length ; i++) {
//         console.log(`El índice ${i} corresponde al valor ${arr[i]}`);
//     }
// }

// printArray(fillArray());






// // 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// // rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
// // el valor de cada posición y la suma de todos los valores. 
// // Tareas a realizar: Haz un método para rellenar el array
// // (que tenga como parámetros los números entre los que tenga que generar) 
// // y otro para mostrar el contenido y la suma del array.

// //Declare a global function for call the action of prompt
// const callFillArray = () => {
//     //Inside, declare the function that will do the core of the exercise.
//     const fillRandomArray = (low, high) => {
//         let arrSize = high - low;
//         let arr=[];
//         let numRndm=0;
//         let total=0;

//         for(let i=0 ; i<arrSize ; i++){
//             numRndm = Math.random(numRndm);
//             numRndm = numRndm*10;
//             numRndm = Math.floor(numRndm);
//             arr.push(numRndm);
//             console.log(`La posición ${i} tiene el valor ${numRndm}`);
//         }
//         //Sumatory of all elements
//         total = arr.reduce((acc, num) => acc+num);
//         console.log(`La suma de todos los valores es ${total}`);
//     }

//     //Declare logic for calling the prompt. The reason for this order is because if declaration of 
//     // fillRandomArray() is after, when is called by the prompt part, js throws error for being called before declaration.
//     let lowLimit = parseInt(prompt('Introduce el límite inferior'));
//     let highLimit;
//     let lowLimitOk = false;
//     let highLimitOk = false;
//     if(!isNaN(lowLimit)) {
//         highLimit = parseInt(prompt('Introduce el límite superior'));
//         lowLimitOk = true;
//     } else alert ('Por favor introduce un valor numérico para el límite inferior');

//     if((!isNaN(highLimit))&&(lowLimitOk)) {
//         highLimitOk = true;
//         fillRandomArray(lowLimit, highLimit);
//     } else if((lowLimitOk)&&(isNaN(highLimit))) {
//         alert ('Por favor introduce un valor numérico para el límite superior');
//     }   
// }

// callFillArray();







// // 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// // números aleatorios primos entre los números deseados, por último, nos indicará cual
// // es el mayor de todos. Haz un método para comprobar que el número aleatorio es
// // primo, puedes hacer todos los métodos que necesites.

// //Global function that will do all
// const randomPrimeFinder = (low, high) => {
//     //isPrime identifies prime numbers returning true or false
//     const isPrime = num => {
//         for(let i=2; i<num; i++)
//             if(num % i === 0){
//                 return false;
//             }     
//             return true
//     }

//     //this one returns a random number between two limits
//     const MinMaxRoundedRandom = (min, max) => {
//         return Math.round(Math.random() * (max - min) + min);
//     }

//     let quantity = parseInt(high - low);
//     let arr = [];

//     //We go through quantity and push the results of the random function in arr
//     for(let i=0 ; i< quantity ; i++) {
//     arr.push(MinMaxRoundedRandom(low, high));
//     }
//     let primeArr=[];

//     //We go through arr and call to prime identifier function
//     for(let j=0 ; j<arr.length ; j++) {
//         if(isPrime(arr[j])) {
//             primeArr.push(arr[j]);
//         }
//     }
    
//     //we call Math.max method to whole primeArr array as a parameter using spread
//     let max = Math.max(...primeArr);

//     //We create an object that will be the return of the function
//     const result = {
//         primesFound: primeArr,
//         maxPrime: max
//     };

//     return result;
// }


// let lowNum = parseInt(prompt(`Introduce el número límite más bajo sobre el que quieres generar aleatorios`));
// let highNum = parseInt(prompt(`Ahora, introduce el número límite más alto sobre el que quieres generar aleatorios`));


// console.log(randomPrimeFinder(lowNum, highNum));






// // 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
// // estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
// // los valores del segundo array con valores aleatorios. Después, crea un método que
// // tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
// // de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
// // el contenido de cada array.


// /*************************************************************************************************
// // PART 1 OF THE EXERCISE: Generate one array with random values. Assign them to a new array but randomized*/

// //This function returns a random rounded number between two limits.
// const MinMaxRoundedRandom = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }

// let arrSize = parseInt(prompt('Introduce el tamaño de los Arrays'));
// let arr1=[];
// let arr2=[];
// //This variable collects arr1 indexs that has been copied to arr2 so repeated copies can not be done:
// let arr1IndexLog=[];
// let num;

// //Create and fill arr1 with random numbers:
// for(let i=0 ; i<arrSize ; i++) {
//     num= Math.round(Math.random(num)*10000);

//     arr1.push(num);
// }

// //Generate random index extracted from arr1
// const generateRandomIndex = () => {
// let arr1RndmIndex = MinMaxRoundedRandom(0, arr1.length-1);
// return arr1RndmIndex;
// } 

// let newIndex;
// //Fill arr2 with arr1 numbers but randomly distributed. We assume values can not repeat.
// for(let j=0 ; j<arrSize ; j++) {
//     //Save random index from arr1 to a variable
//     newIndex = generateRandomIndex();

//     //While the random index generated is already saved, we generate another one for not repeating.
//     while(arr1IndexLog.includes(newIndex)){
//         newIndex = generateRandomIndex();
//     }

//     //Save all the index that has been saved
//     arr1IndexLog.push(newIndex);

//     //Push the value from arr1 to arr2
//     arr2.push(arr1[newIndex]);


// }
// console.log(arr1, arr2);
// /********************************************************************************************************** */



// /********************************************************************************************************** */
// //PART 2: Multiply each array position with the other ones and return a new array with the results.

// const arrayMultiplier = (arr1, arr2) => {
//     let resultArray=[];
//     for(i=0 ; i<arr1.length ; i++) {
//         let result = (arr1[i] * arr2[i]);
//         resultArray.push(result);
//     }
//     return resultArray;
// }

// console.log(arrayMultiplier(arr1, arr2));






// // 12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// // números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
// // dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un
// // número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array
// //  de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir
// // 155, 25, etc

// let arrSize = parseInt(prompt('Introduce el tamaño del Array'));
// let arr1=[];

// //This function returns a random rounded number between two limits.
// const MinMaxRoundedRandom = () => {
//     return Math.round(Math.random() * (300 - 1) + 1);
// }

// for(let i=0 ; i<arrSize ; i++) {
//         arr1.push(MinMaxRoundedRandom());
// }


// let digit = parseInt(prompt(`Introduce el último dígito`));
// let arrNew=[];
// let lastDigit;
// let arrResult=[];

// if((!isNaN(digit))&&(digit>=0)&&(digit<10)){
//     for(let j=0 ; j<arrSize ; j++) {
//         //Converts each element to string:
//         arrNew[j] = arr1[j]+"";
//         //Converts the string to array
//         arrNew[j] = arrNew[j].split("");

//         //Now we isolate the last number for compare it
//         lastDigit= arrNew[j][arrNew[j].length-1];

//         if(lastDigit == digit) {
//             arrResult.push(arr1[j]);
//         }
//     }
//     console.log(arrResult);
// }   else alert('Introduce un número del 0 al 9 por favor');

