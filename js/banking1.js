document.getElementById("deposit-btn").addEventListener("click", function() {
  //   console.log("clicked");
  const depositInputText = document.getElementById("deposit-input");
  //   console.log(depositInputText);
  const depositAmount = depositInputText.value;
  //   console.log(depositAmount);
  const depositTotal = parseFloat(depositAmount);
  //   console.log(depositTotal);
  const depositPreviousTotal = document.getElementById("deposit-total");
  //   console.log(depositPreviousTotal.innerText);
  const previousDepositAmount = depositPreviousTotal.innerText;
  //   console.log(previousDepositAmount);
  const previousDeposit = parseFloat(previousDepositAmount);
  //   console.log(previousDeposit);

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  // console.log(previousBalanceTotal);

  if (depositAmount > 0 || typeof depositAmount != "string") {
    const totalDeposit = previousDeposit + depositTotal;
    depositPreviousTotal.innerText = totalDeposit;
    const newBalanceTotal = previousBalanceTotal + depositTotal;
    // console.log(newBalanceTotal);
    balanceTotal.innerText = newBalanceTotal;
  } else {
    alert("Please Provide a valid number");
  }
  depositInputText.value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function() {
  const withdrawInputText = document.getElementById("withdraw-input");
  const withdrawAmount = withdrawInputText.value;
  const withdrawTotal = parseFloat(withdrawAmount);
  const withdrawPreviousTotal = document.getElementById("withdraw-total");
  const previousWithdrawAmount = withdrawPreviousTotal.innerText;
  const previousWithdraw = parseFloat(previousWithdrawAmount);

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  // console.log(previousBalanceTotal);

  if (
    (withdrawAmount <= previousBalanceTotal && withdrawAmount > 0) ||
    (previousBalanceTotal > 0 && typeof withdrawAmount == "number")
  ) {
    if (withdrawInputText.value.length == 0) {
      alert("Field is empty");
    } else {
      const totalWithdraw = Math.abs(previousWithdraw + withdrawTotal);
      withdrawPreviousTotal.innerText = totalWithdraw;
      const newBalanceTotal = parseFloat(previousBalanceTotal - withdrawTotal);
      // console.log(newBalanceTotal);
      balanceTotal.innerText = newBalanceTotal;
    }
  } else {
    alert("Cannot withdraw,Please deposit first");
  }

  /* if (withdrawAmount <= 0 || typeof withdrawAmount != "string") {
    console.log("Can't withdraw");
  } else {
    const totalWithdraw = previousWithdraw - withdrawTotal;
    withdrawPreviousTotal.innerText = totalWithdraw;
    const newBalanceTotal = previousBalanceTotal - withdrawTotal;
    // console.log(newBalanceTotal);
    balanceTotal.innerText = newBalanceTotal;
  } */
  withdrawInputText.value = "";
});
