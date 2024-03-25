import React, { useState } from 'react';
import ChildParentcompoents from './ChildParentcompoents';

const Parent1 = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5]);
    return (
        <div>
            <ChildParentcompoents data={data} />
        </div>
    );
};

export default Parent1;
