function MyButton() {
  return (
    <button>Botão dentro/nested do de cima</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Componente Nested</h1>
      <MyButton />
    </div>
  );
}
