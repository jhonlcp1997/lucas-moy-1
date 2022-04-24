// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';

function App() {

  const Persona = {
    nombre: "Jhon",
    apellido: "Cruz",
  }

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportarImg = function(evento){
    alert("EXPORTAR");
    html2canvas(document.querySelector("#meme")).then( canvas =>{
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
      document.body.appendChild(canvas)
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="futurama">futurama</option>
        <option value ="history">History chanel</option>
        <option value="tom">tom y jerry</option>
        <option value="bob_esponja">Bob Esponja</option>
        <option value="philoso">philosoraptor</option>
      </select>
      <br/>
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1..."/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2..."/><br/>
      <button onClick={onClickExportarImg}>Exportar</button>

      <div className='print' id='meme'>
        <span>{linea1}</span>
        <span>{linea2}</span> <br/>
        <img src={"/imagenes/"+imagen+".jpg"} />
      </div><br/>
      <hr/>
      <div className='persona'>
        <ul>
          <li>Nombre: {Persona.nombre}</li>
          <li>Apellido: {Persona.apellido}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
