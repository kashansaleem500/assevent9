//! ------------------Assignment # 43-48-----------------
//? Q 1
function link(){
    alert('Thank You')
}

//? Q 2
function img(){
    alert('Thank You For Purchasing')
}

//? Q 3
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//? Q 5

var counterValue = 0;
function increaseCounter() {
    counterValue++;
    updateCounterDisplay();
}

function decreaseCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounterDisplay();
    }
}

function updateCounterDisplay() {
    document.getElementById("counter").textContent = counterValue;
    document.getElementById("updatedCounter").textContent = counterValue;
}
