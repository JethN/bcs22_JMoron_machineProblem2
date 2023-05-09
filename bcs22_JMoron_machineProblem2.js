let guess = prompt("Enter a Number\n")

let ans = Math.floor(Math.random() * 101);

let tries = 1



 

while(guess != ans){

if(guess > ans){

   guess = prompt("Too high guess again!\n")


 

}else{



 

   guess = prompt("Too low guess again!\n")

    tries++


 

}if(guess == ans){

alert("Correct! Your numbers of tries is: " + tries)
 

}
}