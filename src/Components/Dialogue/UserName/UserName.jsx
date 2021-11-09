import React from 'react';

import './UserName.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

const UserName = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        border: '2px black solid',
        maxWidth: '500px',
        borderRadius: '10px',
        alignItems: 'center',
        padding: '10px 10px',
        backgroundColor: '#4180ec',
        color: 'white',
      }}
    >
      <TextField
        id='outlined-basic'
        label='Enter Name Here..'
        variant='outlined'
        required
        autoComplete='off'
        className='text-root'
        InputLabelProps={{
          className: 'textfield__label',
        }}
        inputProps={{
          className: 'textfield__border',
        }}
        sx={{
          width: '400px',
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
        }}
      />
      <DoubleArrowOutlinedIcon></DoubleArrowOutlinedIcon>
    </Box>
  );
};

export default UserName;
