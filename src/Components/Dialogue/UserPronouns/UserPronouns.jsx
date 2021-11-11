import React, { useState } from 'react';

import Pronouns from './Pronouns/Pronouns';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

const UserPronouns = ({ initial }) => {
  const [pronoun, setPronoun] = useState({ emoji: '', text1: ' ', text2: '' });
  const [completedPronoun, setCompletedPronoun] = useState(false);

  const pronounOptions = [
    { emoji: '👨', text1: 'He / ', text2: 'Him' },
    { emoji: '👩', text1: 'She / ', text2: 'Her' },
    { emoji: '😊', text1: 'They / ', text2: 'Them' },
  ];
  const submitGenderHandler = () => {
    if (pronoun === '') return;
    console.log(pronoun);
    setCompletedPronoun(true);
  };
  if (completedPronoun) {
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
        <Typography sx={{ fontSize: '22px', marginLeft: '5px' }}>
          My pronouns are{' '}
          <strong>{`${pronoun.text1} ${pronoun.text2} ${pronoun.emoji}`}</strong>
          .
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
        marginBottom: '35px',
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
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          marginLeft: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: '22px', marginLeft: '5px', marginRight: '20px' }}
          >
            Select One
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {pronounOptions.map((option) => (
              <Pronouns
                emoji={option.emoji}
                text1={option.text1}
                text2={option.text2}
                key={option.emoji}
                setPronoun={setPronoun}
                pronoun={pronoun}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Avatar
        onClick={submitGenderHandler}
        sx={{
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: '10px',
          height: '50px',
          width: '50px',
          fontSize: '30px',
        }}
        data-testid='name-gender-avatar'
      >
        <DoubleArrowOutlinedIcon />
      </Avatar>
    </Box>
  );
};

export default UserPronouns;
