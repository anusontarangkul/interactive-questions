import React, { useState } from 'react';
import Container from '@mui/material/Container';
import BotName from './BotName/BotName';
import UserName from './UserName/UserName';
import BotBirthday from './BotBirthday/BotBirthday';
import UserBirthday from './UserBirthday/UserBirthday';
import BotPronouns from './BotPronouns/BotPronouns';
import UserPronouns from './UserPronouns/UserPronouns';

const Dialogue = () => {
  const [name, setName] = useState('');
  const [displayBirthday, setDisplayBirthday] = useState(false);
  const [completedName, setCompletedName] = useState(false);
  const [completedBirthday, setCompletedBirthday] = useState(false);
  const [initial, setInitial] = useState('');

  return (
    <Container>
      <BotName />
      <UserName
        name={name}
        setName={setName}
        completedName={completedName}
        setCompletedName={setCompletedName}
        initial={initial}
        setInitial={setInitial}
      />
      <>
        {completedName && <BotBirthday name={name} />}
        {completedName && (
          <UserBirthday
            completedBirthday={completedBirthday}
            setCompletedBirthday={setCompletedBirthday}
            initial={initial}
          />
        )}
      </>
      {completedBirthday && <BotPronouns />}
      {completedBirthday && <UserPronouns initial={initial} />}
    </Container>
  );
};

export default Dialogue;
