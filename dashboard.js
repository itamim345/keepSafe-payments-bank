//Function to take User Input
function userInputAmount(inputId){
    //take user deposit input
    const inputField = document.getElementById(inputId);
    const inputText= inputField.value;
    const inputAmount = parseFloat(inputText);
    //to clear the input field after deposit
    inputField.value = '';
    return inputAmount;
}
//Funtion to update amount on Deposite/Withdraw Block
function actionAmount (showBalanceId,inputedAmount){
    //take previous deposit
    const depoPre= document.getElementById(showBalanceId);
    const depoPreAmountText = depoPre.innerText;
    const depoPreAmount = parseFloat(depoPreAmountText);   
    //calculate total amount
    const depoCurrentAmount = (depoPreAmount+inputedAmount);
    //changed the previous deposited value to show updated calculated value
    depoPre.innerText = depoCurrentAmount;
}
//Function to Update Available Main Balance
function updateMainBalance(transacAmount,isAdd){
    // take previous Main balance
    const prebalance = document.getElementById("show-balance");
    const prebalanceText = prebalance.innerText;
    const prebalanceAmount = parseFloat(prebalanceText);
    if(isAdd == true){
        //calculate updating Main balance
        const updatedBalance = (prebalanceAmount+transacAmount);
        //changed the previous Main balance to show updated calculated balance
        prebalance.innerText = updatedBalance;
    }else{
        //calculate updated Main balance after withdraw
        const updatedBalanceAmount = prebalanceAmount-transacAmount;
        //changed the previous Maun balance to show updated Main balance amount after withdraw
        prebalance.innerText = updatedBalanceAmount;
    }
    
}

document.getElementById("deposit-btn").addEventListener("click", function(){  
    //take user deposit input
    const depositedAmount = userInputAmount('deposit');

    if(depositedAmount > 0){
        //calculate & show total deposited amount
        actionAmount('show-deposit',depositedAmount);
        //calculate and changed the previous Main balance to show updated calculated balance
        updateMainBalance(depositedAmount,true);
    }else{
        alert("please enter a valid amount..")
    }
    });

    document.getElementById("withdraw-btn").addEventListener("click", function(){
        // take user withdraw input
        const withdrawAmount = userInputAmount('withdraw');
        // take previous Main balance to ensure the inputed withdraw amount is availalable in account or not
        const prebalance = document.getElementById("show-balance");
        const prebalanceText = prebalance.innerText;
        const prebalanceAmount = parseFloat(prebalanceText);

        if( (withdrawAmount > 0) && (withdrawAmount <= prebalanceAmount) ){
            //calculate & show total withdrawn amount
            actionAmount("show-withdraw",withdrawAmount)
            //calculate and changed the previous Main balance to show updated calculated balance
            updateMainBalance(withdrawAmount,false);
        }if(withdrawAmount > prebalanceAmount){
            alert("You don't have sufficient fund to withdraw");
        }else{
            alert("please enter valid amount!")
        }
    })

//log out page redirec to log-in page
document.getElementById("log-out").addEventListener("click",function(){
    window.location.href="login.html"
});
    

    