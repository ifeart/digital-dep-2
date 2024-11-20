// Задание 1
import * as readline from 'readline';

const fromConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((res) => {
        fromConsole.question(question, (answer) => {
            res(answer)
        });
    });
}

async function runTask1() {
    let firstString: string = String(await askQuestion('Введите первую строку: '));
    let secondString: string = String(await askQuestion('Введите вторую строку: '));
    let thirdString: string = String(await askQuestion('Введите третью строку: '));

    console.log(firstString + secondString + thirdString);
    fromConsole.close();
}


// Задание 2
const robotName: string = 'VALL.E';
const robotAge: number = 751;
const robotActive: boolean = true;
const robotHobbies: string[] = ['Clean', 'Save good thing', 'Love', 'Dance'];
let robotMainIdea: any = undefined;
let robotTasksPriority: { task: string; priority: number}[] = [
    { task: 'Save flower', priority: 1 },
    { task: 'Save Eva', priority: 2 }
];

// Задание 3
async function runTask3() {
    interface Entity {
        id: number;
    }
    interface ToJsonStringify extends
    Entity {
        e1: string;
        e2: string;
    }
    const data: ToJsonStringify = {
        id: 2,
        e1: "Поле 1",
        e2: "Поле 2",
    }

    const stringToJSON = JSON.stringify(data);
    console.log(stringToJSON);
}


async function runVariant2() {
    await runTask1();
    await runTask3();
}

runVariant2();