const data: string[] = ['aaa', 'bbb'];

const record = (param: string) => { 
    setTimeout(() => { 
        data.pop(); 
        console.log('Record: ' + param + ' removed!');
    }, 10000);
    data.push(param); 
    console.log('Record: ' + param + ' added!'); 
};

record('asda');


//Задание 2
function getFunction() {
    return function() {
        console.log('интересно🤔, а надо ли было сюда передавать перменную и её выводить...')
    };
}

let testFun = getFunction();

testFun();
