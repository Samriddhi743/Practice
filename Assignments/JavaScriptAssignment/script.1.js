function account(balance, transaction, transaction_type){
    let t_type = ['UPI', 'Card', 'Cheque']
    if(account) {
        if (balance<transaction){
            console.log("Not Enough amount");
        }else{
            if (transaction_type == t_type[0]){
                console.log("UPI")
            }
            if (transaction_type == t_type[1]){
                console.log("Card")
            }
            if (transaction_type == t_type[2]){
                console.log("Cheque")
            }
            if (transaction_type == t_type[0]){
                if (transaction <= 5000){
                    console.log(balance - transaction);
                }
                else{
                    console.log("Not in limit")
                }
            }
            if (transaction_type == t_type[1]){
                if (transaction <= 20000){
                    console.log(balance - transaction)
                }else { 
                    console.log("Not in Limit")
                }
            }
            if (transaction_type == t_type[2]){
                if (transaction <= 100000){
                    console.log(balance - transaction)
                }
                else{
                    console.log("Not in Limit")
                }
            }
        }
    }
}

let amount = account(60000, 10000, 'Card');
console.log(amount);
