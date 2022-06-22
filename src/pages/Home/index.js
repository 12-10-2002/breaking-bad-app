import { useEffect, useState } from "react"
import { Character } from "../../components/Character";

import './styles.scss';

export function Home(){

    const [characters, setCharacters] = useState([]);

    useEffect (() => {
        async function getCharacters(){
            const response =  await fetch('https://www.breakingbadapi.com/api/characters')
            const data = await response.json();
            console.log(data);
            setCharacters(data);
        }
        getCharacters()

    }, [])
    
    
    return(
      <main className="home">
        <div className="container">
        {characters.map( character =>
          <Character
          key={character.char_id}
            id={character.char_id}
             name={character.name}
             image={character.img}
          />
            )}

        </div>
      </main>
    )
}