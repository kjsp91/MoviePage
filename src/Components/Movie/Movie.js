import { useLocation } from "react-router-dom"
import './Movie.css'
export default function Movie(){
    const location = useLocation()
    console.log(location)
    return(
        <>
        <div className="eachmovie">
        <img src={location.state.element[0].show.image.original} alt="movie" />
        <p><b className="boldname">{location.state.element[0].show.name}</b>{location.state.element[0].show.summary.slice(18,location.state.element[0].show.summary.length-4)}</p>
        <span>Rating : {location.state.element[0].show.rating.average}</span>
        </div> <br /> <br />
        <div>
            <h2>Official Site : <a href={location.state.element[0].show.officialSite}>{location.state.element[0].show.officialSite}</a></h2>
            <h2>Know more about "{location.state.element[0].show.name}"  in <a href={location.state.element[0].show.url}>{location.state.element[0].show.url}</a></h2>
        </div>
        </>
    )
} 