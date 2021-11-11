import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Pronouns = ({ emoji, text1, text2 }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '5px',
        marginRight: '10px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        // marginLeft: emoji === '😊' ? '-4px' : '0px',
      }}
    >
      <Box
        sx={{
          border: 'black 1px solid',
          height: '50px',
          width: '65px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          fontSize: '30px',
          marginBottom: '3px',
          //   marginRight: emoji === '👨' ? '6px' : '0px',
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
