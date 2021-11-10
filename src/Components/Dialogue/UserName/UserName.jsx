import React, { useState } from 'react';

import './UserName.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

const UserName = ({ name, setName }) => {
  const [completedName, setCompletedName] = useState(false);
  const [initial, setInitial] = useState('');

  const submitNameHandler = (e) => {
    if (name.length === 0) return;
    setInitial(name[0]);
    setCompletedName(true);
  };

  const nameChangeHandler = (e) => {
    let updatedName = e.target.value;
    setName(updatedName);
  };
  if (completedName) {
    return (
      <Box
        sx={{
          marginTop: '35px',
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
        <Typography sx={{ fontSize: '22px', marginLeft: '5px' }}>
          Hi Tapply Bot! My name is <strong>{name}</strong>.
        </Typography>
        <Avatar
          sx={{
            height: '50px',
            width: '50px',
            margin: '6.5px 5px 6.5px auto',
          }}
        >
          {initial}
        </Avatar>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        marginTop: '35px',
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
        onChange={nameChangeHandler}
        id='outlined-basic'
        label='Enter Name Here..'
        // variant='outlined'
        value={name}
        required
        autoComplete='off'
        className='text-root'
        InputLabelProps={{
          className: 'textfield__label',
        }}
        inputProps={{
          className: 'textfield__border',
          'data-testid': 'name-input',
        }}
        sx={{
          margin: '5px 15px 5px 5px',
          width: '400px',
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ': {
            borderColor: 'white !important',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white !important',
          },
        }}
      />
      <Avatar
        onClick={submitNameHandler}
        sx={{
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: '10px',
          height: '50px',
          width: '50px',
          fontSize: '30px',
        }}
        data-testid='name-submit-avatar'
      >
        <DoubleArrowOutlinedIcon />
      </Avatar>
    </Box>
  );
};

export default UserName;
