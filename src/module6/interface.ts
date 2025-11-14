type user={
    name:string,
    age:number,
}
//interface:object:object,arrary,function.
interface Iuser{
    name:string,
    age:number,

}

type Role={
    role:'Admin'|'user',

}

type UserWithRole= user & Role;

interface IuserWithRole extends Iuser{
    role:'admin'|'role'
}

const user1:IuserWithRole={
    name:'Mr.x',
    age:100,
    role:'admin'
}
const user2:Iuser={
    name:'Mr. y',
    age:122,
}

type isAdmin=boolean;
const isAdmin:isAdmin= false;

//function
type add=(num1:number,num2:number)=>number

interface IAdd{
    (num1:number,num2:number):number
}

const add:IAdd=(num1,num2)=>num1+num2;


type friends= string[]
interface Ifriends{
    [index:number]:string
}

const friends:Ifriends=['A','B','C']

