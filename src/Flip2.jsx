import React from 'react';

import "./card.css";
import { useState } from 'react';

const Flip2 = () => {
    const [flip, setFlip] = useState("controlflip");
    const hanldeflipfront =()=>{
        document.getElementById("flipPart2").style.transform ="rotateY(180deg)"
        document.getElementById("flipPart1").style.transform ="rotateY(0deg)"
        // setFlip("flipPart1")
}
const hanldeflipback =()=>{
    setFlip("controlflip")
    // document.getElementById("flipPart1").style.transform ="rotateY(-180deg)"
    document.getElementById("flipPart1").style.transform ="rotateY(180deg)"
    document.getElementById("flipPart2").style.transform ="rotateY(0deg)"
}
    return (
        <section>
            <h1>Hello</h1>
            <div id='FlipCard' className=''>
                <div onClick={hanldeflipback}  id={`flipPart1`}>
                    <h1>Hello</h1>

                </div>
                <div onClick={hanldeflipfront} id='flipPart2'>
                    <h1>Bye</h1>
                </div>

            </div>
        </section>
    );
};

export default Flip2;