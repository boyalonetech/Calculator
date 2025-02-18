

const display = document.getElementById("display");
    
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function delDisplay(input){
 display.value = display.value.slice(0,-1)
}

function calculate(){
    try {
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
        }
}