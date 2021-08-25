export let infixToPostFix = expr => {
    let postfixOutput = "";
    let stack = [];
    // let tokens = expr.split('');
    let tokens = expr;
    // console.log(tokens, "?>>?")
    for (let idx = 0; idx < tokens.length; idx++) {
        let currToken = tokens[idx];
        console.log(currToken);
        // If operand then push it onto stack
        if (!isNaN(currToken) || currToken === ".") {
            // intentionally placing a space infront of each tokens, so that postfix evaluation can easily tokenize postfix expression using a space as delimiters
            postfixOutput += ' ' + currToken;
        } else if (currToken === "(") {
            stack.push(currToken);
        } else if (currToken === ")") {
            while (stack.length && stack.peek() !== "(") {
                // intentionally placing a space infront of each tokens, so that postfix evaluation can easily tokenize postfix expression using a space as delimiters
                postfixOutput += ' ' + stack.pop();
            }
        } else {
            // an operator encountered
            while (
                stack.length &&
                precedenceChecker(currToken) <= precedenceChecker(stack.peek())
            ) {
                // intentionally placing a space infront of each tokens, so that postfix evaluation can easily tokenize postfix expression using a space as delimiters
                postfixOutput += ' ' + stack.pop();
            }
            stack.push(currToken);
        }
    }
    // pop all existing operators from stack
    while (stack.length) {
        if (stack.peek() === "(") {
            return "Invalid Expression";
        }
        // intentionally placing a space infront of each tokens, so that postfix evaluation can easily tokenize postfix expression using a space as delimiters
        postfixOutput += ' ' + stack.pop();
    }

    // console.log(postfixOutput)
    return postfixOutput;
}

Array.prototype.peek = function () {
    return this[this.length - 1]
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
    let opStack = [];
    let tokens = expr.split('');
    tokens.forEach(char => {
        let isNumber = !isNaN(char);

        // if operand
        if (isNumber) {
            outputString += char;
        } else if (char == '(') {
            outputString += char;
        } else if (char == ')') {
            while (opStack.length && opStack.peek() != '(') {
                outputString += opStack.pop();
            }
        } else {
            // if operator

            // first remove any operators already on opStack that have higher or equal precedence and append them to outputString
            // let opTOS = opStack[opStack.length - 1]
            let stackPrecedence = precedenceChecker(opStack.peek());
            let charPrecedence = precedenceChecker(char);
            while (opStack.length && charPrecedence <= stackPrecedence) {
                // console.log(opTOS, "??")
                outputString += opStack.pop();
            }
            opStack.push(char);
            // if (opTOS != null) {
            //     let stackPrecedence = precedenceChecker(opTOS);
            //     let charPrecedence = precedenceChecker(char);
            //     while (opStack.length && stackPrecedence >= charPrecedence) {
            //         outputString += opStack.pop();
            //     }
            //     // opStack.push(char);

            // }
            // opStack.push(char);
        }
    })

    while (opStack.length) {
        if(opStack.peek() == '(') {
            alert('wrong expression')
        }
        outputString += opStack.pop();
    }

    console.log(outputString)
}

Array.prototype.peek = function() {
    return this[this.length -1]
}
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