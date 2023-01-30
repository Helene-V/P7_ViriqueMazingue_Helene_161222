import axios from 'axios';
//import data from '../../data/data.json';
const API_URL = 'data.json';

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