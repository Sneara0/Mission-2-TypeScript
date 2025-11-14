//?: ternary operator:decision making
//? :nullish coaleacing:null and undefined
//? optional chaining


const biyerjonnoEligible=(age:number)=>{

    //if(age>=21){
        //console.log('you are eligible')
    //}else{
       // console.log('you are not eligible')
    //}

    const result= age >= 21 ?'you are eligible':"you are not eligible"

    console.log(result)

}
biyerjonnoEligible(24)

const userTheme= undefined
const selectedTheme= userTheme ??'light theme'
console.log(selectedTheme)
    

    const isAuthenticated= null
    const resultwithTernary=isAuthenticated? isAuthenticated :'you are guest !';
    const resultwithNulish=isAuthenticated ?? 'you are guest'

    console.log ({resultwithTernary},{resultwithNulish})

    //nulish only undefined and null value te kaj kore..empty string e kaj kore but ternary kaj kore.

    //optional chaining

    const user:
    {
        address:{
            city:string;
            town:string
            postalCode?:string
        }

    }={
        address:{
            city:'Dhaka',
            town:'Mirpur'

        }

    }


    const postalCode =user?.address?.postalCode
    console.log(postalCode)