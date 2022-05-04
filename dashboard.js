function userInputAmount(inputId){
    //take user deposit input
    const inputField = document.getElementById(inputId);
    const inputText= inputField.value;
    const inputAmount = parseFloat(inputText);
    //to clear the input field after deposit
    inputField.value = '';
    return inputAmount;
}
function totalAmount (showBalanceId,inputedAmount){
    //take previous deposit
    const depoPre= document.getElementById(showBalanceId);
    const depoPreAmountText = depoPre.innerText;
    const depoPreAmount = parseFloat(depoPreAmountText);   
    //calculate total amount
    const depoCurrentAmount = (depoPreAmount+inputedAmount);
    //changed the previous deposited value to show updated calculated value
    depoPre.innerText = depoCurrentAmount;
}

document.getElementById("deposit-btn").addEventListener("click", function(){  
    //take user deposit input
    const depositedAmount = userInputAmount('deposit');
    //calculate & show total deposited amount
    totalAmount('show-deposit',depositedAmount);
    // take previous Main balance
    const prebalance = document.getElementById("show-balance");
    const prebalanceText = prebalance.innerText;
    const prebalanceAmount = parseFloat(prebalanceText);
    //calculate updating Main balance
    const updatedBalance = (prebalanceAmount+depositedAmount);
    //changed the previous Main balance to show updated calculated balance
    prebalance.innerText = updatedBalance;
    });

    document.getElementById("withdraw-btn").addEventListener("click", function(){
        // take user withdraw input
        const withdrawAmount = userInputAmount('withdraw');
        //calculate & show total deposited amount
        totalAmount("show-withdraw",withdrawAmount)
        //take Main balance 
        const preWithdrawBalance = document.getElementById("show-balance");
        const preWithdrawBalanceText = preWithdrawBalance.innerText;
        const preWithdrawBalanceAmount = parseFloat(preWithdrawBalanceText);
        //calculate updated Main balance after withdraw
        const updatedBalanceAmount = preWithdrawBalanceAmount-withdrawAmount;
        //changed the previous Maun balance to show updated Main balance amount after withdraw
        preWithdrawBalance.innerText = updatedBalanceAmount;
    })

//log out page redirec to log-in page
document.getElementById("log-out").addEventListener("click",function(){
    window.location.href="login.html"
});
    

    