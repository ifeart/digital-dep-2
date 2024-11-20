// Задание 1 Одномерные массивы
class arrayNumbers {
    static getMedianNumber(arr: number[]): number {
        const sortedArr: number[] = arr.sort((a, b) => a - b);
        const midIndex: number = Math.floor(sortedArr.length / 2);

        if (sortedArr.length % 2 === 0) {
            return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
        } else {
            return sortedArr[midIndex];
        } 
    }
}

console.log(arrayNumbers.getMedianNumber([2, 3, 3, 5, 7, 10]));


// Задание 1 Двумерные массивы
class matrixNumbers {
    static getCountNotNullNumber(arr: number[][]): number {
        let countNotNullNumber: number = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] != 0) {
                    countNotNullNumber += 1;
                }
            }
        }

        return countNotNullNumber;
    }
}

console.log(matrixNumbers.getCountNotNullNumber([[1, 2, -3], [4, 0, 6], [7, 0, 9]]));


// Задание 2
type turpleSnS = [number, string, number];

let newTurple: turpleSnS = [124, 'android', 543];
class turpleMultuNumber {
    static getMultiNumber(turp: turpleSnS): number {
        return turp[0] * turp[2];
    }
}

console.log(turpleMultuNumber.getMultiNumber(newTurple));


// Задание 3
enum VitaminsType {
    A = "A",
    B3 = "B3",
    B6 = "B6",
    B12 = "B12",
    C = "C",
    D = "D",
    E = "E",
    K = "K"
}

console.log(`В моркови много витамина ${VitaminsType.A}`);


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
type realVitamin = {
    type: VitaminsType,
    openingYear: number,
    productsContain: string[]
}

const vitaminA: realVitamin = {
    type: VitaminsType.A,
    openingYear: 1913,
    productsContain: ['carrot', 'orange', 'apple']
};

console.log(JSON.stringify(vitaminA));