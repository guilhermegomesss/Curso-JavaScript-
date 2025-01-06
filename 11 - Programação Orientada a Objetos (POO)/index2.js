//Herança 
class Animal {
    constructor(name){
        this.name = name
    }

    speak (){
        console.log(`${this.name} esse animal fez algum barulho!`);
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak(name) {
        console.log(`${this.name} latiu!`)
    }
}

const animal1 = new  Animal("Burro");

animal1.speak();


const dog = new Dog("Bob");

dog.speak();


