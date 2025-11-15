// keyof : type operator

type RichPeoplesVehicles={
    car:string,// key: value
    
    bike:string,
    cng:string,
}

type MyVehicle1 ='bike'|'car'|'cng'
type MyVehicle2= keyof RichPeoplesVehicles

//?!const myVehicle: Myvehicle2 = "ship";


type User={
    id:number,
    name:string,
    address:{
        city:string,
    }


}

const user:User={
    id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
}

//const myId=user.id;
//const myId=user['id'];
//const myName=user['name'];
//const myAddress=user['address'];

//console.log({ myId, myName, address });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");
// console.log(result);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");

//const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  //return obj[key];
//};


//👉 X হলো object-এর টাইপ
//👉 keyof X মানে হলো এই object-এর valid key
//👉 obj[key] মানে object-এর সে key-এর value

//TypeScript এখানে strict type guarantee দেয়:

//?তুমি ভুল key দিলে error

//?//!ভুল object দিলে error

//?result-এর টাইপও সে property-এর মতো হয়ে যায় (smart inference)


//!getPropertyFromObj(user, "emni");

//কারণ "emni" user object-এর key না।
//ypeScript strict ভাবে চেক করবে।

//?⭐// product example
//!const product = {
 //! brand: "HP",
//!};

//!const result2 = getPropertyFromObj(product, "brand");

//?⭐ student example

//!const student = {
  //!id: 123,
  //!class: "four",
//!};

//!const result3 = getPropertyFromObj(student, "id");

//const result3 = getPropertyFromObj(student, "id");
//allowed keys → "id" | "class"

//result3 → number (123)

//যদি "class" দাও → result string হবে

//TypeScript automatically বুঝে।



