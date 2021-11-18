// import React from 'react'
// import './style.css'
// import axios from "axios"

// const Card=()=> {
//     const [Cards,setCards]=useState([])
//     useEffect(() => {
        
//         getCards()
//     }, [])
//     const getCards=async ()=>{
//         const response= await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=5")
//     }
    
//     return (
//         <div>
//             <ul>
//                 {Cards.map((item,i)=>{
//                     return(
//                         <li>
//                             <h2>{item.name}</h2>
//                             <img src={item.images.large}/>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default Card;

// const [Cards,setCards]=useState([])
//     useEffect(() => {
        
//         getCards()
//     }, [])
//     const getCards=async ()=>{
//         const response= await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=2")
//         setCards(response.data.data);
//     }