import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Pronouns = ({ emoji, text1, text2, setPronoun, pronoun }) => {
  const handlePronounSubmit = () => {
    setPronoun({ emoji, text1, text2 });
  };
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '5px',
        marginRight: '10px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        onClick={handlePronounSubmit}
        sx={{
          border:
            pronoun.emoji === emoji ? 'yellow 3px solid' : 'black 1px solid',
          height: '50px',
          width: '65px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          fontSize: '30px',
          marginBottom: '3px',
          backgroundColor: '#8cb4f3',
          cursor: 'pointer',
        }}
      >
        {emoji}
      </Box>
      <Typography>{text1}</Typography>
      <Typography>{text2}</Typography>
    </Box>
  );
};

export default Pronouns;
