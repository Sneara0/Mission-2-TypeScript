//function

function addNormal (num1:number,num2:number):number{
    return num1+num2;

}

const addArrow=(num1:number,num2:number):number=>
    num1+num2

addArrow(2,2)

//object=>function=>method

const poorUser={
    name:'mezba',
    balance:0,
    addBalance(value:number):number{
    const totalBalance =this.balance+value;
    return totalBalance

    }
}
poorUser.addBalance(10000)

const arr:number[]=[2,4,6];

const srrArray= arr.map((Element:number):number=>
    Element*Element

)

