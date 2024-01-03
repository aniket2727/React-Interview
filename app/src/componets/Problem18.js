




// password hide and show problems
import React, { useState } from 'react'

const Problem18 = () => {
    const [flag, setflag] = useState(true)
    const handleShow = () => {
        setflag(!flag)
    }
    return (
        <div className='main-class'>
            <input type={flag ? 'text' : 'password'} placeholder="enter password" />
            <button onClick={handleShow}>{flag ? 'hide' : 'show'}</button>
        </div>
    )
}

export default Problem18



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-problem18',
//   template: `
//     <div class="main-class">
//       <input [type]="flag ? 'text' : 'password'" placeholder="enter password" />
//       <button (click)="handleShow()">{{ flag ? 'hide' : 'show' }}</button>
//     </div>
//   `,
//   styles: []
// })
// export class Problem18Component {
//   flag: boolean = true;

//   handleShow(): void {
//     this.flag = !this.flag;
//   }
// }

