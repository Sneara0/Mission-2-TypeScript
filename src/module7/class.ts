// oop - class >>> object

// class Animal{
//     name:string;
//     species:string;
//     sound:string;


// constructor (name:string,species:string,sound:string){
//     this.name=name;
//     this.species=species;
//     this.sound=sound;
// }

// makesound(){
//     console.log(`${this.name}is making sound: ${this.sound}`);
// }
// }

//parameter properties

class Animal {
  constructor(public name: string, public species: string, public sound: string) {
   
  }

  makeSound() {
    console.log(`${this.name} is making  sound: ${this.sound}`);
  }
}

const dog=new Animal ("dogesh vai",'dog','ghew ghew');
//const cat =new Animal("cat vai",'cat',"meaw meaw")

dog;



function add(num1:number,num2:number){


}
add(2,4)