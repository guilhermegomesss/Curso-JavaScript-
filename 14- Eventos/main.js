const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const body = document.querySelector("body")

const itens = document.querySelector(".items")

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
 
    if(nameValue === "" || emailValue === ""){
       return  alert("Por Favor, preencha todos os campos");

    };

    myForm.style.background = "red";

    itens.firstElementChild.textContent = nameValue; 
    itens.children[1].textContent = emailValue;


    body.style.background = "white";
    
  
});


