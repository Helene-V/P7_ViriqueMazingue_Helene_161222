import React, { useState } from 'react';
import about_arrow from '../../assets/about_arrow.png';
import '../Collapse/Collapse.css';

function Collapse(data) {
    const [openCollapse, setOpenCollapse] = useState(false);
    const title = data.title
    const description = data.description

    return(
        <div>
            <div>
                <h2>{title}</h2>
                <span onClick={() => setOpenCollapse(!openCollapse)}>
                    <img src={about_arrow} alt="onglet déroulant" />
                </span>
            </div>
            {
                openCollapse && <div>{description}</div>
            }
        </div>
    )
}

export default Collapse;