class Person {
    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

// Criando Métodos
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

// Método Estático : Métodos que não precisa que a classe seja instanciada para serem executados
    static speak () {
        console.log("Olá,Mundo!")
    }



};

const person = new Person("Guilherme","Gomes",17);

console.log(person);

person.getFullName();

Person.speak();
