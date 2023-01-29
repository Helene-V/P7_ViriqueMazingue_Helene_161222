import React from 'react';
import '../Card/Card.css';


function Card() {

    return (
        <article>
        </article>
    )
}

export default Card

// Placer le titre en bas à gauche CSS et contenu Json
// Ajouter le contenu dans les card (6 visibles sur Figma)
// Guidelines : pas de warning dans la console 


/*
function Card() {

    const [data, setData] = useState({})
    const params = useParams();
    console.log(params);

    const { id, cover, title } = data

    return (
        <article>{id}
            <img src={cover} alt='Img' />
            <h2>{title}</h2>
        </article>
    )
}

export default Card
*/

/*
function Card() {

state = {accomodations: []}

componentDiMount() => {
    axios.get('data.json')
        .then(res => {
            const accomodations = res.data;
            this.setState({ accomodations })
        })
}

render() {

    return (
        <article>
            {this.sate.accommodations.map(accomodation => 
                <li key={accomodation.id}>{accomodation.title}</li>
                )}
        </article>
    )
}}

export default Card */

/*
function Card({data}) {


    return (
        <article>
            <Router key={data.map(data => 
                <li key={data.id}>{data.title}</li>
                )}/>
        </article>
    )
}
*/

/*
    return (
        <article>
            <NavLink to={`/accomodation/${this.data.id}`}>
            <h2>{this.data.title}</h2>
            </NavLink>
        </article>
    )
*/