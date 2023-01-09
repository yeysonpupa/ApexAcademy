import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FFEC00', background: '#2C2C2B', borderBottomLeftRadius: '0px', width: '200px', height: '100px', cursor: 'pointer', gap: '47px' } : { background: '#2C2C2B', borderBottomLeftRadius: '0px', width: '200px', height: '100px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="white" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;