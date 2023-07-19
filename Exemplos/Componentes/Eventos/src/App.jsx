function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default function App() {

  return (
    <>
        <h1>Conponente com evento</h1>
        <MyButton />
    </>
  )
}

