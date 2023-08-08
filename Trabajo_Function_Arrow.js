let autos = ['BMW', 'Mazda', 'Mercedes'];

const addCar = (carro1,carro2) =>{

    return autos.push(carro1,carro2);
}

const gasolinaL = (n1 /*Litros*/,n2/*Precio*/) => n1 * n2;

const CarroFull = (datoOne,datoTwo,operacion)=>{
    return operacion(datoOne,datoTwo);
}

//Function addCar
console.log(CarroFull('Bugati','Porsche',addCar),autos);
//Function gasolinaL
console.log(`Valor de la tanqueada: $${CarroFull(5,4200,gasolinaL)}`);
