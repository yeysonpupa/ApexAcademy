import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="30px" bgcolor="#2C2C2B" borderTop="2px solid #FFEC00">
    <Stack gap="40px" mt="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '55px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '20px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color="white">© 2023<br />Yeyson Esteban Pulido Parra</Typography>
  </Box>
);

export default Footer;