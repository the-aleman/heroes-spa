import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();
    const hero = getHeroById( id );

    if ( !hero ) {
        return <Navigate to="/"/>;
    }
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `../assets/heroes/${ id }.jpg` }
                    alt={ hero.superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
                    <li className="list-group-item"><b>First appearance: </b>{ hero.first_appearance }</li>
                </ul>
                <h5>Characters</h5>
                <p>{ hero.characters }</p>
                <button
                    className="btn btn-outline-info"
                    onClick={ () => window.history.back() }
                >
                    Regresar
                </button>
            </div> 

        </div>
    )
}