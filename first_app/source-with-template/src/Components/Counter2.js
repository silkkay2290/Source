import React, { useState } from "react";

const Counter2 = () => {
    const [count, setCount] = useState(0);
    const [str, setStr] = useState(false);
    const changeString = () => {
        if (str === false){
            setStr(true);
        }
        else if(str === true) {
            setStr(false);
        }
    }
    return (
        <div>
            <h1> Counter: {count} </h1>
            <h1> String: {console.log(str)} </h1>
            <button onClick={changeString}> Change String</button> 
            <button onClick={() =>{ //add arrow function to use onClick to alter state
                setCount(count + 1);
            }}>Increase</button>
            <button onClick={() =>{
                setCount(count - 1);
            }}>Decrease</button>
            <button onClick={()=>{
                console.log('Hello World')
            }}>Print Hello World</button>
            <button onClick={() => {
                setCount(0);
            }}>Clear Count</button>
            <button onClick={() => {
                setCount(count + 100)
            }}> Add 100</button>
        </div>
    )
};
export default Counter2;