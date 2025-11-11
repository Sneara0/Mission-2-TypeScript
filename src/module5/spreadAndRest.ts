//spread operator

const friends=[
    'karim','rahim'
];

const schoolFriend=[
    'sadia','tamanna','noor jahan'
];

const collegeFriens=[
    'halima','emi'
]

friends.push(...collegeFriens,...schoolFriend)
console.log(friends)

const unserInfo={name:'sneara',phnno:'013000'};
const otherInfo={hobby:'programming',favouriteColour:"pink"}

const info={...unserInfo,...otherInfo}
console.log(info)

//rest operator

const sentInvite=(...friends:string[])=>{
    friends.forEach((friends)=>
    console.log(`send invitaion to ${friends}`))

}
sentInvite('pintu','chintu','bulbul','chulbul')

//...friends দিয়ে সব argument কে array আকারে ধরে।

//forEach(friend => ...) দিয়ে প্রতিটি বন্ধু আলাদাভাবে loop করা হয়।

//${friend} দিয়ে ওই মুহূর্তের বন্ধুর নাম print করা হয়।
    