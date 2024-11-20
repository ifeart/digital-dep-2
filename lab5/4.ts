const data: number[] = [];
 
const record = (param: number) => {
    let intervalId = setInterval(() => {
        data.push(param);
        console.log('Record: ' + param + ' added!');
        remove();
    }, 10000);

    setTimeout(() => {clearInterval(intervalId); console.log('ВСË, КОНЕЦ!')}, 60000);
};

function remove() {
    data.pop();
    console.log('Record removed!'); 
}

record(12345);

// Задание 2
function getFunction() {
    return function() {
        console.log('интересно🤔, а надо ли было сюда передавать перменную и её выводить...')
    };
}

let testFun = getFunction();

testFun();
