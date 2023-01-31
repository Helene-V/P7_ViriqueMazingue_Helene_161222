import axios from 'axios';
import data from '../data/data.json';


// Récupére la data depuis le fichier json
axios.get('/data.json').then(res => {
  return data
});

// BaseURL
const API_URL = 'http://localhost:3000/';

// Récupére tous les logements
export async function getLocations() { 
  try {
    const { data } = await axios.get(`${API_URL}locations`);
    return data;
  } catch (err) {
    console.log(err)
  }
}

// Récupére un logement selon l'id
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

const getData = () => { 
  return axios
    .get("/data/data.json")
    .then((res) => (res.data))
    .catch((err) => console.log(err));
}


export default axios.create({
  baseURL: "http://localhost:3000/data",
  headers: {
    "Content-type": "application/json"
  }
});

//axios.get("../data/data.json");

axios.get('../data/data.json')
  .then(function (res) {
    return data
  })
  .catch(function (error) {

    console.log(error);
  })
*/

/*
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

*/

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