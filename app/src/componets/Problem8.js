import React, { useState } from 'react';

const Problem8 = () => {
  const [options, setOptions] = useState(['aniket', 'om', 'sakshi']);

  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={onChange}>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Problem8;





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-problem-eight',
//   template: `
//     <div>
//       <div>
//         <select (change)="onChange($event)">
//           <option *ngFor="let item of options; let i = index" [key]="i">{{ item }}</option>
//         </select>
//       </div>
//     </div>
//   `,
//   styles: [],
// })
// export class ProblemEightComponent {
//   options: string[] = ['aniket', 'om', 'sakshi'];

//   onChange(event: any) {
//     console.log(event.target.value);
//   }
// }




{/* <template>
  <div>
    <div>
      <select @change="onChange">
        <option v-for="(item, index) in options" :key="index">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['aniket', 'om', 'sakshi'],
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },
  },
};
</script>

<style scoped>

</style> */}




// import React, { useState } from 'react';
// import { View, Picker } from 'react-native';

// const Problem8 = () => {
//   const [selectedOption, setSelectedOption] = useState('aniket');
//   const options = ['aniket', 'om', 'sakshi'];

//   const onChange = (value) => {
//     setSelectedOption(value);
//     console.log(value);
//   };

//   return (
//     <View>
//       <View>
//         <Picker
//           selectedValue={selectedOption}
//           onValueChange={(itemValue) => onChange(itemValue)}
//         >
//           {options.map((item, index) => (
//             <Picker.Item key={index} label={item} value={item} />
//           ))}
//         </Picker>
//       </View>
//     </View>
//   );
// };

// export default Problem8;
