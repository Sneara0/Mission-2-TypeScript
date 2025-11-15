//dynamically generalize: Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

//const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

//const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

const sqrFunc=(value:number)=>{
    return value*value

}


const userA: GenericArray<{ age: number; city: string }> = [
  {
    age: 25,
    city: "dhaka",
  }
];

sqrFunc(4)

type coordinates<X,Y>=[X,Y]
const coordinates1:coordinates<number,number>=[20,20]

const coordinates2:coordinates<number,number>=[20,20]
