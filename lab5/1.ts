// Задание 1
function getCurrentDate(): void {
    // document.addEventListener('DOMContentLoaded', () => {
        let timePrint = setInterval(() => console.log(Date.now()), 5000);
        setTimeout(() => clearInterval(timePrint), 60000);
    // });
}
getCurrentDate();



// Задание 2
function getFunction() {
    return function() {
        console.log('интересно🤔, а надо ли было сюда передавать перменную и её выводить...')
    };
}

let testFun = getFunction();

testFun();

