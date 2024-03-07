/*
Create a Counter component that displays a count and four buttons: "Increment", "Increment After Delay", "Increment Twice" and "Correct Increment Twice"
*/
import {useState} from 'react'

export function Counter() {
    const [count,setCount] = useState(0)

    return (<>

            <div id="wrapper">
     
                <div className="Button">
                    <button onClick={() => setCount((count) => count + 1)}>
                        IncreaseOnce: {count}
                    </button>
                </div>
                <p>{count}</p>
            </div>
    </>)
}

export function CounterDelay() {
    const [count,setCount] = useState(0)

    const handleClick = () => {   
        setTimeout(() => {
            setCount(count + 1)
        },2000)
    }
    return (
    <>
            <div id="wrapper">
      
                <div className="Button">
                    <button onClick={handleClick}>
                        CounterDelay: {count}
                    </button>
                </div>
                <p>{count}</p>
            </div>
    </>
    )
}

export function CounterIncrementTwice() {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(count+1)
        setCount(count+1)
    }
    return (
        <>
            <div id="wrapper">
        
                <div className="Button">
                    <button onClick={handleClick}>
                        CounterIncrementTwice: {count}
                    </button>
                </div>
                <p>{count}</p>
            </div>
    
        </>
    )
}

export function CounterIncrementTwoCorrect() {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount((num)=> num + 1)
        setCount((num)=> num + 1)
    }
    return (
        <>
            <div className="Button">
                <button onClick={handleClick}>
                    CounterIncrementTwiceCorrect: {count}
                </button>
            </div>
            <p>{count}</p>
        </>
    )
}