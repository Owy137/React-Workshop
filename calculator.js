const test = ["1", "+", "2", "*", "3", "-", "4"]; //3
const test2 = ["3", "*", "(", "1", "+", "2", ")", "-", "4"]; // 5

function inToPostfix(infix) {
    const precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
    }; 
    let output = [];
    let operationStack = [];

    for (value of infix) {
        if( !isNaN(value) && isFinite(value)) {
            output.push(value);
        } else if (value === "(") {
            operationStack.push(value);
        } else if (value === ")") {
            while (operationStack.length > 0 && operationStack[operationStack.length - 1] !== "(") {
                output.push(operationStack.pop());
            }
            operationStack.pop();
        } else {
            if(operationStack.length > 0){
                while(precedence[value] <= precedence [operationStack[operationStack.length - 1]]) {
                    output.push(operationStack.pop());
                }
            }
            operationStack.push(value);
        }
        
    }
    while(operationStack.length > 0) {
        output.push(operationStack.pop());
    }
    //console.log(output);
    return output;
}

function calculatePostFix(postfix) {
    //console.log(postfix);
    let operation, a, b;
    let stack = [];
    for (value of postfix) {
        if( !isNaN(value) && isFinite(value)) {
            stack.push(value);
            console.log("Pushing: ", value);
        } else {
            operation = value;
            b = Number(stack.pop());
            a = Number(stack.pop());
            console.log("Performaing: ",a, operation, b);
            switch (operation) {
                case "+":
                    stack.push(a+b);
                    break;
                case "-":
                    stack.push(a-b);
                    break;
                case "*":
                    stack.push(a*b);
                    break;
                case "/":
                    stack.push(a/b);
                    break;
            }
        }
    }
    return stack.pop();
}


console.log("Result: ",calculatePostFix(inToPostfix(test)));
console.log("Result: ",calculatePostFix(inToPostfix(test2)));
