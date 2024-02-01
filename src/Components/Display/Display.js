import './Display.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Display(props){ 
    const navigate = useNavigate()
    async function details(id){
       try{
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
        const element = response.data.filter((i=>(parseInt(i.show.id)===parseInt(id))))
        console.log(element)
        navigate('/movie',{state:{element}})
       }catch(err){
        console.log(err)
       }
    }
    return(  
        <>
        <div className="movieblock">
        <img src={props.image} alt="movie" /> 
        <hr /> 
        <div>
        <h2>{props.name}</h2>
        <div>
        {/* <p>{props.type},{props.lang}</p> */}
        {props.genres.map(((i,index)=> index===0 ? <span>{i} </span> : <span>, {i}</span>))}
        </div>
         </div> 
       
        <button onClick={()=>details(props.id)}>Know More</button>
        </div></>
    )
} 