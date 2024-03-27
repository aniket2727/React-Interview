// import React, { useState, useEffect } from 'react';

// const Reverseblock = () => {
//     const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     const [collected, setCollected] = useState([]);

//     useEffect(() => {
//         if (collected.length === data.length && collected.length !== 0) {
//             const interval = setInterval(() => {
//                 console.log("looping");
//                 setCollected(prevCollected => {
//                     const [, ...newCollected] = prevCollected; // Remove the first element
//                     return newCollected;
//                 });
//             }, 2000);

//             return () => clearInterval(interval);
//         }
//     }, [collected, data]);

//     const handlePushData = (item) => {
//         if (!collected.includes(item)) {
//             setCollected([...collected, item]);
//         }
//     };

//     return (
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <div style={{ width: '50%', border: '1px solid red', height: '700px', display: 'flex', flexWrap: 'wrap' }}>
//                 {
//                     data.map((item, index) => (
//                         <div key={index} onClick={() => handlePushData(item)} style={{ height: '100px', width: '100px', border: '1px solid red', margin: '10px', cursor: 'pointer', background: collected.includes(item) ? 'green' : 'red' }}>
//                             <h1>block {item}</h1>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Reverseblock;
