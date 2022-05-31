localStorage.setItem("output", "0");
localStorage.setItem("recentClass", "number");
localStorage.setItem("recentAction", "n");
localStorage.setItem("decimalExists", "no");

// find out which button was clicked
document.addEventListener('click', (e) => {
    const buttonID = e.target.id; 
    handleClick(buttonID); 
})

function handleClick(buttonID) {
    if (buttonID === "one") {
        handleNumber("1");
    }
    else if (buttonID === "two") {
        handleNumber("2");
    }
    else if (buttonID === "three") {
        handleNumber("3");
    }
    else if (buttonID === "four") {
        handleNumber("4");
    }
    else if (buttonID === "five") {
        handleNumber("5");
    }
    else if (buttonID === "six") {
        handleNumber("6");
    }
    else if (buttonID === "seven") {
        handleNumber("7");
    }
    else if (buttonID === "eight") {
        handleNumber("8");
    }
    else if (buttonID === "nine") {
        handleNumber("9");
    }
    else if (buttonID === "zero") {
        handleNumber("0");
    }
    else if (buttonID === "addition") {
        handleAction("+");
    }
    else if (buttonID === "subtraction") {
        handleAction("-");
    }
    else if (buttonID === "multiplication") {
        handleAction("*");
    }
    else if (buttonID === "division") {
        handleAction("/");
    }
    else if (buttonID === "decimal") {
        handleDecimal();
    }
    else if (buttonID === "equals") {
        handleEquals();
    }
    else if (buttonID === "clear") {
        handleClear();
    }
}

function handleNumber(number) {
    var currOutputStr = localStorage.getItem("output");
    if (currOutputStr === "0") {
        currOutputStr = number;
    }
    else {
        currOutputStr += number;
    }
    localStorage.setItem("output", currOutputStr);
    localStorage.setItem("recentClass", "number");
    localStorage.setItem("recentAction", "n");
    document.querySelector(".output-container").innerHTML = currOutputStr;
}

function handleAction(action) {
    var currOutputStr = localStorage.getItem("output");
    var recentClass = localStorage.getItem("recentClass");
    var recentAction = localStorage.getItem("recentAction");
    if (recentAction !== action && recentClass === "action") {
        currOutputStr = currOutputStr.slice(0, -1);
        currOutputStr += action;
        localStorage.setItem("output", currOutputStr);
        localStorage.setItem("recentClass", "action");
        localStorage.setItem("recentAction", action);
        localStorage.setItem("decimalExists", "no");
        document.querySelector(".output-container").innerHTML = currOutputStr;
    }
    else if (recentClass !== "action") {
        currOutputStr += action;
        localStorage.setItem("output", currOutputStr);
        localStorage.setItem("recentClass", "action");
        localStorage.setItem("recentAction", action);
        localStorage.setItem("decimalExists", "no");
        document.querySelector(".output-container").innerHTML = currOutputStr;
    }
}

function handleEquals() {
    if (localStorage.getItem("recentClass") !== "action") {
        var currOutputStr = localStorage.getItem("output");
        currOutputStr = eval(currOutputStr);
        localStorage.setItem("output", currOutputStr);
        localStorage.setItem("recentClass", "number");
        localStorage.setItem("recentAction", "n");
        localStorage.setItem("decimalExists", "no");
        document.querySelector(".output-container").innerHTML = currOutputStr;
    }
}

function handleDecimal() {
    var currOutputStr = localStorage.getItem("output");
    var recentClass = localStorage.getItem("recentClass");
    var recentAction = localStorage.getItem("recentAction");
    if (localStorage.getItem("decimalExists") === "no") {
        if (recentClass === "number" && currOutputStr[currOutputStr.length - 1] != ".") {
            currOutputStr += ".";
            localStorage.setItem("output", currOutputStr);
            localStorage.setItem("recentClass", "number");
            localStorage.setItem("recentAction", "n");
            localStorage.setItem("decimalExists", "yes");
            document.querySelector(".output-container").innerHTML = currOutputStr;
        }
        else if (recentClass === "action") {
            currOutputStr += "0.";
            localStorage.setItem("output", currOutputStr);
            localStorage.setItem("recentClass", "number");
            localStorage.setItem("recentAction", "n");
            localStorage.setItem("decimalExists", "yes");
            document.querySelector(".output-container").innerHTML = currOutputStr;
        }
    }
}

function handleClear() {
    localStorage.setItem("output", "0");
    localStorage.setItem("recentClass", "number");
    localStorage.setItem("recentAction", "n");
    localStorage.setItem("decimalExists", "no");
    document.querySelector(".output-container").innerHTML = "0";
}