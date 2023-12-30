
// arrangings the numbers at 0

import React, { useState } from 'react';

const Problem11 = () => {
  const [data, setData] = useState([0, 2, 0, 4, 5, 6]);
  var arr = data;
  var left = 0;
  var right = data.length - 1;

  while (left < right) {
    while (arr[right] === 0) {
      right = right - 1;
    }
    if (arr[left] === 0) {
      arr[left] = arr[right];
      arr[right] = 0;
      right = right - 1;
    }
    left = left + 1;
  }

  return (
    <div>
      {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
};

export default Problem11;



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-problem-eleven',
//   template: `
//     <div>
//       <ng-container *ngFor="let item of data; let index = index">
//         <h1>{{ item }}</h1>
//       </ng-container>
//     </div>
//   `,
//   styles: []
// })
// export class ProblemElevenComponent {
//   data: number[] = [0, 2, 0, 4, 5, 6];

//   constructor() {
//     this.moveZerosToEnd();
//   }

//   moveZerosToEnd(): void {
//     let left = 0;
//     let right = this.data.length - 1;

//     while (left < right) {
//       while (this.data[right] === 0) {
//         right = right - 1;
//       }

//       if (this.data[left] === 0) {
//         [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
//         right = right - 1;
//       }

//       left = left + 1;
//     }
//   }
// }
