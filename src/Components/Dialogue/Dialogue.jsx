import React, { useState } from 'react';
import Container from '@mui/material/Container';
import BotName from './BotName/BotName';
import UserName from './UserName/UserName';

const Dialogue = () => {
  const [name, setName] = useState('');
  return (
    <Container>
      <BotName />
      <UserName name={name} setName={setName} />
    </Container>
  );
};

export default Dialogue;
