
/*
------------------JSDOM Links to HTML------------
*/

const petNameInput = document.getElementById("nameInput");
const petChoice=document.getElementById('choosePet')





/*
------------------Pet name Function------------
*/

let pet = "";
let petName = '';


const inputName = () => {
    petName= register("Give your pet a name!")
    while(petName.length === 0){
        remind("Did you forget to name your pet?");
        petName = register("Pet name");
    }
};




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



/*
------------------Health decline Function------------
*/


const healthDecline = () => {
    const dropOff = setInterval(loseHealth, 05000);
    function loseHealth() {
        healthBar.value--;
    }
};




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