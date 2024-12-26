let boxes = document.querySelectorAll(".box");
let result = document.querySelector("#result");
let finalresult = document.querySelector("#final-result");
let turn = true;
let count = 0;
let x = 0;
let arr1 = [];
let arr2 = [];
let arr3 = [];
const checkvalue = (value) =>{
    if(turn && (value !== "+" && value !== "-" && value !== "*" && value !== "/" && value !== '=' && value !== "%" && value !== "X" && value !== "ac")){
        arr1.push(value);
    }
    else if(value === '='){
        result.innerText = '';
        result.innerText += finalresult.innerText;
        isequalto();
        deleteoperator();
        finalresult.innerText = '';
        count = 0;
    }
    else if(value === "+" || value === "-" || value === "*" || value === "/" || value === "%"){
        turn = false;
        x++;
        arr3.push(value);
        if(arr3.length >= 2){
            isequalto();
        }
    }
    else if(value === "X"){
        forx();
    }
    else if(value === "ac"){
        forac();
        turn = true
        x = 0;
        count = 0;
    }
    else{
        arr2.push(value);
        operation(arr3[arr3.length-1]);
    }
}
const deleteoperator = () =>{
    while(arr3.length != 0){
        arr3.pop();
    }
}

const forx = () =>{
    let j = "";
    j += result.innerText;
    if(j[j.length-1] === arr3[arr3.length-1]){

        arr3.pop();
    }
    else if(arr3.length > 0){

        arr2.pop();

        finalresult.innerText = '';

        if(arr3.length > 0 && arr2.length > 0){

        operation(arr3[arr3.length-1]);

        }
    }
    else{

        turn = true;

        arr1.pop();
    }
    result.innerText = '';

    for(let f = 0; f < j.length-1;f++){

        result.innerText += j[f];
        
    }
}

const forac = () =>{
    while(arr1.length != 0){
        arr1.pop();
    }
    while(arr3.length != 0){
        arr3.pop();
    }
    while(arr2.length != 0){
        arr2.pop();
    }
    result.innerText = '';
    finalresult.innerText = '';
}

const isequalto = () =>{
    while(arr1.length != 0){
        arr1.pop();
    }
    while(arr2.length != 0){
        arr2.pop();
    }
    arr1.push(finalresult.innerText);
}

const removeele = (arra) =>{
    let element = "";
    for(let i of arra){
        element += i;
    }
    
    let y = 0;
    y  = Number(element);
    return y;
}

const operation = (operator) =>{

    let a = 0;
    a = removeele(arr1);
    let b = 0;
    b = removeele(arr2);
        switch(operator){
            case '+':
                finalresult.innerText = a + b;
                break;
            case '-':
                finalresult.innerText = a - b;
                break;
            case '*':
                finalresult.innerText = a * b;
                break;
            case '/':
                finalresult.innerText = a / b;
                break;
            case '%':
                finalresult.innerText = a % b;
                break;
}
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        // console.log(box.innerText);
        if(box.innerText !== "X" && box.innerText !== "ac"){
        result.innerText += box.innerText;
        }
        let value = box.getAttribute("id");
        checkvalue(value);
    });
});