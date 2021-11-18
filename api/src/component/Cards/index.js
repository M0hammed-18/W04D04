import React, { useState,useEffect } from 'react';
import axios from "axios"
import "./style.css"


const Cards=()=> {
   const [Cards,setCards]=useState([])
    useEffect(() => {
        
        getCards()
    }, [])
    const getCards=async ()=>{
        const response= await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=2")
        setCards(response.data.data);
    }
    
    
    return (
        <div className="cards">
            <ul>
                {Cards.map((item)=>{
                    return(
                        <li className="list">
                            <h1>{item.id}</h1>
                            <h2>{item.name}</h2>
                            <img src={item.images.large}/>
                            <h6>{item.supertype}</h6>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cards;


const api = async () => {
    await axios
      .get("https://itunes.apple.com/search?term=away&media=movie&limit=1")
      .then((data)=> {movie = data.data});
  };
  api();