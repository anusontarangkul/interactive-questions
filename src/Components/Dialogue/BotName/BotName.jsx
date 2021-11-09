import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const BotName = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        border: '2px black solid',
        maxWidth: '500px',
        borderRadius: '10px',
        alignItems: 'center',
        padding: '10px 10px',
        backgroundColor: '#F9CC72',
      }}
    >
      <Avatar
        sx={{
          marginRight: '20px',
          marginLeft: '5px',
          fontSize: '30px',
          background: 'carol',
          height: '50px',
          width: '50px',
        }}
      >
        🤖
      </Avatar>
      <Typography sx={{ fontSize: '22px' }}>
        Welcome to Tapply. Let’s start off by introducing ourselves. I’m Tapply
        Bot. <strong>What's your name?</strong>
      </Typography>
    </Box>
  );
};

export default BotName;
