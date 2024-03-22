


import React, { useEffect } from 'react'

const Promisescoponets = () => {



  const function1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      },2000)
    });
  }

  const function2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }


  const promiseAll = () => {
    Promise.all([function1(), function2()])
      .then(([result1, result2]) => {
        console.log("the result is ", result1);
        console.log("the result is ", result2)
      })
      .catch((error) => {
        console.log("Error:", error);
      }, [])

  }

  useEffect(() => {
    promiseAll();
  },[])

  return (
    <div>
      <h1>this is componets</h1>
    </div>
  )
}

export default Promisescoponets
