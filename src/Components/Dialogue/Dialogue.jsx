import React, { useState } from 'react';
import Container from '@mui/material/Container';
import BotName from './BotName/BotName';
import UserName from './UserName/UserName';
import BotBirthday from './BotBirthday/BotBirthday';

const Dialogue = () => {
  const [name, setName] = useState('');
  const [displayBirthday, setDisplayBirthday] = useState(false);
  const [completedName, setCompletedName] = useState(false);

  return (
    <Container>
      <BotName />
      <UserName
        name={name}
        setName={setName}
        completedName={completedName}
        setCompletedName={setCompletedName}
      />
      <>{completedName && <BotBirthday name={name} />}</>
    </Container>
  );
};

export default Dialogue;
