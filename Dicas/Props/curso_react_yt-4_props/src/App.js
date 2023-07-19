import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
    <h1>Exemploo de Props</h1>
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
      />
    </div>
  );
}

export default App;
