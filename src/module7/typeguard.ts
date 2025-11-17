// type guard

// in typeof

type Alphaneumric=number| string
const add=(num1:Alphaneumric,num2:Alphaneumric)=>{
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2
    }else{
        num1.toString()+num2.toString()
    }
}

add(2, 2); // 4

add(2, "2"); // 22

add("2", 2); // 22

add("2", "2"); //

//in guard
type normalUser={
    name:string;
}

type AdminUser={
    name:string;
    role:'Admin';
}

const getUserInfo=(user:normalUser|AdminUser)=>{
    if('role' in user){
        console.log(`${user.name}and his role is ${user.role} `)
    } else{
        console.log(`${user.name}`)
    }
}

getUserInfo({name:'Normal',role:'Admin'})
