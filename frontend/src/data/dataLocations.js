import Locations from './data.json';

// Création de deux objets pour utiliser la data provenant de data.json

// Récupération de toute la data utile pour la page Home
const getLocations = () => {
  return Locations
};

// Récupération data par id utile pour la page Location - opérateur d'égalité stricte
const getLocationsById = (id) => {
  return Locations.find(location => location.id === id);
};

// Retourne deux objets
export const dataLocations =
  { getLocations, getLocationsById };