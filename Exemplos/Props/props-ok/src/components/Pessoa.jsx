function Pessoa({ nome, idade, profissao }) {// nome, idade, profissao e idade são props
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default Pessoa;
