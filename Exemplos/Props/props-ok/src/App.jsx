import Pessoa from "./components/Pessoa";

export default function App() {

  return (
    <>
      <h1>Exemplo de props</h1>
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
      />
    </>
  )
}

