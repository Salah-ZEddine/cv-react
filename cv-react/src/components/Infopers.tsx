import Profile from "./assets/profilepic.jpg"

type Cvprops ={
    name: string
    bdate: string
    bloca: string
    sf: string
}
function InfoPers(props: Cvprops) {
    return (
        <div className="card">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <img className="card-pic" alt="Profile picture" src={Profile}></img>
            <h3 className="name">{props.name}</h3>
            <ul className="infos">
                <li>Date de naissance: {props.bdate}</li>
                <li>Lieu de naissance: {props.bloca}</li>
                <li>Situation Familiale: {props.sf}</li>
            </ul>
            <a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin-square" id="linkedin" ></i></a>
            <a href="https://www.github.com" target="_blank"><i className="fa fa-github-square"id="github"></i></a>
            <a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter-square"id="twitter"></i></a>
            <a href="mailto:salahexample@gmail.com" target="_blank"><i className="material-icons" id="mail">mail</i></a>

        </div>
    );
}
export default InfoPers