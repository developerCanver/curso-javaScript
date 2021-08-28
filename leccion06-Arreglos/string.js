

const autos=['bmw','Benz','Volvo']
console.log(autos)
console.log(autos[0])

for (let i = 0; i < autos.length; i++) {
    //Imprimir con for 
    console.log(i +' Carro ' + autos[i])
}

//Reemplaza o modificar un elememto
autos[1] = 'MercedesBenz';
console.log(autos)

//Agregar un elemento al arreglo
autos.push('Chevrolet');
console.log(autos)

console.log(autos.length);//imprime la cantida de InputDeviceInfo


//agregar elementos din dejar indices vacios 
autos[autos.length]= 'Cadillac';
console.log(autos)

//VAlidar si es un arreglo
console.log(Array.isArray(autos))

console.log(autos instanceof Array)