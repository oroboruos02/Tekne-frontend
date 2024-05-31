// StarRating.jsx
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Stack } from '@mui/material';


const Qualification = (props) => {
  
  let { value } = props;
  value = parseFloat(value)
  
  return (
      <Stack spacing={1}>
        <Rating name="half-rating" value={value} precision={0.5} readOnly/>
      </Stack>
  );
}

export default Qualification;