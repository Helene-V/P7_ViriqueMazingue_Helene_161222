import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';


function About() {
    return (
        <div>       
            <Banner />
            <main>
                <Collapse />
                <Collapse />
                <Collapse />
                <Collapse />
            </main>
        </div>
    )
}

export default About

//Changer le contenu de la bannière selon la page