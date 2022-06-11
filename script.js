
/* Problem statement - 
Create -
    1. input text Box
    2. Whenever user input a text in the input box, show the reversed text on the page
    3. Change color of vowels when user hover the shown reversed text.
    4. Create a reset button that sets everythink back to initial screen.
*/

// //const inpBox = document.getElementById("inputBox")
// const inputHandler = (event) => console.log(event.target.value)


const input = document.querySelector('input');
let stringVal="";

const highlight = (e) => {
  console.log(e.target)
}
const reverseString = document.getElementsByClassName("reverseText")
const updateValue =(e) =>{
// 
  stringVal=e.target.value;
  
  // console.log("vvv",reverseString[0])
  reverseString[0].innerText = `${stringVal.split("").reverse().join("")}`
}
input.addEventListener('input', updateValue);


 reverseString[0].addEventListener('mouseenter', highlight);




