/**
 * Construir Array con min 2 objetos
 * Cada objeto debe tener adentro otro objeto
 * Van a usar minimo 3 metodos de arreglos sobre el array
 */

const mainObject = [];

const consoleVideoGamesObject=[
    {color:'black',
    controls: 2,
    cd: true,
    games:30,
    info:{
        company: 'PlayStation',
        generation: 5,
        storage: '256gb',
        year:2019
    }},

    {color:'white',
    controls: 4,
    cd: false,
    games:50,
    info:{
        company:'Xbox',
        generation:'S',
        storage:'256gb',
        year:2020
    }},

    {color:'black',
    controls: 2,
    cd: false,
    games:10,
    info:{
        company:'Nintendo',
        generation:'Switch',
        storage:'32gb',
        year:2017
    }},
];

const motorcycle = [
    {color: 'black',
    marca: 'KTM',
    placa: 'MRO75D',
    ruedas: 2,
    info:{
        frenosABS: true,
        cilindraje: 250,
        tanque: '12L',
        potencia: '26,1 HP',
        torque: '22,2 NM'
    }},

    {color: 'white',
    marca: 'Yamaha',
    placa: 'AXD7J0',
    ruedas: 3,
    info:{
        frenosABS: true,
        cilindraje: 300,
        tanque: '15L',
        potencia: '35,4 HP',
        torque: '29,0 NM'
    }},

    {color: 'white',
    marca: 'AKT',
    placa: 'MD731C',
    ruedas: 2,
    info:{
        frenosABS: false,
        cilindraje: 180,
        tanque: '10L',
        potencia: '20,4 HP',
        torque: '21,0 NM'
    }}
    
];

mainObject.push(consoleVideoGamesObject);
mainObject.push(motorcycle);
console.log(mainObject);

//Metodos

const releaseYear = consoleVideoGamesObject.filter((console)=> console.info.year >= 2019);
console.log(releaseYear);

const verify = motorcycle.every((moto)=>moto.info.frenosABS === true);
console.log(verify);

const words = consoleVideoGamesObject.every((word)=> word.info.company.length > 3);
console.log(words);