import React,{ useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';

//Componente: function, bloco isolado de HTML, CSS e JS 
//Propriedade: props, informações q passa do componente PAI para o componente FILHO
//Estado: informações mantidas pelo componente

//rodar front 'yarn start'

function App() {
  //const [age, setAge] = useState('');
  // const [longitude, setLongitude] = useState('');

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [devs, setDevs] = useState([]);

  useEffect(() => { 
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(e){
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
    })
    setGithubUsername('');
    setTechs('');
    setDevs([...devs, response.data]);

    console.log(response.data)
  }  

  return(
  <div className="app">
    <aside className="aside"> {/* TAG para criar uma SIDEBAR */}
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário de Github</label>
          <input 
          name="github_username" 
          id="github_username" 
          required 
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
          name="techs" 
          id="techs" 
          required 
          value={techs}
          onChange={e => setTechs(e.target.value)}/* o onChange pega o valor do input quando o usuario digitar a informaçao (É A FORMA USADA NO REACTJS)*/
          />
        </div>

        {/* <div className="input-group">
          <div className="input-block">
            <label htmlFor="age">Idade</label>
            <input 
            type="number" 
            name="age" 
            id="age" 
            required 
            value={age}
            onChange={e => setAge(e.target.value)} 
            />
          </div>
        </div> */}
     
        <br />
        <button type="submit">Salvar</button>
      </form>
    </aside>

    <main>
        <ul>
          {devs.map(dev => {
            return(
              <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name} />
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
          </li>
            )
          })}          
        </ul>
    </main>
  </div>
  );
}

export default App;
