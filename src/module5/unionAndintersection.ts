type UserRole= 'admin'|'user';
const getDashboard=(role:UserRole)=>{
    if(role==='admin'){
        return 'Admin Dashboard'

    }
    else if(role==='user'){
        return 'User Dashboard'

    } else{
        return 'guest dashboard'
    }

};

//getDashboard('guest')

//intersection &
type employee={
    id:string,
    name:string
    phoneNO:string
}
type manager={
    designation:string
    teamSize:string
}

type employeeManager= employee & manager

const chowdhurysaheb:employeeManager={
    id:'67',
    name:' choedhury Saheb',
    phoneNO:"0172",
    designation:'manager',
    teamSize:'39'



}


//Union Type ( 'admin' | 'user' )
//Intersection Type (&)
//TypeScript-এ Union (|) আর Intersection (&) — এই দুইটা খুব গুরুত্বপূর্ণ type system ধারণা।

//১️⃣ Union Type (|)

//অর্থ:
//👉 “একটা অথবা অন্যটা” — মানে একটি ভ্যালু একাধিক টাইপের মধ্যে যেকোনো একটার হতে পারে।


//২️⃣ Intersection Type (&)

//অর্থ:
//👉 “দুটো (বা একাধিক) টাইপ একসাথে merge করে নতুন টাইপ বানানো।”
//মানে — intersection মানে সব প্রপার্টি একসাথে থাকবে।