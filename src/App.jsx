import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([])
 
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            let existe = characters.find((character)=> character.id === data.id)
            if (!existe) {  
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
 
   const onClose = (id) => {
      const filtrados = characters.filter((characters)=>characters.id != id) 
      setCharacters(filtrados)
   }
 
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards onClose={onClose} characters={characters}/>
      </div>
   );
}

export default App;
