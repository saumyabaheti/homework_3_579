/*
* Excercise 1
*
*/

 

/*
* Then write a function that changes the text and the color inside the div
*
*/


let btnColor = document.querySelector("#color-block");
let textName = document.querySelector("#color-name");
btnColor.addEventListener("click", changeColor);

function changeColor(){

    //Write a condition determine what color it should be changed to
    if (btnColor.style.backgroundColor == 'yellow'){

            btnColor.style.backgroundColor = '#F08080';
            textName.textContent = "#F08080"
            
        //change the background color using JS

        //Change the text of the color using the span id color-name
    }
    else {

            btnColor.style.backgroundColor = "yellow";
            textName.textContent = "#FFFF00";
            

        //change the background color using JS

        //Change the text of the color using the span id color-name
    }


}




/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

let convertbtn = document.querySelector("#convertbtn");
convertbtn.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){

    let fahrenheit = document.querySelector("#f-input").value;
    let celsius = 5/9*(fahrenheit - 32);
    document.querySelector("#c-output").innerHTML = celsius;



    //Calculate the temperature here

    //Send the calculated temperature to HTML

}


