/* Use checked-array
create new array steps = [
    value,								// returns final value (e.g. the set of Natural Numbers)
    formula-values,						// returns new outputElement
    inputValuesElement-outputElement,	// returns operation
    outputElement-outputType,			// returns operation
    inputElement-outputElement,			// returns operation
    inputElement-outputType,			// returns operation
]

create new array valuesTypes = {
    value,
    set
}*/

type XElement = "Wood" | "Fire" | "Earth" | "Metal" | "Water";
const wood: XElement = "Wood";
const fire: XElement = "Fire";
const earth: XElement = "Earth";
const metal: XElement = "Metal";
const water: XElement = "Water";

type Arity = 1 | 2 | 3;

type OperationType =
    "Arithmetic"
    | "Set";
type OperandType =
    "Number"
    | "Set"
    | "Forumla"
    | "Variable";
type Operation = {
    name: string,
    element: XElement,
    type: OperationType,
    arity: Arity};
type Value = {
    value: null | string,
    valueElement: null | XElement,
    type: OperandType,
    typeElement: XElement,
    size: null | number};
type XNode = Value | Expression;
type Expression = {
    operation: Operation,
    operands: XNode[]};
type Problem = {
    input: XNode,
    output: XNode};

type Solve = (problem: Problem) => XNode;
type F = (o: XElement, x: XElement, y?: XElement, z?: XElement) => XElement;

function getInputValue(output: Value, input: Value, outputStyle: string): Value {
    let valueElement: XElement;
    switch(outputStyle) {
        case "functionOfType":
            let functionOfThisElement: XElement = f[earth][output.valueElement][fire][earth];
            valueElement = f[earth][functionOfThisElement][input.typeElement]["undefined"];
            break;
        default:
            valueElement = null;
    }
    return {...input, valueElement: valueElement};
}

type u = "undefined";
const u = "undefined";

type FirstBranch    = {[index in XElement]?:        SecondBranch};
type SecondBranch   = {[index in XElement]?:        ThirdBranch};
type ThirdBranch    = {[index in XElement | u]?:    Leaf};
type Leaf           = {[index in XElement | u]?:    XElement};

const elements: XElement[] = [wood, fire, earth, metal, water];
const elementsPlusUndefined: (XElement | u)[] = [...elements, u];

let f: FirstBranch = {};

for (let a of elements) {
    let branch: SecondBranch = {};
    f[a] = branch;
    for (let b of elements) {
        let branch: ThirdBranch = {};
        f[a][b] = branch;
        for (let c of elementsPlusUndefined) {
            let leaf: Leaf = {};
            f[a][b][c] = leaf;
            for (let d of elementsPlusUndefined) {
                let x: XElement = undefined;
                f[a][b][c][d] = x;
            }
        }
    }
}

// UNARY OPERATIONS

f[wood][wood][u][u] = fire;
f[wood][fire][u][u] = earth;
f[wood][earth][u][u] = metal;
f[wood][metal][u][u] = water;
f[wood][water][u][u] = wood;

f[fire][wood][u][u] = wood;
f[fire][fire][u][u] = fire;
f[fire][earth][u][u] = earth;
f[fire][metal][u][u] = metal;
f[fire][water][u][u] = water;

f[earth][wood][u][u] = water;
f[earth][fire][u][u] = wood;
f[earth][earth][u][u] = fire;
f[earth][metal][u][u] = earth;
f[earth][water][u][u] = metal;

f[metal][wood][u][u] = metal;
f[metal][fire][u][u] = water;
f[metal][earth][u][u] = wood;
f[metal][metal][u][u] = fire;
f[metal][water][u][u] = earth;

f[water][wood][u][u] = earth;
f[water][fire][u][u] = metal;
f[water][earth][u][u] = water;
f[water][metal][u][u] = wood;
f[water][water][u][u] = fire;

// WOOD BINARY OPERATION #TODO

f[wood][wood][wood][u] = fire;
f[wood][wood][fire][u] = fire;
f[wood][wood][earth][u] = fire;
f[wood][wood][metal][u] = fire;
f[wood][wood][water][u] = fire;

f[wood][fire][wood][u] = fire;
f[wood][fire][fire][u] = fire;
f[wood][fire][earth][u] = fire;
f[wood][fire][metal][u] = fire;
f[wood][fire][water][u] = fire;

f[wood][earth][wood][u] = fire;
f[wood][earth][fire][u] = fire;
f[wood][earth][earth][u] = fire;
f[wood][earth][metal][u] = fire;
f[wood][earth][water][u] = fire;

f[wood][metal][wood][u] = fire;
f[wood][metal][fire][u] = fire;
f[wood][metal][earth][u] = fire;
f[wood][metal][metal][u] = fire;
f[wood][metal][water][u] = fire;

f[wood][water][wood][u] = fire;
f[wood][water][fire][u] = fire;
f[wood][water][earth][u] = fire;
f[wood][water][metal][u] = fire;
f[wood][water][water][u] = fire;

// FIRE BINARY OPERATION #TODO

f[fire][wood][wood][u] = fire;
f[fire][wood][fire][u] = fire;
f[fire][wood][earth][u] = fire;
f[fire][wood][metal][u] = fire;
f[fire][wood][water][u] = fire;

f[fire][fire][wood][u] = fire;
f[fire][fire][fire][u] = fire;
f[fire][fire][earth][u] = fire;
f[fire][fire][metal][u] = fire;
f[fire][fire][water][u] = fire;

f[fire][earth][wood][u] = fire;
f[fire][earth][fire][u] = fire;
f[fire][earth][earth][u] = fire;
f[fire][earth][metal][u] = fire;
f[fire][earth][water][u] = fire;

f[fire][metal][wood][u] = fire;
f[fire][metal][fire][u] = fire;
f[fire][metal][earth][u] = fire;
f[fire][metal][metal][u] = fire;
f[fire][metal][water][u] = fire;

f[fire][water][wood][u] = fire;
f[fire][water][fire][u] = fire;
f[fire][water][earth][u] = fire;
f[fire][water][metal][u] = fire;
f[fire][water][water][u] = fire;

// EARTH BINARY OPERATION #TODO

f[earth][wood][wood][u] = fire;
f[earth][wood][fire][u] = fire;
f[earth][wood][earth][u] = fire;
f[earth][wood][metal][u] = fire;
f[earth][wood][water][u] = fire;

f[earth][fire][wood][u] = fire;
f[earth][fire][fire][u] = fire;
f[earth][fire][earth][u] = fire;
f[earth][fire][metal][u] = fire;
f[earth][fire][water][u] = fire;

f[earth][earth][wood][u] = fire;
f[earth][earth][fire][u] = fire;
f[earth][earth][earth][u] = fire;
f[earth][earth][metal][u] = fire;
f[earth][earth][water][u] = fire;

f[earth][metal][wood][u] = fire;
f[earth][metal][fire][u] = fire;
f[earth][metal][earth][u] = fire;
f[earth][metal][metal][u] = fire;
f[earth][metal][water][u] = fire;

f[earth][water][wood][u] = fire;
f[earth][water][fire][u] = fire;
f[earth][water][earth][u] = fire;
f[earth][water][metal][u] = fire;
f[earth][water][water][u] = fire;

// METAL BINARY OPERATION #TODO

f[metal][wood][wood][u] = fire;
f[metal][wood][fire][u] = fire;
f[metal][wood][earth][u] = fire;
f[metal][wood][metal][u] = fire;
f[metal][wood][water][u] = fire;

f[metal][fire][wood][u] = fire;
f[metal][fire][fire][u] = fire;
f[metal][fire][earth][u] = fire;
f[metal][fire][metal][u] = fire;
f[metal][fire][water][u] = fire;

f[metal][earth][wood][u] = fire;
f[metal][earth][fire][u] = fire;
f[metal][earth][earth][u] = fire;
f[metal][earth][metal][u] = fire;
f[metal][earth][water][u] = fire;

f[metal][metal][wood][u] = fire;
f[metal][metal][fire][u] = fire;
f[metal][metal][earth][u] = fire;
f[metal][metal][metal][u] = fire;
f[metal][metal][water][u] = fire;

f[metal][water][wood][u] = fire;
f[metal][water][fire][u] = fire;
f[metal][water][earth][u] = fire;
f[metal][water][metal][u] = fire;
f[metal][water][water][u] = fire;

// WATER BINARY OPERATION #TODO

f[water][wood][wood][u] = fire;
f[water][wood][fire][u] = fire;
f[water][wood][earth][u] = fire;
f[water][wood][metal][u] = fire;
f[water][wood][water][u] = fire;

f[water][fire][wood][u] = fire;
f[water][fire][fire][u] = fire;
f[water][fire][earth][u] = fire;
f[water][fire][metal][u] = fire;
f[water][fire][water][u] = fire;

f[water][earth][wood][u] = fire;
f[water][earth][fire][u] = fire;
f[water][earth][earth][u] = fire;
f[water][earth][metal][u] = fire;
f[water][earth][water][u] = fire;

f[water][metal][wood][u] = fire;
f[water][metal][fire][u] = fire;
f[water][metal][earth][u] = fire;
f[water][metal][metal][u] = fire;
f[water][metal][water][u] = fire;

f[water][water][wood][u] = fire;
f[water][water][fire][u] = fire;
f[water][water][earth][u] = fire;
f[water][water][metal][u] = fire;
f[water][water][water][u] = fire;

// EXTRAPOLATION

f[fire][wood][wood][fire] = wood;
f[earth][wood][fire][earth] = earth;
f[fire][wood][earth][fire] = water
f[fire][wood][metal][fire] = fire;
f[fire][wood][water][fire] = metal;

f[earth][fire][wood][earth] = water;
f[wood][fire][fire][wood] = fire;
f[wood][fire][earth][wood] = metal
f[wood][fire][metal][wood] = wood;
f[wood][fire][water][wood] = earth;

f[fire][earth][wood][fire] = metal;
f[wood][earth][fire][wood] = wood;
f[wood][earth][earth][wood] = earth
f[wood][earth][metal][wood] = water;
f[wood][earth][water][wood] = fire;

f[fire][metal][wood][fire] = earth;
f[wood][metal][fire][wood] = water;
f[wood][metal][earth][wood] = fire
f[wood][metal][metal][wood] = metal;
f[wood][metal][water][wood] = wood;

f[fire][water][wood][fire] = fire;
f[wood][water][fire][wood] = metal;
f[wood][water][earth][wood] = wood
f[wood][water][metal][wood] = earth;
f[wood][water][water][wood] = water;

// INTERPOLATION #TODO

let traverseTree: Solve = (problem) => {
    let x = solve(problem);

    if ("operands" in x) {  // type is Expression
        let z: XNode[] = [];
        for (let y of x.operands) {
            let newProblem: Problem = {output: y, input: problem.input};
            z.push(traverseTree(newProblem));
        }
        x.operands = z;
    }

    return x;
}

let output: Value = {
    value: null,
    valueElement: fire,
    type: "Set",
    typeElement: wood,
    size: null
}

let input: Value = {
    value: null,
    valueElement: null,
    type: "Variable",
    typeElement: wood,
    size: null
}

input = getInputValue(output, input, "functionOfType");

let problem: Problem = {
    input: input,
    output: output
}

console.log(traverseTree(problem));

let solve: Solve = (problem) => {
    return null;
 /*   thisStep = stepStack.last();

    // Try value (economy of form)
    elementWithProperty = getElement({
        operation = earth,
        firstOperand = null,
        secondOperand = thisStep.outputTypeElement,
        result = thisStep.outputElement
    })

    if elementWithProperty not= false then {
        /*	The following can return the set represented by the unknown element.
            For example, if the outputElement were metal instead of fire,
            elementWithProperty would = water, and elementWithProperty.getValueByType(thisStep.outputType) would =
            water.set, which would = the Natural Numbers.
        *//*
        thisStep.value = elementWithProperty.getValueByType(thisStep.outputType)
        
        stepStack.pop(this);

        return;
    }

    // Try formula-values
    // if the element (fire) is a map from values to values
    if inputType is in valuesTypes AND outputType is in valuesTypes then {
        create new hash newParams = {
            outputElement = f({
                find = earth,
                inputElement,
                outputElement,
                earth
            })
            // formulaElement currently equals the old outputElement
        }

        // Re-call this step with the new values
        this.params.merge(newParams);
        return;

    }

    // Try inputValuesElement-outputElement
    if inputValuesElement exists then {

        operationElement = f({
        find = earth,
        inputValuesElement,
        earth,
        outputElement});

        this.value.operationElement = operationElement;
        if this.value.operationElement.isValidOperationElement() {
            Operation? this.value.operation = this.getOperationValue();
            if this.value.operation is not null {
                Element[]? this.value.operandElements = this.value.getOperandElements();
                if all of this.value.operandElements is not null {
                    if all operandElements translate into valid operandTypes {
                        Step[] operands;
                        i = 0;
                        for each operandElement in operandElements {
                            operands[i] = new Step(this);	// inherits from the current step (this)
                            operands[i].output.element = operandElement;
                            operands[i].output.type = operandElement.getOperandType;
                            operands[i].output.typeElement = getElementByType(type);
                            operands[i].output.size = calculateOutputSize();
                            stepStack.push(operands[i]);
                        }
                    }
                }
            }
        }
    }*/
}