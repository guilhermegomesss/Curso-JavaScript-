//Map Pegue uma lista e Multipliquei por 2 

const numbers = [1, 2, 3, 4,5];

const numbersMultiplied = numbers.map(function (number) {
    return number * 2;
});

console.log(numbersMultiplied);

// Filter Peguei somente os números pares de uma lista

const ages = [2,40,32,34,35,37];

const  evenage = ages.filter(function (age) {
    return age % 2 === 0;
}); 

console.log(evenage);




//Reduce O reduce é util para quando nós queremos reduzir todos os itens de uma lista para um só

const age = [10,50,40,30,400];

const somOfAge = age.reduce(function(ages, acumulator){
    return acumulator + ages;
}, 0);

console.log(somOfAge);

