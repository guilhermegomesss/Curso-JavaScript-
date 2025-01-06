const personDatas = {
    firstName : 'Guilherme',
    lastName : 'Gomes',
    age: 17,
    hobbies : ['ler', 'programar', 'meditar'],
    dog : {
        name : 'Simba',
        age : 4,
    }
};
 
const firstname = personDatas.firstName;
const lastname = personDatas.lastName;
const age = personDatas.age;
const hobbies = personDatas.hobbies;
const readHobbies =  hobbies[2];



// Mesma coisa que acima só que de maneira mais fácil 

const { firstName,lastName,age,hobbies,dog } = personDatas;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(readHobbies);
console.log(dog);
console.log(personDatas.dog.name);






// O que nós mais vamos ver no dia a dia é uma lista contendo objetos 

const  todos = [
 {
    id: 1,
    description: 'Estudar Programação',
    isComplet: 'False',
 },

 {
    id: 2,
    description: 'Estudar Inglês',
    isComplet: 'true',
 },


 {
    id: 3,
    description: 'Ler',
    isComplet: 'False',
 },

];

const todo = todos[2].description;

console.log(todo);

