// Задание 1
import * as readline from 'readline';

const fromConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((res) => {
        fromConsole.question(question, (answer) => {
            res(answer);
        });
    });
}

async function runTask1() {
  let firstNumber: number = Number(await askQuestion('Введите первое число: '));
  let secondNumber: number = Number(await askQuestion('Введите второе число: '));
  
  console.log(firstNumber.toString() + secondNumber.toString());
  fromConsole.close();
}

// Задание 2
const robotName: string = 'VALL.E';
const robotAge: number = 751;
const robotActive: boolean = true;
const robotHobbies: string[] = ['Clean', 'Save good things', 'Love', 'Dance'];
let robotMainIdea: any = undefined;
let robotTasksPriority: { task: string; priority: number }[] = [
    { task: 'Save flower', priority: 1 },
    { task: 'Save Eva', priority: 2 }
]

// Задание 3
async function runTask3() {
    interface Entity {
        id: number;
    }

    interface ToJsonStringify extends Entity {
        name: string;
        surname?: string;
    }

    const data: ToJsonStringify = {
        id: 1,
        name: "Василий",
    };

    const stringToJSON = JSON.stringify(data);
    console.log(stringToJSON);
}


async function runVariant1() {
    await runTask1();
    await runTask3();
}

runVariant1();