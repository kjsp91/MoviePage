import './NavBar.css'
import { Routes,Route } from 'react-router-dom';
import Movie from '../Movie/Movie';
import AllMovies from '../AllMovies/AllMovies'
export default function NavBar(){
    return(
        <> 
        <div className="nav">
        <h1>Movies Coaster</h1>
        </div>
           <Routes>
           <Route exact path="/" element = {<AllMovies/>}/>
           <Route exact path="/movie" element = {<Movie/>}/>
           </Routes>
           </>

    )
}