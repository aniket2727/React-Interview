import React, { useState } from 'react';

const Components1 = () => {
    const [data, setData] = useState([
        { q: "What is the national bird of India?", options: ["Parrot", "Tiger", "Peacock", "Lion"], ans: "Peacock", state: 0 },
        { q: "What is the national animal of India?", options: ["Elephant", "Tiger", "Peacock", "Lion"], ans: "Tiger", state: 0 },
        { q: "What is the national flower of India?", options: ["Rose", "Lily", "Peacock", "Lion"], ans: "Rose", state: 0 },
        { q: "What is the national river of India?", options: ["Koyana", "Ganga", "Kaveri", "Lion"], ans: "Ganga", state: 0 }
    ]);

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };

    const handleAnswer = (selectedOption, currentIndex) => {
        const isCorrect = selectedOption === data[currentIndex].ans;
        const updatedData = data.map((item, index) => (
            index === currentIndex ? { ...item, state: isCorrect ? 1 : -1 } : item
        ));
        setData(updatedData);
        handleCount();
    };

    if (count === data.length) {
        return (
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <p>{item.q}</p>
                        <p>{item.state}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            {data.map((item, index) => (
                index === count && (
                    <div key={index}>
                        <h1>{item.q}</h1>
                        {item.options.map((option, index1) => (
                            <button key={index1} onClick={() => handleAnswer(option, index)}>
                                {option}
                            </button>
                        ))}
                    </div>
                )
            ))}
        </div>
    );
};

export default Components1;
