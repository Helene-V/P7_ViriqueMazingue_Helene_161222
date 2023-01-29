import React, { useState, useEffect } from "react";
import axios from "axios";

const DataLocation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const AllLocation = () => {
      return data
    };

  const LocationById = id => {
    return data.find(item => item.id === id)
  };

  return { AllLocation, LocationById }
  
};

export default DataLocation;


/*  
const DataLocationById  = () => {
    const [dataId, setDataId] = useState([]);

    useEffect(() => {
    axios.get("/data.json")
        .then((res) => {
        console.log(res)
        setDataId(res.data.filter(dataId => dataId.id === 'location_id'))
    })
}, [])
*/