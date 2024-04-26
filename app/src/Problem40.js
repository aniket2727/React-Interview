



import React from 'react'


const Smallproblem=()=>{

    // function ggcall(){
    //     return{
    //         success:true
    //     }
    // }
    // console.log(ggcall())   // ans :success :true



    // const obj={
    //     name:"anikket",
    //     ans:()=>{
           
    //         console.log("the name is ",this.name)

    //     }
    // }

   // obj.ans()    // we get error regardings to the undefined because arrow functions have not its own  content  ;gives eror

    //   function com(a,b){
    //        if(a==b){    // only check the values
    //         console.log("equal")
    //        }
    //        else{
    //           console.log("not equal")
    //        }
    //   }


    //   com(0,"0")    // output will be the equal

   

    // const first={value:'10'}    // objects are the reference type they points to the memeory
    // const second={value:"10"}

    // console.log(first===second)
    // console.log(first==second)



    // const a=[{
    //     name:"aniket"
    // },{
    //     name:"aniket"
    // }]
    // const b=[...a]   // creating the shallow copies of a which means it referece to the same  locations 
    // b[0]={name:"kadam"}
    // b[1].age="10"



    // console.log("for a",a)   {name:aniket},{name:naiket ,age:10}
    // console.log("for b ",b)  

   


    // objects keys saved as string all the time
    // const obj={
    //     "1":"a",
    //     1:'b',
    //     [1]:"c"
    // }

    // console.log(obj[1])   output would be the c


    // const obj=[{
    //     name:"aniket",
    //     age:"10"
    // }]
    // const b=[...obj]
    // b[0].age="100"
    // b[0].king="kdx"


    // console.log("the b",b)


    // const a=[1,2,3,4]
    // const b=[...a]
    // const c=a;
    // b.push(5)
    // console.log(a)  ans is [1,2,3,4]
    // console.log("this will be c",c)



    // const z=function(){}
    // const y=class {}

    // console.log(typeof z)   ans function 
    // console.log(typeof y)   ans function


    // async function calling(){
    //     await Promise.resolve(console.log("10"))
    //     console.log("1")
    // }
    // console.log("before")
    // calling()
    // console.log("after")    answer is       ===> before 10 after 1




    // (function (){
    //     var x = y = 10;
    // })();

    // console.log(x)
    // console.log(y)

    // let a=10;
    // let b=2;
    // let c=10;

    // a=b;
    // console.log(a);

    // a=b=c;


    // console.log("a",a);  ans 10
    // console.log("b",b);   ans 10
    // console.log("c",c);   ans 10





    return(
        <div>
          <h1>this is the javascript problems</h1>
        </div>
    )
}


export default Smallproblem;