import React from 'react';
import Container from '@mui/material/Container';
import BotName from './BotName/BotName';
import UserName from './UserName/UserName';

const Dialogue = () => {
  return (
    <Container>
      <BotName />
      <UserName />
    </Container>
  );
};

export default Dialogue;
