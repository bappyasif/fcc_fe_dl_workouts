export let infixToPostFix = expr => {
    let outputString = '';
    let opStack = [];
    let tokens = expr.split('');
    tokens.forEach(char => {
        let isNumber = !isNaN(char);

        // if operand
        if (isNumber) {
            outputString += char;
        } else {
            // if operator

            // first remove any operators already on opStack that have higher or equal precedence and append them to outputString
            let opTOS = opStack[opStack.length - 1 != -1 ? opStack.length - 1 : 0]
            let stackPrecedence = precedenceChecker(opTOS);
            let charPrecedence = precedenceChecker(char);
            while (opStack.length && stackPrecedence >= charPrecedence) {
                outputString += opStack.pop();
            }
            opStack.push(char);
            // if (opTOS != null) {
            //     let stackPrecedence = precedenceChecker(opTOS);
            //     let charPrecedence = precedenceChecker(char);
            //     while (opStack.length && stackPrecedence >= charPrecedence) {
            //         outputString += opStack.pop();
            //     }
            //     opStack.push(char);
            // }
        }
    })

    while (opStack.length > 0) outputString += opStack.pop();

    console.log(outputString)
}

let precedenceChecker = op => {
    switch (op) {
        case "+":
        case "-":
            return 1
        case "*":
        case "/":
            return 2
        default: return -1
    }
}

/**
 *
 *
 export let infixToPostFix = expr => {
    let outputString = '';
    let stack = [];

    for (let i = 0; i < expr.length; i++) {
        let char = expr[i];
        let isNumber = !isNaN(char)

        // if operand
        if(isNumber) {
            outputString += char;
        } else {
            // if operator
            let tos = stack[stack.length-1];
            let charPrecedence = precedenceChecker(char);
            let tosPrecedence = precedenceChecker(tos)

            while(!stack.length == 0 && charPrecedence <= tosPrecedence) {
                outputString += stack.pop();
            }

            stack.push(char)
        }
    }
    // popping operators from stack
    while(stack.length > 0) outputString += stack.pop()

    // getting 23+65*-7/ but should be 23+65*7/- instead!!

    console.log(outputString)
}
 *
 *
 export let infixToPostFix = expr => {
    let exprStack = expr.split('');
    let outputString = '';
    exprStack.forEach(ch => {
        // let checkNumbers = ch.match(/\d/);
        let checkNumbers = !isNaN(ch);
        // console.log(checkNumbers)

        // when operand is detected
        if(checkNumbers) {
            outputString += ch;
        } else {
            // when operator is detected
            let precedenceTOS = precedenceChecker(ch);

            while(exprStack.length)
        }
    })
}
 *
 *
 export let infixToPostFix = expr => {
    let outputString = '';
    let poppedOperators = "";
    let tempOp = ''
    expr.split('').forEach(char => {
        // char = Number(char)
        // console.log(["0","1","2","3","4","5","6","7","8","9"].includes(char))
        if(["0","1","2","3","4","5","6","7","8","9"].includes(char)) {
            outputString += char
            if(poppedOperators.length) {
                outputString += poppedOperators;
                poppedOperators = ''
            }
        } else {
            poppedOperators += char
            let TOS = outputString[outputString.length-1];
            let tempTOS = poppedOperators[poppedOperators.length-1];
            let checkPrecedenceOfTOS = precedenceChecker(tempTOS)
            let checkPrecedenceOfToken = precedenceChecker(char);
            console.log(checkPrecedenceOfTOS, checkPrecedenceOfToken, "<><>", tempTOS, char)
            if(checkPrecedenceOfTOS < checkPrecedenceOfToken) {
                // && !["0","1","2","3","4","5","6","7","8","9"].includes(tempTOS)
                outputString += char;
                console.log(typeof char , char, checkPrecedenceOfTOS, checkPrecedenceOfToken, outputString[outputString.length-1], outputString)
            } else {
                outputString.split('').forEach(ch => {
                    console.log("here!!", ["+", "-", "*", "/"].includes(ch), ch)
                    if(["+", "-", "*", "/"].includes(ch)) {
                        checkPrecedenceOfTOS = precedenceChecker(ch);
                        if(checkPrecedenceOfToken >= checkPrecedenceOfTOS) {

                            poppedOperators += ch;
                        }
                    }
                })
            }
        }
    })

    console.log(outputString)
}
 */