import { useEffect, useState } from 'react'
import './AllMovies.css'
import Display from '../Display/Display'
import axios from 'axios'
export default function AllMovies(){
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
                console.log(response.data)
                setData(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    return(
        <div className="movies">
        <h2 className='head'>Get All The Trending Movies Here</h2>
        <div className='moviesdisplay'>
          {data.map((i,index) =>{
            return(
                i.show.image!=null && <Display key = {index} id={i.show.id} image = {i.show.image.original} name={i.show.name} type={i.show.type} lang={i.show.language} genres = {i.show.genres}/>  
            )
          })}
        </div>
        </div>
    )
}