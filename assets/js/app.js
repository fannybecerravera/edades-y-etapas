/*EDADES Y ETAPAS
Crea una web que pida, por medio de un prompt(), la edad de una persona, en años.
Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: toddler, 
preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.
Si la persona ingresa un dato que no es un número entero (por ejemplo: un string, un número decimal,
un cero, o un campo vacío), la web debe dar un mensaje de error. 
Revisa este link que tiene un par de tips interesantes relacionados a este proyecto. */

let age = prompt("¿Cuántos años tienes?");

if(age <= 3 ) {
    alert("¡You are at the stage toddler!");
}else if (age <= 5){
    alert("¡You are at the stage preschooler!");
}else if (age <= 12){
    alert("¡You are at the stage gradeschooler!");
}else if (age <= 17){
    alert("¡You are at the stage teenager!"); 
}else if (age <= 21){
    alert("¡You are at the stage young adult!");
}else {
    alert("¡You are at the stage adult!");
}

