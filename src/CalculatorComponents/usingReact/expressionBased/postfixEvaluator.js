export let postfixEvaluator = expr => {
    // stack to store operands
    let stack = [];
    
    // separating as token by using space as delimiters, which was intentionally in place from infix to postix converstion for this purpose
    let tokens = expr.split(' ').filter(token=>token);
    console.log(tokens, "huhh!!")
    // let tokens = readjustUserProvidedExpression(expr)
    tokens.forEach(token => {
        // if operand
        if (!isNaN(token)) {
            stack.push(token)
        } else {
            // if operator, pop operands from stack for operator and push back result onto stack
            let b = stack.pop();
            let a = stack.pop();
            let calculation = calculateExpression(a, b, token);
            stack.push(calculation);
            console.log(calculation, "calc", a, b, stack)
        }
    })
    console.log(stack, "??")
    return stack;
}

let calculateExpression = (a, b, op) => {
    let calc = 0;
    switch (op) {
        case '+':
            calc = Number(a) + Number(b)
            return calc
        case '-':
            calc = Number(a) - Number(b)
            return calc
        case '*':
            calc = Number(a) * Number(b)
            return calc
        case '/':
            calc = Number(a) / Number(b) 
            return calc
        default:
            alert('somethings wrong!!')
    }
}