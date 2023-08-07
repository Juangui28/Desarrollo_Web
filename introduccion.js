let name = 'Juan Guillermo';
const edad = 21;

console.log('Mi nombre es '+name+' y estudio en la IUPB');
console.log(`Tengo ${edad} años de edad`);

//Else

if(edad >= 18){
  console.log('Eres mayor de edad');
}else{
  console.log('No eres mayor de edad');
}

//Switch

const talla = 'L';

switch (talla){
  case 'XS':
    console.log('Extra Small');
    break;
  case 'S':
    console.log('Small');
    break;
  case 'M':
    console.log('Medium');
    break;
  case 'L':
    console.log('Large');
    break;
  default:
    console.log('La talla no existe');
}


// If

let passport = true;

if(passport === true){
  console.log('Puedes salir del pais')
}

//Else if

if (edad > 0 && edad <= 5) {
  console.log('Primera Infancia');
} else if (edad >= 6 && edad <= 11) {
  console.log('Infancia');
} else if (edad >= 12 && edad <= 18) {
  console.log('Adolescencia');
} else if (edad >= 19 && edad <= 26) {
  console.log('Juventud');
} else if (edad >= 27 && edad <= 59) {
  console.log('Adultez');
} else {
  console.log('Adulto Mayor');
}

// For

for (let i = 1; i<101; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  }else if(i % 5 === 0){
    console.log('Buzz')
  }else if (i % 3 === 0){
    console.log('Fizz')
  }else{
    console.log(i);
  }
};

// forEach

let numeros = [2,4,6,8,10]

numeros.forEach(function(elementos){
  console.log(elementos * 2);
});

// Do While

let j = 0;
let x = 0;

do{
  x = x + 1;
  console.log(`5 X ${x} = ${5*x}`);
  j++;
  
}while(j<10)

// While (Numeros pares del 1 al 20)

let z = 1;

while (z<=20){
  if(z % 2 === 0){
    console.log(`${z} es par`)
  }
  z++;
};