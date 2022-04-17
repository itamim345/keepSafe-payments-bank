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
    //changed the previous deposited value to show updated calculated value
    depoPre.innerText = depoCurrentAmount;

    // show balance
    const prebalance = document.getElementById("show-balance");
    const prebalanceText = prebalance.innerText;
    const prebalanceAmount = parseFloat(prebalanceText);
    //calculate updating balance
    const updatedBalance = (prebalanceAmount+depositedAmount);
    //changed the previous balance to show updated calculated balance
    prebalance.innerText = updatedBalance;
    
    //to clear the input field after deposit
    depoAmountInput.value = '';
    });

    document.getElementById("withdraw-btn").addEventListener("click", function(){
        //show withdraw
        const preWithdraw = document.getElementById("show-withdraw");
        const preWithdrawText = preWithdraw.innerText;
        const preWithdrawAmount = parseFloat(preWithdrawText);
        // take withdraw input
        const withdraw = document.getElementById("withdraw");
        const withdrawText = withdraw.value;
        const withdrawAmount = parseFloat(withdrawText);
        //calculate update
        const totalWithdraw = (preWithdrawAmount+withdrawAmount);
        //changed the previous withdraw to show updated withdraw balance
        preWithdraw.innerText = totalWithdraw;

        //show balance 
        const preWithdrawBalance = document.getElementById("show-balance");
        const preWithdrawBalanceText = preWithdrawBalance.innerText;
        const preWithdrawBalanceAmount = parseFloat(preWithdrawBalanceText);
        //calculate updated balance after withdraw
        const updatedBalanceAmount = preWithdrawBalanceAmount-withdrawAmount;
        //changed the previous balance to show updated balance amount after withdraw
        preWithdrawBalance.innerText = updatedBalanceAmount;

        // clear the input field after taking withdraw amount
        withdraw.value = '';
    })
    

    