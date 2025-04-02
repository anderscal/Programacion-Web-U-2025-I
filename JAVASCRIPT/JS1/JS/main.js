// alert("Este es el equivalente a JOptionPane.showMessageDialog");
// let variable= prompt("Este es el equivalente a JOptionPane.showInputDialog");
// console.log("Este es el equivalente a un sout")

//-------------------------------------------------------
// let variable1=5;
// let variable2="5";
// let variable3=true;
// let variable4=5.5;

// console.log(typeof(variable1)+variable1);
// console.log(typeof(variable2)+variable2);
// console.log(typeof(variable3)+variable3);
// console.log(typeof(variable4)+variable4);
//-------------------------------------------------------
// let variable="'Hola mundo'"
// let variable2='"Hola mundo"'
// let x=5;
// console.log(variable);
// console.log(variable2);
// console.log(`esto es lo que imprimo ${variable}`);
// console.log(`Esto hace hasta operaciones ${x+x} embebidas`);
//-------------------------------------------------------

// let x=5;
// let y="5";

// console.log(x==y);
// console.log(x===y);
//-------------------------------------------------------

// if(true){

// }
// // ********

// if(true){

// }else{
    
// }
// // ********

// if(true){

// }else if(false){

// }
// // ********

// while(true){

// }
// // ********

// do{

// }while(true)
// // ********

// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }

// ******* 

// const arreglo=[1,2,3,true,false,4.5,{nombre:"juan",edad:18},["a","b","c"]];
// console.log(arreglo);

// const objeto={nombre: "Wilmer", apellido:"Patiño", edad:45}
// console.log(objeto);
// console.log("---FOR OF para recorrer arreglos-----");
// for (const element of arreglo) {
//     console.log(element);    
// }
// console.log("---FOR IN para recorrer objetos-----");
// for (const key in objeto) {
//     console.log(key+": "+objeto[key]);
// }

//EJERCICIO

// Inicializar variables
// let notas = [];
// let promedio = 0;
// let agregarNota = true;

// // Función para calcular el promedio
// function calcularPromedio() {
//   if (notas.length === 0) {
//     return 0; // Evitar división por cero si no hay notas
//   }
//   let suma = 0;
//   for (let i = 0; i < notas.length; i++) {
//     suma += notas[i];
//   }
//   return suma / notas.length;
// }

// // Bucle principal
// while (agregarNota) {
//   // Preguntar al usuario si desea agregar una nota
//   let respuesta = prompt("¿Desea agregar una nueva nota? (si/no)").toLowerCase();

//   // Validar la respuesta
//   if (respuesta === "si") {
//     // Pedir la nueva nota
//     let nuevaNota = parseFloat(prompt("Ingrese la nueva nota:"));

//     // Validar que la nota sea un número válido
//     if (!isNaN(nuevaNota)) {
//       // Agregar la nota al array
//       notas.push(nuevaNota);

//       // Calcular el nuevo promedio
//       promedio = calcularPromedio();

//       // Mostrar el nuevo promedio
//       alert("El promedio actual es: " + promedio);
//     } else {
//       alert("Por favor, ingrese un número válido para la nota.");
//     }

//   } else if (respuesta === "no") {
//     // Cambiar la bandera para salir del bucle
//     agregarNota = false;
//     alert("Programa finalizado. El promedio final es: " + promedio); // Mostrar el promedio final al salir
//   } else {
//     // Respuesta inválida
//     alert("Respuesta inválida. Por favor, ingrese 'si' o 'no'.");
//   }
// }

// FUNCIONES

// function suma(x, y) {
//   return x + y;
// }
// // alert(suma(4,5));

// console.log(suma(4, 5));

// //FUNCIONES FLECHA

// ()=>{} estructura general

// var()=>{} una sola variable
const mult7 = c => c * 7;
console.log(mult7(3));

// (var1,var2) => {} varias variables
// ()=>linearetorno sin llaves,una sola linea de cod
const mult = (a, b) => a * b;
console.log(mult(12, 4));

//sin variables
const tablaDel3 = () => {
  for (let i = 1; i < 11; i++) {
    console.log(3 + " x " + i + " = " + 3 * i);
  }
}
console.log(tablaDel3());  

// let notas = [];
// let promedio = 0;
// let agregarNota = true;

// const calcularProm = () => {

//   if (notas.length === 0) {
//     return 0; 
//   }
//   let suma = 0;
//   for (let i = 0; i < notas.length; i++) {
//     suma += notas[i];
//   }
//   return suma / notas.length;

// }

// // Bucle principal
// while (agregarNota) {
//   // Preguntar al usuario si desea agregar una nota
//   let respuesta = prompt("¿Desea agregar una nueva nota? (si/no)").toLowerCase();

//   // Validar la respuesta
//   if (respuesta === "si") {
//     // Pedir la nueva nota
//     let nuevaNota = parseFloat(prompt("Ingrese la nueva nota:"));

//     // Validar que la nota sea un número válido
//     if (!isNaN(nuevaNota)) {
//       // Agregar la nota al array
//       notas.push(nuevaNota);

//       // Calcular el nuevo promedio
//       promedio = calcularProm();

//       // Mostrar el nuevo promedio
//       alert("El promedio actual es: " + promedio);
//     } else {
//       alert("Por favor, ingrese un número válido para la nota.");
//     }

//   } else if (respuesta === "no") {
//     // Cambiar la bandera para salir del bucle
//     agregarNota = false;
//     alert("Programa finalizado. El promedio final es: " + promedio); // Mostrar el promedio final al salir
//   } else {
//     // Respuesta inválida
//     alert("Respuesta inválida. Por favor, ingrese 'si' o 'no'.");
//   }
// }

