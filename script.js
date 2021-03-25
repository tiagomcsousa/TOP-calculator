var digit = document.getElementsByClassName("digits");
var visor = document.getElementById("nums-visor");
var cleanBtn = document.getElementById("clean");
var cleanAllBtn = document.getElementById("clean-all");
var divisBtn = document.getElementById("divis");
var multipBtn = document.getElementById("multip");
var subtrBtn = document.getElementById("subtr");
var addBtn = document.getElementById("add");
var resBtn = document.getElementById("res-btn");
var dotBtn = document.getElementById("dot");


var valorVisor = '';
var savedRes = 0;
var lastOp = null;
var auxSubtr = 0;
var res = 0;

for (var i = 0; i < digit.length; i++) {
    digit[i].addEventListener('click', function() {
        if (valorVisor.length < 7) {
            valorVisor += this.textContent;
            visor.textContent = valorVisor;
        }
    });
}

cleanBtn.addEventListener('click', function() {
    valorVisor = '';
    visor.textContent = '0';
});

cleanAllBtn.addEventListener('click', function() {
    valorVisor = '';
    visor.textContent = '0';
    savedRes = 0;
    lastOp = null;
});

addBtn.addEventListener('click', function() {
    if (valorVisor != '') {
        operate();
    }
    lastOp = '+';
});

subtrBtn.addEventListener('click', function() {
    if (valorVisor != '') {
        operate();
    }
    lastOp = '-';
});

multipBtn.addEventListener('click', function() {
    if (valorVisor != '') {
        operate();
    }
    lastOp = '*';
});

divisBtn.addEventListener('click', function() {
    if (valorVisor != '') {
        operate();
    }
    lastOp = '/';
});

resBtn.addEventListener('click', function() {
    operate();
});

dotBtn.addEventListener('click', function() {
    valorVisor += '.';
    visor.textContent = valorVisor;
});

function operate() {

    if (lastOp == "+") {
        res = add(res, parseFloat(valorVisor));
        visor.textContent = res.toString();
        valorVisor = '';
    } else if (lastOp == "-") {
        res = subtract(res, parseFloat(valorVisor));
        visor.textContent = res.toString();
        valorVisor = '';
    } else if (lastOp == "*") {
        res = multiply(res, parseFloat(valorVisor));
        visor.textContent = res.toString();
        valorVisor = '';
    } else if (lastOp == "/") {
        res = divide(res, parseFloat(valorVisor));
        var rounded = Math.round(res * 1000000) / 1000000;
        visor.textContent = rounded.toString();
        valorVisor = '';
    } else if (lastOp == null) {
        res = parseInt(valorVisor);
        valorVisor = '';
    }

}

function add(x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}