// Задание 1
function getCurrentDate(): void {
    // document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => console.log(Date.now()), 10000);
    // });
};

getCurrentDate();

// Задание 2
function getFunction() {
    return function() {
        console.log('интересно🤔, а надо ли было сюда передавать перменную и её выводить...')
    };
}

let testFun = getFunction();

testFun();