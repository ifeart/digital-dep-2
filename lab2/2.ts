// Задание 1 Одномерные массивы
class arrayNumbers2 {
    static getMinNumber(arr: number[]): number | null {
        if (arr.length === 0) {
            return null;
        }

        let minNumber: number = arr[0];
        arr.forEach(element => {
            if (element < minNumber) {
                minNumber = element;
            }
        });

        return minNumber;
    }
}

console.log(arrayNumbers2.getMinNumber([1, -2, 3]));

// Задание 1 Двумерные массивы
class matrixNumbers2 {
    static getCountNullNumber(arr: number[][]): number {
        let countNullNumber: number = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === 0) {
                    countNullNumber += 1;
                }
            }
        }

        return countNullNumber;
    }
}

console.log(matrixNumbers2.getCountNullNumber([[1, 2, -3], [4, 0, 6], [7, 0, 9]]));


// Задание 2
type turpleThreeStrings = [string, string, string];

let newTurpleStrings: turpleThreeStrings = ['300.', 'ya.', 'ru'];

class turpleStrings {
    static getSumTurpleStrings(turp: turpleStrings): string {
        return turp[0] + turp[1] + turp[2];
    }
}

console.log(turpleStrings.getSumTurpleStrings(newTurpleStrings));


// Задание 3
enum PrinterType {
    Laser = 'лазерный',
    Inkjet = 'струйный',
    Matrix = 'матричный',
    Sublimation = 'сублимационный',
    ThreeDimensional = '3D',
}

console.log(`На кассе банка используется ${PrinterType.Matrix} принтер`);


// Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<realPet extends Pet>(pet: realPet) {
    console.log(`name: ${pet.name}`);
    console.log(`age: ${pet.age}`);
    console.log(`speak: ${pet.speak()}`);
}

printPetInfo(new Cat);
printPetInfo(new Dog);


// Задание 5
type realPrinter = {
    type: PrinterType,
    brand: string,
    price: number,
    color: string,
}

const myPrinter: realPrinter = {
    type: PrinterType.Laser,
    brand: 'HP',
    price: 12000,
    color: 'white',
}

console.log(JSON.stringify(myPrinter));