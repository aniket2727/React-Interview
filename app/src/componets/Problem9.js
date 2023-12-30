

// is palindrom or not
import React, { useState } from 'react'

const Problem9 = () => {
    const [data, setdata] = useState('')
    const [message, setmessage] = useState('')
    const getdata = () => {
        const converted = data.toString()
        const reversed = converted.split('').reverse().join(''); 
        if (converted === reversed) {
            setmessage('this is palindrom')
        }

        else {
            setmessage('this is not palindrom')
        }
    }
    return (
        <div>
            <h1>{message}</h1>
            <input placeholder='eneter the bnumbers' onChange={(e) => setdata(e.target.value)} />
            <button onClick={getdata}>check</button>
        </div>
    )
}

export default Problem9




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-problem-nine',
//   template: `
//     <div>
//       <h1>{{ message }}</h1>
//       <input placeholder="Enter the numbers" [(ngModel)]="data" />
//       <button (click)="getData()">Check</button>
//     </div>
//   `,
//   styles: [],
// })
// export class ProblemNineComponent {
//   data: string = '';
//   message: string = '';

//   getData() {
//     const converted = this.data.toString();
//     const reversed = converted.split('').reverse().join('');

//     if (converted === reversed) {
//       this.message = 'This is a palindrome';
//     } else {
//       this.message = 'This is not a palindrome';
//     }
//   }
// }
