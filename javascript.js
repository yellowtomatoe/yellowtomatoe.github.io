console.log("googy");
const button = document.querySelector('button');

button.addEventListener('click', event => {
  console.log("yellow cucumber");
  addButton();
});

function addButton(){
    const newButton=document.createElement("button");
    newButton.textContent="you have created a button";
    newButton.onclick=addButton;
    const buttonHouse=document.getElementById("buttonContainer");
    buttonHouse.appendChild(newButton);
}