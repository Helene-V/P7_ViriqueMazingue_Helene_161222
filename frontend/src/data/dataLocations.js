import Locations from './data.json';

// Création de deux fonctions en js pour utiliser la data provenant de data.json

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