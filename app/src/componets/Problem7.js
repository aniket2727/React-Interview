import React, { useImperativeHandle, useMemo, useState } from 'react';

const Problem7 = () => {
  const [data, setData] = useState(0);

  const result = useMemo(() => {
    return data + 1;
  }, [data]);

  return (
    <div>
      <p>Data: {data}</p>
      <p>Result: {result}</p>
      <button onClick={() => setData(data + 1)}>Increment Data</button>
    </div>
  );
};

export default Problem7;


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-problem-seven',
//   template: `
//     <div>
//       <p>Data: {{ data }}</p>
//       <p>Result: {{ result }}</p>
//       <button (click)="incrementData()">Increment Data</button>
//     </div>
//   `,
//   styles: [],
// })
// export class ProblemSevenComponent {
//   data: number = 0;

//   get result(): number {
//     return this.data + 1;
//   }

//   incrementData() {
//     this.data += 1;
//   }
// }




//   <div>
//     <p>Data: {{ data }}</p>
//     <p>Result: {{ result }}</p>
//     <button @click="incrementData">Increment Data</button>
//   </div>
// </template>

/* <script>
export default {
  data() {
    return {
      data: 0,
    };
  },
  computed: {
    result() {
      return this.data + 1;
    },
  },
  methods: {
    incrementData() {
      this.data += 1;
    },
  },
};
</script> */
/* <style scoped>
/* Add your component-specific styles here */ 

