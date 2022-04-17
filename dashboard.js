document.getElementById("deposit-btn").addEventListener("click", function(){
    //show deposit
    const depoPre= document.getElementById("show-deposit");
    const depoPreAmountText = depoPre.innerText;
    const depoPreAmount = parseFloat(depoPreAmountText);
    //take deposit input
    const depoAmountInput = document.getElementById("deposit");
    const depositedAmountText= depoAmountInput.value;
    const depositedAmount = parseFloat(depositedAmountText);
    //calculate total amount
    const depoCurrentAmount = (depoPreAmount+depositedAmount);
    //changed the previous value to show updated calculated value
    depoPre.innerText = depoCurrentAmount;
    //to clear the input field after deposit
    depoAmountInput.value = '';
    });