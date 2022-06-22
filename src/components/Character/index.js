import { Link } from "react-router-dom";

import './styles.scss';

export function Character({id, name, image}){
  
    return(
        <article className="card">
            
              <Link to={`character/${id}`}>
                <div
                   className="card-image"
                   style={{
                      backgroundImage: `url(${image})`
                   }}
                >
                </div>
                <div className="card-title">{name}</div>
              </Link>
          </article>
    )
}