function add(num1, num2) {
    return num1 + num2;
}

function addition() {
    let box1 = Number(document.getElementById("box1").value);
    let box2 = Number(document.getElementById("box2").value);
    let result = add(box1, box2);
    document.getElementById("Text").innerHTML = "The Answer is: " + result;
}

function divide() {
    let box1 = Number(document.getElementById("box1").value);
    let box2 = Number(document.getElementById("box2").value);
        let result = box1 / box2;
        document.getElementById("Text").innerHTML = "The Answer is: " + result;
}