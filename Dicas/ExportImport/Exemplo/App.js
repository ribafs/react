import './Estilo.css';
import {Evento, Segundo, Terceiro} from './components/Evento';

export default function MeuEvento() {
  return (
    <div>
      <h1 className="centro cor">Olá mundo2!</h1>
        <Evento />
        <Segundo />
        <Terceiro />
    </div>
  );
}

