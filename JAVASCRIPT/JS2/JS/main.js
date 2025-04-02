let numA = document.getElementById(numA);
let numB = document.getElementById(numB);
let button = document.getElementById(button);
let resul = document.getElementById(resul);

button.addEventListener("click", ()=>{
    resul.value = Number(numA.value) + Number(numB.value);

})