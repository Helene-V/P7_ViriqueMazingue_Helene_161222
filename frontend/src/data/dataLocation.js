const data = require('../data/data.json');

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
};
