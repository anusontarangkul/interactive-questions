import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Typography';

const Header = () => {
  return (
    <Container
      sx={{
        margin: '30px auto',
        border: '2px solid black',
        maxWidth: '700px',
        backgroundColor: 'white',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          fontSize: 50,
          padding: 1.5,
          fontWeight: 0.5,
        }}
      >
        Hello 👋, I’m Tapply Bot 🤖
      </Typography>
    </Container>
  );
};

export default Header;
