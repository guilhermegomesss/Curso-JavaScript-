const todos = [
    {
        id : 1,
        nome : "Guilherme",
        idade : 17,
    },
    {
        id : 2,
        nome : "Gustavo",
        idade : 30,
    },
    {
        id : 3,
        nome : "Miguel",
        idade : 25,
    },
];

//converte a lista para Json  
const convertejson = JSON.stringify(todos);

console.log(convertejson);

// Converter de Json para lista :

const jsonLista = JSON.parse(convertejson);

console.log(jsonLista);