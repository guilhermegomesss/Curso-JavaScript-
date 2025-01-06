const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".msg")
const submitButton = document.querySelector("#submit-button");
const items = document.querySelector(".items");


submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || emailValue === ""){
       errorMessage.textContent = "Por favor preencha todos os  campos!";
       errorMessage.classList = "error";

       setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
       }, 3000);

       return;
    }
    
    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue} <br/> Email: ${emailValue}`;

    items.appendChild(li);

});