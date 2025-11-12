type User={
    id:number;
    name:{
        firstName:string;
    lastName:string;

    }
    gender:'male'|'female';
    contactNo:string;
    address:{
        city:string;
        division:string
    }
};

const user1:User={
    id:123,
    name:{
        firstName:'sneara',
    lastName:'parvin',

    },
    gender:'male',
    contactNo:'0187654',
    address:{
        city:'dhaka',
        division:'dhaka'
    }

}


const user2:User={
    id:123,
    name:{
        firstName:'mehrim',
    lastName:'jannat',

    },
    gender:'male',
    contactNo:'0187654',
    address:{
        city:'khulna',
        division:'khulna'
    }

}

// function

type AddFunc=(num1:number,num2:number)=>
    number;


const add:AddFunc=(num1,num2)=>num1+num2

