import inquirer from "inquirer"

let myBalance=50000;
let myPin=5413;

let pinAns = await inquirer.prompt([{
    name:"pin",
    message:"Please enter your pin! (^-^)",
    type:"number"
}])

if (pinAns.pin === myPin){
    console.log("You've entered the right pin!")
    let operation = await inquirer.prompt([{
        name:"command",
        message:"Please select what you would like to do today! :)",
        type:"list",
        choices:["Withdraw", "FastCash", "CurrentBalance"]
    }])
    if (operation.command === "Withdraw"){
        let amount = await inquirer.prompt([{
            name:"value",
            message:"Please enter the amount of value you'd like to withdraw from your account: ",
            type:"number"
        }])
        if (amount.value>myBalance){
            console.log("Insufficient Balance!\n 'The value you wish to withdraw surpasses your current balance.")
        }else {myBalance-=amount.value
        console.log(`Successfully withdrawn!
        Your current balance is: ${myBalance}`)}
    } else if (operation.command === "FastCash"){
        let choice = await inquirer.prompt([{
            name:"values",
            message:"Please select one of the following amount you'd like to withdraw from your account:",
            type:"list",
            choices:[1000,5000,10000,25000,50000]
        }]) 
        if(choice.values === 1000){
            myBalance -= 1000
            console.log(`Successfully withdrawn!
            Your current balance is: ${myBalance}`)
        }else if(choice.values === 5000){
            myBalance -= 5000
            console.log(`Successfully withdrawn!
            Your current balance is: ${myBalance}`)
        }else if(choice.values === 10000){
            myBalance -= 10000
            console.log(`Successfully withdrawn!
            Your current balance is: ${myBalance}`)
        }else if(choice.values === 25000){
            myBalance -= 25000
            console.log(`Successfully withdrawn!
            Your current balance is: ${myBalance}`)
        }else if(choice.values === 50000){
            myBalance -= 50000
            console.log(`Successfully withdrawn!
            Your current balance is: ${myBalance}`)
        }
    } else if (operation.command === "CurrentBalance"){
        console.log(`Your current balance is: ${myBalance}![*^_^*]`)
    }
} else {
    console.log("Wrong pin :( ! \nPLease enter the correct pin.")
}