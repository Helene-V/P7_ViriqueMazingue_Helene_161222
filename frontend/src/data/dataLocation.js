import axios from 'axios';
import data from '../data/data.json';

axios.get('/data.json')
        .then((res) => {
            console.log(res)
            data(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

const API_URL = 'http://localhost:3000/';

export async function getLocations() { 
  try {
    const { data } = await axios.get(`${API_URL}locations`);
    return data;
  } catch (err) {
    console.log(err)
  }
}

export async function getLocationsById(id) { 
  try {
    const { data } = await axios.get(`${API_URL}locations/${id}`);
    return data;
  } catch (err) {
    console.log(err)
  }
}

// https://www.digitalocean.com/community/tutorials/react-axios-react-fr
// https://axios-http.com/fr/docs/example
// https://github.com/axios/axios#example


/*
const data = require('../data/data.json');

const API_URL = '/data.json';

// Test récupération toute la data
const getData = () => {
  return data
};

// Test récupération data par id
const findById = id => {
  return data.find(location => location.id === id);
}

// Retourne deux objets
export default function dataLocation() {
  return { getData, findById }
}; */