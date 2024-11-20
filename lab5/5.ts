//Задание 1
const data: number[] = [12,23,34,45];
// const data: number[] = [12, 23, 34, 45, 56, 67, 78, 89, 101, 112];

const deletuUnevenNumbers = async (arr: number[]) => {
    console.log('Изначальный массив: ', arr)
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element % 2 != 0) {
            arr.splice(arr.indexOf(element), 1);
            console.log(`Элемент \x1b[33m${element}\x1b[0m удалён, массив на данный момент: `, arr);
            await new Promise((delay) => setTimeout(delay, 1000));
            i--;
        }
    }
};


deletuUnevenNumbers(data);

//Задание 2
function getFunction() {
    return function() {
        console.log('интересно🤔, а надо ли было сюда передавать перменную и её выводить...')
    };
}

let testFun = getFunction();

testFun();

