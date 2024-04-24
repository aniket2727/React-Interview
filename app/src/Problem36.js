


//this code for applay,call,bind



import React from 'react'


const DoPPP=()=>{


    // // applay
    // function greet(){
    //     console.log(this.name)

    // }
    // const data={name:"aniket"};
    // greet.apply(data);


    // //call
    // var car = {
    //     brand: 'Toyota',
    //     model: 'Camry',
    //     getInfo: function(year, color) {
    //       console.log('Brand:', this.brand);
    //       console.log('Model:', this.model);
    //       console.log('Year:', year);
    //       console.log('Color:', color);
    //     }
    //   };
      
    //   var anotherCar = {
    //     brand: 'Honda',
    //     model: 'Accord'
    //   };
      
    //   car.getInfo.call(anotherCar, 2022, 'blue');


      function print(){
        console.log("the value is ",this.name)
      }

      var person={name:"aniket"}

      const a=print.bind(person)

      a()
      
    return(
        <div>
          <h1>do this opertaions</h1>
        </div>
    )
}



export default DoPPP;