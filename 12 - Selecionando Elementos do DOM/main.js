// Document.getElementById  você só pode colocar id
const addUserText = document.getElementById("add-user");

addUserText.innerText = "Adicionar usuário";


// Query Selector : Você pode colocar tanto id quanto classe
const adicionartexto = document.querySelector("#add-user");

adicionartexto.textContent = "Adicionar Usuário"



//Com o query selector e o document get element by id você só consegue selecionar 1 elemento