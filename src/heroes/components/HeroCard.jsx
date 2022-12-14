import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>)
    return <p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImg = `/assets/heroes/${id}.jpg`

    // const charactersByHero = (<p>{characters}</p>)

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImg} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">

                            <h4 className="card-title">{superhero}</h4>


                            <CharactersByHero alter_ego={alter_ego} characters={characters} />


                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
