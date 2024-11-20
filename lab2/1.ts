// Задание 1 Одномерные массивы
class arrayNumbers {
    static getMaxNumber(arr: number[]): number | null {
        if (arr.length === 0) {
            return null;
        }

        let maxNumber = arr[0];
        arr.forEach(element => {
            if (element > maxNumber) {
                maxNumber = element;
            }
        });

        return maxNumber;
    }
}

console.log(arrayNumbers.getMaxNumber([1, 2, 3]));

// Задание 1 Двумерные массивы
class matrixNumbers {
    static getHasNegativNumber(arr: number[][]): boolean {
        let hasNegativeNumber = false;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] < 0) {
                    hasNegativeNumber = true;
                    return hasNegativeNumber;
                }
            }
        }

        return hasNegativeNumber;
    }
}

console.log(matrixNumbers.getHasNegativNumber([[1, 2, -3], [4, 5, 6], [7, 8, 9]]));


// Задание 2
type turpleThreeNumbers = [number, number, number];

let newTurple: turpleThreeNumbers = [1, 2, 3];

class turpleNumbers {
    static getSumTurpleNumbers(turp: turpleThreeNumbers): number {
        return turp[0] + turp[1] + turp[2];
    }
}

console.log(turpleNumbers.getSumTurpleNumbers(newTurple));


// Задание 3
enum BallType {
    Football = 'футбольный',
    Basketball = 'баскетбольный',
    Volleyball = 'волейбольный',
    Tennis = 'теннисный',
}

console.log(`На физкультуре мы используем ${BallType.Volleyball} мяч для тренировок`);


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
type realBall = {
    name: BallType;
    size: number;
    color: string;
    material: string;
}

const myBall: realBall = {
    name: BallType.Volleyball,
    size: 22,
    color: 'yellow and blue',
    material: 'rubber'
};

console.log(JSON.stringify(myBall));