import React from "react";


const Square = (props) =>{
    
    const handleClick = () =>{
        if(!props.squareVal){
            if(props.player === true){
                props.squares.splice(props.index, 1, "X") 
                props.setSquare(props.squares)
                props.setPlayer(false)
            }
            else{
                props.squares.splice(props.index, 1, "O") 
                props.setSquare(props.squares)
                props.setPlayer(true)
            }
        }
        else{}
    }

   return(
    <div className="square" onClick= {handleClick}>{
       props.squareVal === 'O' ?  <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareVal
    }</div>
    
   )
}

export default Square