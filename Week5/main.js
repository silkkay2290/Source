import { useState } from "react";

let arr =[1,2,3,4,5];
let react_comps = arr.map(x => <p key={x}>{x} th componentn</p>) 
// 5 paragrah 1-5th component
//key property-unqiue identifier
//(x,i) to pass in each index of the value(for non-unqiue)

const [inputState, setInputState] = useState("");
const onChange = (e) => {
    setInputState(e.target.value);
}

