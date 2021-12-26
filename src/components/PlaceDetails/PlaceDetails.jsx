import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';
const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
}

export default PlaceDetails;
