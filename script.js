
/*
------------------JSDOM Links to HTML------------
*/

const petNameInput = document.getElementById("nameInput");
const createPet = document.getElementById('choosePet')
const dogBtn = document.getElementById('dogButton')
const catBtn = document.getElementById('catButton')
const birdBtn = document.getElementById('birdButton')
const welcomePage= document.getElementById("welcomePage")
const petScreen = document.getElementById("petScreen")




let pet = "";
let petName = '';

petScreen.style.display = "none";
/*
------------------Pet name Function------------
*/


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

    get name(){
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
};

const Cat = new Animal ('Catty', 100 )


const Dog = new Animal ('Dave', 100)


const Bird = new Animal ('Bobby', 100)

/*
------------------Health decline Function------------
*/


const healthDecline = () => {
    const dropOff = setInterval(loseHealth, 500);
    function loseHealth() {
        healthBar.value--;
    }
};



/*
------------------Animal Choice Event listener code HERE------------
*/

dogBtn.addEventListener("click",() =>{
    welcomePage.style.display = "none";
    petScreen.style.display ="block";
    inputName();
    //SPRITE CODE HERE
    healthDecline();
});

catBtn.addEventListener("click",() =>{
    welcomePage.style.display = "none";
    petScreen.style.display ="block";
    inputName();
    //SPRITE CODE HERE
    healthDecline();
});

birdBtn.addEventListener("click",() =>{
    welcomePage.style.display = "none";
    petScreen.style.display ="block";
    inputName();
    //SPRITE CODE HERE
    healthDecline();
});




/* ----------Animal Profile Code ---------------*/

// class Cat extends Animal{
//     constructor(){
//     super(name)
//     };
//     letOut(){
//         healthBar.value +=10;
//     };
// }

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

