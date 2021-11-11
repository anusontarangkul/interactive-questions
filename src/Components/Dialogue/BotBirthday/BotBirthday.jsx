import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';

const BotBirthday = ({ name }) => {
  return (
    <Box
      sx={{
        marginTop: '35px',
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
      <Typography sx={{ fontSize: '22px' }} data-testid='bot-birthday'>
        Nice to meet you <strong>{name}</strong>! Since this is your first time
        meeting me, let's say my birthday is today,{' '}
        {moment().format('MMMM Do, YYYY')}.{' '}
        <strong>When's your birthday?</strong>
      </Typography>
    </Box>
  );
};

export default BotBirthday;
