import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello world',
    };
  }

  render() {
    return (
      <div>
        <h1>This is message: {this.state.message}</h1>
      </div>
    );
  }
}

export default Skills;




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   template: `
//     <div>
//       <h1>This is message: {{ message }}</h1>
//     </div>
//   `,
//   styles: []
// })
// export class SkillsComponent {
//   message: string = 'hello world';
// }
