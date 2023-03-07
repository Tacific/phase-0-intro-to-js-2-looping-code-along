// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];
const event = "Surprise";

function writeCards(name, event){
    let newName = [];
    for (let i = 0; i < name.length; i++) {
        newName.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
    return newName;
}

function countDown(){
    let number = 11;
    while (number--){
        console.log(number);
    }
}