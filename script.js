
const names = ["rahim","karim","naim","mila","nishu"];

names[names.length] = "Riya";
names.pop(); //it will remove the last added element
console.log(names[names.length-1]);
// console.log(names[5]);

let country1 = ["India", "Nepal"];
let country2 = ["Bangladesh", "bhutan"];

let country = country1.concat(country2);
console.log(country);


let num = [10, 20, 40, 405, 34];

for(i=0; i<5; i++){
    console.log(num[i]);
}


//five digit total number
document.write("<br><br>");
let myNumber = new Array();
let sum = 0;
for(x=0; x<5; x++){
    
    myNumber[i] = parseInt(prompt("Enter Your Five Number: "));
    sum = sum + myNumber[i];
}

document.write("Your Total Five Number = " + sum);












