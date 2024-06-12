const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');

btnElement.onclick = function(){
    const yourName = prompt("Please Enter your Name:");
    spanElement.textContent = yourName;
}