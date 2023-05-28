const element = document.getElementById("para");

var randomNumber = Math.floor(Math.random() * 100) + 1;

const handleOnClick = ()=>{
    let value = document.getElementById("name").value;

    console.log(value);

    let statement = "";

    if(value>randomNumber){
        statement = "Too high, please try again!";
    }else if(value<randomNumber){
        statement = "Too low, please try again!";
    }else{
        statement = "Perfect! You guessed it right, thanks for playing.";
    }

    element.innerHTML = statement;
}