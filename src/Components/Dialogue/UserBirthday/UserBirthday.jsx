import React, { useState } from 'react';
import './UserBirthday.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

const UserBirthday = () => {
  const [value, setValue] = React.useState(null);

  const submitDateHandler = () => {};
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Enter Birthday Here..'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          InputProps={{ className: 'textfield__border' }}
          renderInput={(params) => (
            <TextField
              InputLabelProps={{
                className: 'textfield__label',
              }}
              sx={{
                width: '300px',
                margin: '5px 15px 5px 5px',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ': {
                  borderColor: 'white !important',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white !important',
                },
              }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
      <Avatar
        onClick={submitDateHandler}
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

export default UserBirthday;
