import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Contadores, atualizam separadamente<br/>usando useState</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
