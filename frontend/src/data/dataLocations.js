import Locations from './data.json';

// Récupération de toute la data
const getLocations = () => {
  return Locations
};

// Récupération data par id
const getLocationsById = (id) => {
  return Locations.find(location => location.id === id);
};

// Retourne deux objets
export const dataLocations =
  { getLocations, getLocationsById };