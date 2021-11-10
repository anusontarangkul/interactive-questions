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
        marginTop: '40px',
        marginLeft: 'auto',
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
          // padding: 'px',

          margin: '5px 15px 5px 5px',
          width: '400px',

          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            '& label.Mui-focused': {
              borderColor: 'white',
            },
          },
        }}
      />
      <Avatar
        sx={{
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: '10px',
          height: '50px',
          width: '50px',
          fontSize: '30px',
        }}
      >
        <DoubleArrowOutlinedIcon />
      </Avatar>
    </Box>
  );
};

export default UserName;
