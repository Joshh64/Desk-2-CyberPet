/* 
------------------JSDOM Links to HTML------------ 
*/ 

const petNameInput = document.getElementById("nameInput"); 
const createPet = document.getElementById('choosePet') 
const dogBtn = document.getElementById('dogBtn') 
const catBtn = document.getElementById('catBtn') 
const birdBtn = document.getElementById('birdBtn') 
const welcomePage= document.getElementById("welcomePage") 
const petScreen = document.getElementById("petScreen") 
const healthBar = document.getElementById("healthBar") 
const petButtons = document.getElementById("petButtons") 
const eat =document.getElementById("eat") 
const drink =document.getElementById("drink") 
const petFn =document.getElementById("petBtn") 

let pet = ""; 
let petName = ""; 

petScreen.style.display = "none"; 

/* 
------------------Pet name Function------------ 
*/ 

const inputName = () => { 
    petName = document.getElementById("inputName").value 
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
        this.petName = name; 
        this.healthBar = health; 
    } 
    get name(){ 
        return this.petName.charAt(0).toUpperCase() + this.petName.slice(1); 
    } 
eat(healthBar){ 
    healthBar.value += 15; 
} 
drink(healthBar){ 
    healthBar.value += 15; 
} 
petFn(healthBar){ 
    healthBar.value += 15; 
} 
} 

class Dog extends Animal { 
    constructor(name, healthBar) { 
      super(name, healthBar); 
    } 
} 

class Cat extends Animal { 
    constructor(name, healthBar) { 
          super(name, healthBar); 
        } 
}; 

class Bird extends Animal { 
    constructor(name, healthBar) { 
      super(name, healthBar); 
    } 
}; 

/* 
------------------Health decline Function------------ 
*/ 

const healthDecline = () => { 
    const dropOff = setInterval(loseHealth, 300); 
    function loseHealth() { 
        healthBar.value--; 
    } 
}; 

/* 
------------------Animal Choice Event listener code HERE------------ 
*/ 

dogBtn.addEventListener("click",() =>{ 
    welcomePage.style.display = "none"; 
    petScreen.style.display = "block"; 
    inputName(); 
    //SPRITE CODE HERE 
    healthDecline(); 
}); 

catBtn.addEventListener("click",() =>{ 
    welcomePage.style.display = "none"; 
    petScreen.style.display = "block"; 
    inputName(); 
    //SPRITE CODE HERE 
    healthDecline(); 
}); 

birdBtn.addEventListener("click",() =>{ 
    welcomePage.style.display = "none"; 
    petScreen.style.display = "block"; 
    inputName(); 
    //SPRITE CODE HERE 
    healthDecline(); 
}); 

/* ----------Animal Profile Code ---------------*/ 

 

// class Cat extends Animal{ 
//     constructor(){ 
//     super(name) 
//     eat(); 
//     drink(); 
// }; 
// }; 

// class Dog extends Animal{ 
//     constructor(){ 
//     super(name) 
//     }; 
//     walk() { 
//         if (healthBar === 0){ 
//             return "Game Over"; 
//         }else{ 
//         healthBar.value += 20; 
//     } 
// }; 


// class Bird extends Animal{ 
//     constructor(){ 
//     super(name)  
//     }; 
//     fly(){ 
//         if (healthBar === 0) { 
//             return "Game Over"; 
//         }else{ healthBar.value =+ 20; 
//     } 
//     }; 

const myPet = new Animal(petName, healthBar); 

eat.addEventListener("click",() =>{ 
   myPet.eat(healthBar); 
}) 

drink.addEventListener("click",() =>{ 
   myPet.drink(healthBar); 
}) 

petFn.addEventListener("click",() =>{ 
    myPet.petFn(healthBar);       
}) 

      /*---------Game over/Death code----------------*/ 

      death = () => { 
        document.getElementById("death-trigger").classList.add("fade-out"); 

        setTimeout(function () { 
          document.getElementById("game-over").style.display = "none"; 
          gameContainer.style.display = "none"; 
        }, 2000); 

        return "gameOver"; 
      }; 

      /*---------Reset Game code----------------*/ 

     const resetGame = () =>{ 

          INSERTCODEHERE.addEventListener("click", () =>{ 
          }) 
      }; 