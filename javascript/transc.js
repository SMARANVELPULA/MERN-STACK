function processTranscations(transcations){
    let bal =0;
    let withdraw = 0;
    let deposit = 0;
    for(let i of transcations){
        if(i.type === "withdraw"){
            withdraw += i.amount;
            bal -= i.amount;
        }
        else if(i.type === "deposit"){
            deposit += i.amount;
            bal += i.amount;
        }
    }
    return {
        balance: bal,
        withdraw: withdraw,
        deposit: deposit
    };
}
const transcations = [
    { type: "withdraw", amount: 1000 },
    { type: "deposit", amount: 2000 },
    { type: "withdraw", amount: 500 },
    { type: "deposit", amount: 1500 }
];
console.log(processTranscations(transcations));