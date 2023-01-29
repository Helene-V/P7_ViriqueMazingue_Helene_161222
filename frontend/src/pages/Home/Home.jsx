import React, { useState,useEffect } from 'react';
import dataLocation from '../../data/dataLocation';
//import axios from 'axios';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataLocation.getData());
    }, [])

    return ( 
        <div>       
            <Banner />
            <main className='containerCard'>
                <Card />
                <div>
                    <ul>
                        {data.map(data => (
                            <li key={data.id}>{data.title}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>

    )
}

export default Home

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