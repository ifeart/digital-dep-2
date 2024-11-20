// Задание 1 Одномерные массивы
class arrayNumbers {
    static getMinPositiveN(arr: number[]): number {
        const positiveNumbers: number[] = (arr.filter((a) => a > 0)).sort((a, b) => a - b);
        return positiveNumbers[0];
    }
}

console.log(arrayNumbers.getMinPositiveN([-2, 10, -3, 4, -5]));


// Задание 1 Двумерные массивы
class matrixNumbers {
    static getBooleanMatrix(arr: number[][]): boolean[][] {
        let newMatrix: boolean[][] = arr.map((x) =>
            x.map((y) => y.toString().length % 2 !== 0)
        );

        return newMatrix;
    }
}

const oldMatrix = [
    [123, 43, 1],
    [332, 3, 34],
    [43, 325, 36]
]

console.log(matrixNumbers.getBooleanMatrix(oldMatrix));


// Задание 2
type twoNumbers = [number, number];

const newTurple: twoNumbers = [24, 6];

class niceBilet {
    static checkSum(arr: twoNumbers): boolean {
        let sumOneNumber: number = 0;
        (arr[0]).toString().split('').forEach((a) => {
            sumOneNumber += Number(a);
        });

        let sumTwoNumber: number = 0;

        (arr[1]).toString().split('').forEach((b) => {
            sumTwoNumber += Number(b);
        });

        return sumOneNumber === sumTwoNumber;
    }
}

console.log(niceBilet.checkSum(newTurple));


//Задание 3
enum nitrogenousBases {
    Adenine = 'Адеин',
    Guanine = 'Гуанин',
    Cytosine = 'Цитозин',
    Uridine = 'Уридин'
}

console.log(nitrogenousBases.Adenine);


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
type realNutrogenousBase = {
    name: nitrogenousBases,
    openingYear: number,
    scientistOpened: string
}

const myNutrogenousBase: realNutrogenousBase = {
    name: nitrogenousBases.Adenine,
    openingYear: 1885,
    scientistOpened: 'Albrecht Kossel'
}

console.log(JSON.stringify(myNutrogenousBase));