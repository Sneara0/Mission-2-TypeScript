// mapped types

// map

const arrayofNum:Number[]=[1,4,6];
const arrayofString:string[]=['1','4','6'];

const arrayofStringUsingMap:string[]=arrayofNum.map((num)=>num.toString())
console.log(arrayofStringUsingMap)



const user={
    id:222,

}

type AreaOfNum={
    height:number;
    width:number;

}

type height=AreaOfNum['height'];

type arrayofString={
    height:string;
    width:string
}


type Area<T>={
    [key in keyof T]: T[key];
    //key>>height>>string
    //key>>width>>number
};

/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number





*/
//'height'|'width'
const area1:Area<{height:string;width:boolean}>={
    height:"59",
    width:false,
}

// number থেকে string বানানো
//!const arrayofNum: Number[] = [1, 4, 6];
//!const arrayofStringUsingMap: string[] = arrayofNum.map((num) =>
 //! num.toString()
//!);
//?console.log(arrayofStringUsingMap);

//!Mapped Type = Object এর key গুলো loop করে নতুন type বানানো।
//[key in keyof T]: T[key]
//[key in keyof T]:T[key]
//[key in keyof T]: T[key]
//[key in keyof T]: T[key]

