import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import data from '../data/data.json'

function Router() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json")
      .then((res) => {
          setData(res.data);
        },
      )
  }, [])

    return (
      <div>
      <ul>
        {data.map(data => (
          <li key={data.id}>
            {data.title}
          </li>
        ))}
      </ul>
      </div>
    );
  }

export default Router


// https://reactjs.org/docs/faq-ajax.html

/*
const data = () => {
    axios
        .get('http://localhost:3000/accueil/')
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        data()
    }, []);

    return (
        <article>
        </article>
    ) */



//.get('http://localhost:3000/accueil/{$`id`})

/*        <article>
            {this.sate.data.map( data => 
                <li key={data.id}>{data.title}</li>
                )}
        </article> */

/*
export default axios.create({
    baseURL: `http://localhost:3000/accueil/`
});
*/

/*

export default function Router() {

const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('../data.json')
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
            console.log(err)
            })     
        }, []);

    return (
        <li>{data.map}
        </li>
    );
} */

/*
function Router() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/data.json")
      .then((res) => {
          setIsLoaded(true);
          setItems(res.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default Router
*/