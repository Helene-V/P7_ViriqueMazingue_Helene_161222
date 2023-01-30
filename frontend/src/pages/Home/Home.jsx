import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import { getLocations } from '../../data/DataLocation';

const Home = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        async function getLocationsLoad() {
            const locations = await getLocations();
            setLocations(locations);
        }
        getLocationsLoad();
    }, []);

    return ( 
        <div>       
            <Banner />
            <main className='containerCard'>
                <div>
                    {locations.map((locations) => (
                        <Card key={locations.id} title={locations.title} />
                    ))}
                </div>
            </main>
        </div>

    )
}

export default Home


/*
useEffect(() => {
        getLocations().then((response) => {
            setLocations(response.data);
        });
    }, []);
     */

/*
import React, { useEffect } from 'react';
//import dataLocation from '../../data/dataLocation';
import Data from '../../data/data.json';
import axios from 'axios';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

const Home = () => {

    useEffect(() => {
        axios
        .get('/data.json')
        .then((res) => {
            console.log(res)
            Data(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    //const [data, setData] = useState([]);

    return ( 
        <div>       
            <Banner />
            <main className='containerCard'>
                <Card />
                <div>
                    <ul>
                        {Data.map(data => (
                            <li key={data.id}>{data.title}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>

    )
}

export default Home
*/



/*
function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {axios.get('/data.json')
    .then(() => {
    setData(dataLocation.getData());
    })
  }, [])

    return ( 
        <div>       
            <ul>
                {data.map(data => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
            <Banner />
            <main className='containerCard'>
                <Card />
            </main>
        </div>

    )
}

export default Home
 */