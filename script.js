function calc() {

    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let operators = document.getElementById("operators").value

    let result;


    switch (operators) {
        case "Add":
            result = Number(input1) + Number(input2);
            break;
        case "Subtract":
            result = Number(input1) - Number(input2);
            break;
        case "Multiplication":
            result = Number(input1) * Number(input2);
            break;
        case "Division":
            result = Number(input1) / Number(input2);
            break;
    }

    let resultTag = document.getElementById("result")

    resultTag.innerHTML = `Result: ${result}`



}



// switch (operator) {}