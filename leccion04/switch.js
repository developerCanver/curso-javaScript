let numero = 3;
let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = 'número 1';
        break;
        case 2:
        numeroTexto = 'número 2';
        break;
        case 3:
        numeroTexto = 'número 3';
        break;
        case 4:
        numeroTexto = 'número 4';
        break;
        case 5:
        numeroTexto = 'número 5';
        break;
        case 6:
        numeroTexto = 'número 6';
        break;

    default:
        break;
}
console.log(numeroTexto);


let mes = 10;
let estacion = 'Estacion desconocida';

switch (mes) {
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
        case 3:  case 4: case 5:
            estacion = 'Primavera';
        break;
        case 6:  case 7: case 8:
            estacion = 'Verano';
        break;
        case 9:  case 10: case 11:
            estacion = 'Otoño';
        break;

    default:
        estacion = 'Valor incorrecto';
        break;
}
console.log(estacion);