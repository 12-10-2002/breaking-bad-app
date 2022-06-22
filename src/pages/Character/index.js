import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './styles.scss';

export function Character(){

    const {id} = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function getCharacter() {
            const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
            const data = await response.json();
            console.log(data[0]);
            setCharacter(data[0]);
        }
        getCharacter();
    }, [id])
     
    return(
        <main>
        <div className="character-container">
            <div className="character-aside">
                <div className="character-aside-name">
                    <img src={character?.img} alt={character?.name} />
                </div>
            </div>
            <div className="character-main">
                <div className="character-name">
                    <h1>{character?.name}</h1>
                </div>

                <div className="character-info-title">
                    Birthday
                </div>
                <div className="character-info-content">
                   {character?.birthday}
                </div>

                <div className="character-info-title">
                    Occupation
                </div>
                <div className="character-info-content">
                   {character?.occupation && character?.occupation.map( item => item).join(', ')}
                </div>

                <div className="character-info-title">
                    Nickname
                </div>
                <div className="character-info-content">
                   {character?.nickname}
                </div>

                <div className="character-info-title">
                    Category
                </div>
                <div className="character-info-content">
                   {character?.category}
                </div>
            </div>

        </div>
        </main>
    )
}