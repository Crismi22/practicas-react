import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dice nuestro equipo:</h1>
      <Testimonio 
      nombre= "LLama Dora"
      lugar="Bahia Blanca"
      imagen="llama"
      cargo="Ingeniera de software"
      empresa="Spotifly"
      testimonio="Estoy feliz de llamar personas para que escuchen Spotifly y recomendar mis playlist favoritas"
      />
      <Testimonio 
      nombre= "Panda Rabit"
      lugar="Neuqúen"
      imagen="panda"
      cargo="Ingeniero de software"
      empresa="Amazing"
      testimonio="Se me hace muy llevadera las jornadas de trabajo con el equipo, sobre todo cuando llevan algo de comida para compartir"
      />
      <Testimonio 
      nombre= "Perez Oso"
      lugar="Merlo"
      imagen="perez"
      cargo="Analista de datos"
      empresa="Pedidos rapidos"
      testimonio="Hace años que estoy acá y cada dia me siento mas comodo. Es como si fuera mi segunda casa, hasta puedo dormir la siesta!"
      />
      </div>
    </div>
  );
}

export default App;
