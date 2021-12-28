import React, { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { getPlacesData } from './api';

import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {
  const [ places, setPlaces ] = useState([]);
  const [ childClicked, setChildClicked ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false);

  const [ coordinates, setCoordinates ] = useState({});
  const [ bounds, setBounds ] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() =>{
    setIsLoading(true);
    getPlacesData(bounds?.sw, bounds?.ne)
    .then((data) => {
      setPlaces(data)
      setIsLoading(false);
    })
  }, [coordinates, bounds])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places}
          childClicked={childClicked}
          isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked} 
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
