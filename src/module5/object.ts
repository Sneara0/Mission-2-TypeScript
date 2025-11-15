//refference type:object

import type { GenericArray, User } from "../module6/gnerics";

//const user:{
    //organization:'Programming Hero';//vaue=>type :literal types
    //firstName:string;
   // middleName?:string;
    //lastName:string;
   // isMarried:boolean

//}={
    //organization:"Programming Hero",
    //firstName:'sneara',
   //lastName:'parvin',
   //isMarried:true

//}

//console.log(user)




//refference type:object

const user:{
     readonly organization:string//access modifier
    firstName:string;
    middleName?:string;//optional
    lastName:string;
    isMarried:boolean

}={
    organization:"Programming Hero",
    firstName:'sneara',
   lastName:'parvin',
   isMarried:true

}
//user.organization('Programming Hero Fire')
console.log(user);
const UserList: GenericArray<User> = [
    {
        name: "Mr. X",
        age: 22,
    },
    {
        name: "Mr. Y",
        age: 25,
    },
];


//┌───────────────────────────┐
//│         user (object)     │
//├───────────────────────────┤
//│ readonly organization → "Programming Hero" 🏢 │  ← Fixed, change করা যাবে না
//│ firstName → "Sneara" 💁‍♀️                     │  ← দিতে হবেই
//│ middleName → ❓ optional                     │  ← দিতে চাইলে দিতে পারো
//│ lastName → "Parvin" 🌸                      │  ← দিতে হবেই
//│ isMarried → true 💍                         │  ← Boolean value
//└───────────────────────────┘
