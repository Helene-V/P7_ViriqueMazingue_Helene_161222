import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import { dataLocations } from '../../data/dataLocations';

function Home() {

    const [Locations, setLocations] = useState([]);

useEffect(() => {
    
    setLocations(dataLocations.getLocations());
    
  }, [])

    return ( 
        <div>       
            <Banner />
            <main className='containerCard'>
                <div>{Locations.map((location) => {
                    return (
                        <article key={location.id}>
                            <Link to={`/location/${location.id}`}>
                                <Card title={location.title} />
                            </Link>
                        </article>
                    )
                })}
                </div>
            </main>
        </div>

    )
}

export default Home


//https://reactrouter.com/en/main/components/link


/*
    useEffect(() => {
        dataLocations.getLocations().then((res) => {
            setLocations(res.Locations);
        });
    }, []); */

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