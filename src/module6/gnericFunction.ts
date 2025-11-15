// Generic Function
   const createArrayWithString=(value:string)=>[value];
   const createArrayWithNumber=(value:number)=>[value];

   const createArrayWithobj=(value:{id:number;name:string})=>{
    return[value]
   };

   const createWithGeneric=<T>(value:T)=>{
    return[value]

   };

   const arrString=createWithGeneric('sneara')
   const arrNumber=createWithGeneric(13)
   const arrobj=createWithGeneric({
    id:123,
    name:'Next Level'
   })


   //tuple
   const createArrayWithtuple=(param1:string,param2:string)=>[
    param1,
    param2,
   ]

   const createArrayTupleWithGeneric=<X,Y>(param1:X,param2:Y)=>[
    param1,param2
   ]
   const res1=createArrayTupleWithGeneric('sneara',false)
   const res2=createArrayTupleWithGeneric(223,{name:'sneara'})

  
  
   const addStudentToCourse=<T>(studentInfo:T)=>{
return{
    course:'next level',
    ...studentInfo
}

   }

   const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result1=addStudentToCourse(student2)
console.log(result1)

 

   