import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Router = () => {
      useEffect(() => {axios.get('/data.json').then((res) => {
            setData(res.data)
        })
    }, [])

const [data, setData] = useState([]);



    return (
  
                <div>
            <ul>
                {data.map((data) => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
            </div>

    )
}

export default Router

/* Dernier test qui fonctionne pour récupérer la data, pas de récupération de dataId possible avec ce code
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Router() {
    const [data, setData] = useState([])
    const [dataId, setDataId] = useState([])

    useEffect(() => {
        axios.get('/data.json').then((res) => {
            setData(res.data)
            setDataId(
              res.data.filter((dataId) => dataId.id === 'accomodation_id')
            )
        })
    }, [])

    return (
        <div>
            <ul>
                {data.map((data) => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
            <div>
            <ul>
                {dataId.map((dataId) => (
                    <li key={dataId.id}>{dataId.title}</li>
                ))}
            </ul>
        </div>
        </div>

    )
}

export default Router
*/

// https://reactjs.org/docs/faq-ajax.html

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

/*
function nouveauComponent({data, dataId}) {
  return (
    <div>
      <ul>
        {data.map(data => (
          <li key={data.id}>
            {data.title}
          </li>
        ))}
      </ul>
      <ul>
        {dataId.map(data => (
          <li key={dataId}>
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

*/

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Router() {
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);

  useEffect(() => {
    axios.get("/data.json")
      .then((res) => {
          setData(res.data);
          setDataId(res.data.filter(dataId => dataId.id === 'accomodation_id'))
        },
      )
  }, [])


    return (
      <div>
        <Router data={data} dataId={dataId} />
      </div>
    );
  }


export default Router
 */
