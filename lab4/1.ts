/// <reference path="lab3old.ts" />
// Задание 1 лаба 4
let teslaModelX = new Transport.infoCar(
    'Tesla',
    'Model X',
    new Date(2015),
    'ABC123',
    '300Iq НОМЕРА',
    'Пропал',
    Transport.CarBody.crossover,
    Transport.CarClass.E,
);

teslaModelX.vehiclePrint();

console.log(Transport.CarBody.sedan);

let Arch1S = new Transport.infoMotorBike(
    'Arch Motorcycle',
    '1S',
    new Date(2022),
    'CYBER77NEO',
    'KR2077',
    'Киану Ривз',
    'Стальная',
    true
);

Arch1S.vehiclePrint();