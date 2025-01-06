const itens = document.querySelector(".items");
const buttao = document.querySelector(".btn");


buttao.style.background = "red";

// Usei o itens.remove para remover os itens
 itens.remove();

// Removendo o primeiro e ultimo item 

itens.firstElementChild.remove();

itens.lastElementChild.remove();

// Manipulando um pouco mais com dom
itens.children[0].textContent = 'Item um';

itens.lastElementChild.innerHTML = '<h4>Item três</h4>';

