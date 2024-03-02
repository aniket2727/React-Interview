
// questions is print the 1 to 5 numbers and inside the setimeout without use of let keywords

import React from 'react'

const Hoistingandcloser = () => {
    function fun1() {
        for (var i = 0; i < 5; i++) {
            function print(value) {
                setTimeout(function () {
                    console.log(value)

                }, value * 1000);
            }
            print(i)
        }
    }


fun1();
return (
    <div>
      <h1>this is hoisted functions</h1>
    </div>
)
}

export default Hoistingandcloser
