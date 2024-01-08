import { useState } from "react"

const Home = ()=>{
    const [clickCount , setCount] = useState(0)
    function increaseCount(){
        setCount((p)=>p+1)
    }

    return <div>
        <h1>The button has been clicked {clickCount} Times</h1>
        <h3>Click the counter below to increase the count</h3>
        <button type='button' onClick={increaseCount}>Click Here!</button>
    </div>
}

export default Home