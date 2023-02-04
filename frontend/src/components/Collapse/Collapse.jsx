import React, { useState } from 'react';
import about_arrow from '../../assets/about_arrow.png';
import '../Collapse/Collapse.css';

function Collapse(data) {
    const [openCollapse, setOpenCollapse] = useState(false);
    const [rotate, setRotate] = useState(true);
    const title = data.title
    const description = data.description


    return(
        <div className='collapseContainer'>
            <div className='collapseRoll'>
                <h1 className='collapseTitle'>{title}</h1>
                <span onClick={() => setOpenCollapse(!openCollapse)}>
                    <img src={about_arrow} alt="onglet déroulant"
                        onClick={() => setRotate(!rotate)}
                        style={{
                            transition: "transform .3s",
                            transform: `rotate(${rotate ? 0 : 180}deg)`}} />
                </span>
            </div>
            {
               openCollapse && <div className='collapseDescription'>{description}</div>
            }
        </div>
    )
}

export default Collapse;

// Penser au rotate pour le collapse 