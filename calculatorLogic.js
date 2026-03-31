function inToPostfix(equation) {
    //console.log("Infix: ", equation);
    const precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
    }; 
    let output = [];
    let operationStack = [];
    let currentNumber = '';

    const flushNumber = () => {
      if (currentNumber !== '') {
        output.push(currentNumber);
        currentNumber = '';
      }
    }

    equation.forEach((value) => {
      //console.log("Processing: ", value);
      if( !isNaN(value) && value !== ' ') {
        currentNumber += value;
      } else {
        flushNumber();
        if (value === "(") {
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
    });
    flushNumber();
    while(operationStack.length > 0) {
      output.push(operationStack.pop());
    }
    console.log(output);
    return output;
  }

  function calculatePostFix(postfix) {
    //console.log(postfix);
    let operation, a, b;
    let stack = [];
    postfix.forEach((value) => {
      //console.log("Processing: ", value);
      if( !isNaN(value) && isFinite(value)) {
          stack.push(value);
          console.log("Pushing: ", value);
      } else {
        operation = value;
        b = Number(stack.pop());
        a = Number(stack.pop());
        console.log("Performing: ",a, operation, b);
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
    });
    if(stack.length === 1) return stack.pop();
    else {
      setEquation([]);
      return "Error";
    }
  }