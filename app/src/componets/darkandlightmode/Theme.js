



import React, { useEffect, useState } from 'react'
import '../allcss.css'
const Theme = () => {
    const [them, setThem] = useState(() => {
        const gethem = localStorage.getItem('them');
        return gethem ? gethem : 'light'
    })

    const togglebutton = () => {
        const selected_them = them === 'light' ? 'dark' : 'light'
        setThem(selected_them)
        localStorage.setItem('them', selected_them)
    }

    useEffect(() => {
        document.body.className = them
    }, [them])
    
    return (
        <div className={` app-container ${them}`}>
            <h1>React Dark/Light Mode Toggle</h1>
            <p>Current Theme: {them}</p>
            <button onClick={togglebutton}>Toggle Theme</button>

        </div>
    )
}

export default Theme
