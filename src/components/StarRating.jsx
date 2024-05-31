import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { Stack } from '@mui/material';
import axios from 'axios';

const StarRating = ({ company, client }) => {
  const [value, setValue] = useState(0);

  // Leer calificación desde localStorage al montar el componente
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${client}-${company}`);
    if (savedRating) {
      setValue(parseFloat(savedRating));
    }
  }, [client, company]);

  const addRating = async (newValue) => {
    try {
      const response = await axios.post('http://localhost:3000/rate-company', { clientId: client, companyId: company, value: newValue });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRating = (e, newValue) => {
    setValue(newValue);
    localStorage.setItem(`rating-${client}-${company}`, newValue);
    addRating(newValue);
  }

  return (
    <Stack spacing={1}>
      <Rating name="half-rating" onChange={handleRating} value={value} precision={0.5} />
    </Stack>
  );
}

export default StarRating;