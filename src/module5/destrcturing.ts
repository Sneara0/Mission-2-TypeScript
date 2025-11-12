//object-destructuing

const user={
    id:123,
    name:{
        firstName:'sneara',
        middleName:"mehrima",
        lastName:'parvin'
    },
    gender:'female',
    favourirteColor:'pink'
}

//const myFavouriteColor=user.favourirteColor
//const myMiddleName=user.name.middleName

const{favourirteColor,name:{middleName:myMiddleName}}=user;
//console.log(myMiddleName);

const friends=['sneara','mehrima','jannat']

const[,,bestFriend] =friends
console.log(bestFriend)