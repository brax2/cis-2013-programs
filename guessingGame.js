var intMax, intMin, intRandom, intGuess, intCount;



while (true) //initiation of while loop
{
intMin = parseInt(prompt("Choose the Lowest number for your number range, must be greater than zero:"));
//must be a number larger than 0
while (isNaN(intMin) || intMin<0)
{
    intMin = parseInt(prompt("Invalid Low number entry try again. Do it right this time")); //invalid number alert
}


intMax = parseInt(prompt("Choose the Highest number for your guessing range. Your number has to be at least 2 more than 0"));
while (isNaN(intMax) || intMax <= intMin + 1) //forces number to be higher than the minimum, and must be a number
{
    intMax = parseInt(prompt("Invalid High number entry try again. Do it right this time"));
}


intRandom = parseInt (Math.floor(Math.random() * (intMax-intMin+1)) + intMin);

intCount = 1;



intGuess = parseInt(prompt("Pick a number between" + intMin + " and " + intMax));//alert for minimum and maximum parameters 
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("Invalid entry try again. Do it right this time"));//alert for wrong number 
}



while (intGuess != intRandom) //main guessing while loop, checks if the number is high, low, or correct 
{
    if (intGuess<intRandom)
    {
        alert("Your guess is too low. Guess again"); //if your guess is too low, you have to chose a new number 
    }
        else
        {
        alert("Your guess is too high. Guess again"); //if your guess is too high, you have to chose a new number
        }
intCount ++;
    
    
intGuess = parseInt(prompt("Pick a number between" + intMin + " and " + intMax));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("You have the wrong number. Guess again")); //wrong number, guess a new number
}

}
//gives the final alert of the number and number of guesses 
alert("Congratulations! You guessed the correct number " + intRandom +"\n" +
		", it only took " + intCount + " attempts!");
}