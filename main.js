// defining
let clearBtn = document.getElementById('calc-clear');
let allClearBtn = document.getElementById('calc-allClear');
let display = document.getElementById('calc-display');
let numbers = document.getElementsByClassName('btn-num');
let op = document.getElementsByClassName('btn-op');
//Set display to zero, and set saved number to undefined
let displayNum = '0';
let savePrevNum;
//Kind of cheated to find this, but it's OP OP.
let evalStringArray = [];

// Store numbers from clicks
let displayStorage = (clickObj) => {
    let showText = clickObj.target.innerText;

    if(displayNum === '0')
        displayNum = '';
        //Have showText get the value of the button and push that value to displayNum
        displayNum += showText;
        display.innerText = displayNum;
}

let doMath = (clickObj) => {
    let math = clickObj.target.innerText;
    //Kind of cheated for this part, with the evalStringArray stuff...
    //but learning how to use it correctly and it's kind of OP...
    //Also Arrays are kind of lame.
    switch(math) {
        case '+':
            savePrevNum = displayNum;
            displayNum = '0';
            display.innerText = displayNum;
            evalStringArray.push(savePrevNum);
            evalStringArray.push('+');
            break;

        case '-':
            savePrevNum = displayNum;
            displayNum = '0';
            display.innerText = displayNum;
            evalStringArray.push(savePrevNum);
            evalStringArray.push('-');
            break;

        case '/':
            savePrevNum = displayNum;
            displayNum = '0';
            display.innerText = displayNum;
            evalStringArray.push(savePrevNum);
            evalStringArray.push('/');
            break;

        case '*':
            savePrevNum = displayNum;
            displayNum = '0';
            display.innerText = displayNum;
            evalStringArray.push(savePrevNum);
            evalStringArray.push('*');
            break;
        
        case '=':
            evalStringArray.push(displayNum);
            let asiankid = eval(evalStringArray.join(' '));
            displayNum = asiankid + '';
            display.innerText = displayNum;
            evalStringArray = [];
            break;
    }
}
// Click buttons from array of html buttons and send to displayStorage function.
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', displayStorage);
}
// Click buttons from array of html buttons and send to doMath / math Switch.
for (let i = 0; i < op.length; i++) {
   op[i].addEventListener('click', doMath);
}


// Reset display and clear saved numbers on AC click.
allClearBtn.onclick = () => {
    displayNum = '0';
    savePrevNum = undefined;
    evalStringArray = [];
    display.innerHTML = displayNum;
}
// Use slice to remove the last input on C click and return the rest back to the 
// display... Did I mention arrays are kind of lame?
clearBtn.onclick = () => {
    let numLength = displayNum.length;
    displayNum = displayNum.slice(0, numLength - 1);
    display.innerText = displayNum;
}