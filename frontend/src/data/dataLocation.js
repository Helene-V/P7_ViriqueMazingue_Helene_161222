const data = require('../data/data.json');

const getData = () => {
  return data
};

const findById = id => {
  return data.find(location => location.id === id);
}

export default function dataLocation() {
  return { getData, findById }
};

