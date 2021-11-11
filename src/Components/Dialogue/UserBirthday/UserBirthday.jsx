import React, { useState } from 'react';
import './UserBirthday.css';
import moment from 'moment';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

const UserBirthday = ({ completedBirthday, setCompletedBirthday, initial }) => {
  const [value, setValue] = React.useState(null);

  const submitDateHandler = () => {
    const bday = moment(value).format('MMMM Do, YYYY');
    if (bday === 'Invalid date') {
      return;
    }
    setValue(bday);

    setCompletedBirthday(true);
  };
  if (completedBirthday) {
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
          My birthday is <strong>{value}</strong>.
        </Typography>
        <Avatar
          sx={{
            height: '50px',
            width: '50px',
            margin: '6.5px 5px 6.5px auto',
          }}
          data-testid='initials-avatar'
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
        marginBottom: '35px',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Enter Birthday Here..'
          maxDate={new Date()}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          data-testid='date-test'
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
