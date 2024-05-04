import React from 'react';

import "./card.css";
import { useState } from 'react';

const Flip2 = () => {
    const [flip, setFlip] = useState("controlflip");
    const hanldeflip =()=>{
        setFlip("flipPart1")

    }
    return (
        <section>
            <h1>Hello</h1>
            <div id='FlipCard' className=''>
                <div className={`${flip}`}>
                    <h1>Hello</h1>

                </div>
                <div onMouseEnter={hanldeflip} onMouseLeave={()=> setFlip("controlflip")} className='flipPart2'>
                    <h1>Bye</h1>
                </div>

            </div>
        </section>
    );
};

export default Flip2;