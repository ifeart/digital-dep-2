// Задание 1 Одномерные массивы
class arrayNumbers {
    static getSredArfm(arr: number[]): number | null {
        if (arr.length === 0) {
            return null;
        }
        
        let sumNumbers: number = 0;
        arr.forEach(element => {
            sumNumbers += element;
        });

        return sumNumbers / arr.length;
    }
}

console.log(arrayNumbers.getSredArfm([1, 2, 3, 4, 5]));

// Задание 1 Двумерные массивы
class matrixNumbers {
    static getHasNegativNumber(arr: number[][]): number {
        let countIntNumber: number = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number.isInteger(arr[i][j])) {
                    countIntNumber += 1;
                }
            }
        }

        return countIntNumber;
    }
}

console.log(matrixNumbers.getHasNegativNumber([[1, 2.9, 3.8], [4, 5, 6], [7, 8.7, 9]]));


// Задание 2
type turpleSsN = [string, string, number];

let newTurple: turpleSsN = ['aaaa', 'bbbb', 19876];

class turpleToString {
    static getNewString(turp: turpleSsN): string {
        return `${turp[0]} - ${turp[2]} - ${turp[1]}`;
    }
}

console.log(turpleToString.getNewString(newTurple));


// Задание 3
enum OilType {
    Sunflower = 'подсолнечное',
    Palm = 'пальмовое',
    Rapeseed = 'рапсовое',
    Butter = 'сливочное',
    Chocolate = 'шоколадное'
}

console.log(`В Россию стали завозить ${OilType.Butter} масло из Дубая`)


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
type realOil = {
    type: OilType;
    price: number;
    brand: string;
    weight: number;
}

const myOil: realOil = {
    type: OilType.Sunflower,
    price: 110,
    brand: 'BigSun',
    weight: 1000
};

console.log(JSON.stringify(myOil));