
/*
-----------Animal class keyword code-----------
*/

class Animal {
    constructor(name, health,){
        this.name = name;
        this.health = health;
        
       
    }

    get name() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }

talks() {

    console.log(`Hi I'm ${this.name} and my health is ${this.health} `);

};

feed(){
    healthBar.value += 15;
}

drink(){
    healthBar.value += 15;
}

pet(){
    healthBar.value += 15;
}


}






const Cat = new Animal ('Catty', 100 )


const Dog = new Animal ('Dave', 80)


const Bird = new Animal ('Bobby', 70)



Cat.talks();
Dog.talks();
Bird.talks();



/* ----------Animal Profile Code ---------------*/

class Cat extends Animal{
    constructor(){
    super(name)
    };
    letOut(){
        healthBar.value +=10;
    };
}

class Dog extends Animal{
    constructor(){
    super(name)
    };
    walk() {
        healthBar.value += 20;
    }
}

class Bird extends Animal{
    constructor(){
    super(name) 
    };
    fly(){
        healthBar.value =+ 20;
    }
    };