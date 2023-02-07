import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import { dataLocations } from '../../data/dataLocations';
import '../Location/Location.css';

function Location() {

    let {id} = useParams()
    const location = dataLocations.getLocationsById(id)
    console.log(location)


    return ( 
        <div>       
            <main>
                <Slideshow image={location.pictures} />
            </main>
        </div>

    )
}

export default Location