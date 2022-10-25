

var billAmount = document.querySelector("#bill-amount");
var cashAmountGiven = document.querySelector("#cash-amount");
var btnCheak = document.querySelector("#btn-cheak");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableCurrency = [2000,500,200,100,50,20,10,1];
 
btnCheak.addEventListener("click",function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){     
        if(cashAmountGiven.value >= billAmount.value )
        {
                var amountToBeReturned = cashAmountGiven.value - billAmount.value;
                caluclateChange(amountToBeReturned);
        }
        else
        {
        
        showMessage("Your Cash Amount is not sufficient to Pay Bill");
        }

    }
    else
    {
        showMessage("Invalid Bill Amount.It Should be above 0");        
    }


});

function caluclateChange(amountToBeReturned)
{
   

    for(var i=0; i < availableCurrency.length; i++)
    {
    var numberOfNotes = Math.trunc(amountToBeReturned / availableCurrency[i]);   
    amountToBeReturned %= availableCurrency[i]; 
    console.log(amountToBeReturned);
    noOfNotes[i].innerText = numberOfNotes; 

    }    
}
 function hideMessage(){
     message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;

 }