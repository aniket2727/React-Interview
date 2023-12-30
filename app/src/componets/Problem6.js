import React from 'react'

// addition of data using 3
import { useState } from 'react';


const Problem6 = () => {
    const [data,setdata]=useState(0)
    

    const getdata=()=>{
        setdata((prev)=>prev+1)
        setdata((prev)=>prev+1)
        setdata((prev)=>prev+1)
    }
  return (
    <div>
       <h1>the data is{data}</h1>
       <button onClick={()=>getdata()}>add</button>
    </div>
  )
}

export default Problem6;




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-problem-six',
//   template: `
//     <div>
//       <h1>The data is {{ data }}</h1>
//       <button (click)="getData()">Add</button>
//     </div>
//   `,
//   styles: [],
// })
// export class ProblemSixComponent {
//   data: number = 0;

//   getData() {
//     this.data += 1;
//     this.data += 1;
//     this.data += 1;
//   }
// }



/* <template>
  <div>
    <h1>The data is {{ data }}</h1>
    <button @click="getData">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 0,
    };
  },
  methods: {
    getData() {
      this.data += 1;
      this.data += 1;
      this.data += 1;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
// </style> */}
