import React from 'react';

type GreetingsProps = {
  name: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div>Hello, {name}</div>
);

