#! usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 2134;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter Your Pin",
            type: "number"
        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log("Correct Pin Code");

    let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please Select From Given Options",
                type: "list",
                choices: [ "withdraw", "Check Balance" ]
            }
        ]
    );




if ( operationAnswer.operation === "withdraw" ){

    let withdrawal = await inquirer.prompt (
        [
            {
                name: "WithdrawalOptions",
                message: "Choose",
                type: "list",
                choices: [ "Fast Cash", "Enter Amount" ]
            }
        ]
    );
 
    if (withdrawal.WithdrawalOptions === "Fast Cash"){
        let fastCash = await inquirer.prompt (
            [
                {
                    name: "InstantWithdrawal",
                    message: "Choose from the Given Amount to Withdraw",
                    type: "list",
                    choices: [ "5000", "10000", "15000", "20000" ]
                }
            ]
        );
        if (fastCash.InstantWithdrawal <= myBalance){

            myBalance -= fastCash.InstantWithdrawal;
        console.log(`Your Remaining Balance is:  ${myBalance}`);        
        }
        else {
            console.log("Insuffient Balance");
            console.log(`Your Current Balance is: ${myBalance}`);
        }
    }
    
    else if (withdrawal.WithdrawalOptions === "Enter Amount"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "How much amount do you want to withdraw?",
                    type: "number"
                }
            ]
        );
        if (amountAns.amount <= myBalance){

            myBalance -= amountAns.amount;
        console.log(`Your Remaining Balance is:  ${myBalance}`);        
        }
        else {
            console.log("Insuffient Balance");
            console.log(`Your Current Balance is: ${myBalance}`);
        }
       
    }

   
   
    
   
}

else if ( operationAnswer.operation === "Check Balance"){
    console.log(`Your Current Balance is: ${myBalance}`);
    
}

} else {
    console.log("Incorrect Pin Code");    
}