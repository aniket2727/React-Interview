


// problem related to the dataes
//  finding the age

import React from 'react'



const Problemrelatedtodate=()=>{



    function getdata(birthdata){

        const today=new Date();

        var age=today.getFullYear()-birthdata.getFullYear();


        if(today.getMonth()>birthdata.getMonth()){
            if(today.getDay()>birthdata.getDay()){
                age--
                
            }
        }
        else{
            age--
        }


        return age;

    }

    var birthdata=new Date(2001,2,2)
    const result=getdata(birthdata)


    console.log("the age of the person",result)


    // var currentdata=new Date();
    // console.log("this is current date",currentdata)
    // var datawithspecific=new Date(2024,3,12);
    // console.log(datawithspecific)
    // const current=new Date();
    // const month=current.getMonth();
    // console.log(month)
    // console.log(current.getDate())
    // console.log(current.getDay())
    // console.log(current.toLocaleDateString())
    // console.log(current.getDay() +9)


    return(
        <div>

           <h1>problems related to the dates</h1>
        </div>
    )
}



export default Problemrelatedtodate;