// Задание 1 Одномерные массивы
class arrayNumbers {
    static getMaxNegativeN(arr: number[]): number {
        const negativeNumbers: number[] = (arr.filter((a) => a < 0)).sort((a, b) => a - b);
        return negativeNumbers[negativeNumbers.length - 1];
    }
}

console.log(arrayNumbers.getMaxNegativeN([-2, 10, -3, 4, -5]));


// Задание 1 Двумерные массивы
class arrayMatrix {
    static getNumberMatrix(arr: boolean[][]): number[][] {
        let newMatrix: number[][] = arr.map((x) =>
            x.map((y) => y ? 1 : 0)
        );

        return newMatrix;
    }
}

const booleanMatrix: boolean[][] = [
    [true, false, false],
    [false, true, false],
    [true, false, true],
];

console.log(arrayMatrix.getNumberMatrix(booleanMatrix));


// Задание 2
type turpleNsN = [number, string, string];

let newTurple: turpleNsN = [76543, 'bbbb', 'ddd'];

class turpleToString {
    static getNewString(turp: turpleNsN): string {
        return `${turp[2]}: ${turp[1]}`;
    }
}

console.log(turpleToString.getNewString(newTurple));


// Задание 3
enum AminoAcids {
    Glycine = 'Глицин',
    Glutamic = 'Глутамин',
    Asparagine = 'Аспарагин',
    Cysteine = 'Цистеин',
}

console.log(`${AminoAcids.Glycine} обладает полезными свойстваи для человека`);


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
type realAminoAcid = {
    name: AminoAcids,
    usedInDrugs: boolean,
    openingYear: number
    fullName: string[]
}

const glycine: realAminoAcid = {
    name: AminoAcids.Glycine,
    usedInDrugs: true,
    openingYear: 1820,
    fullName: ['аминоуксусная кислота', 'аминоэтановая кислота']
};

console.log(JSON.stringify(glycine));