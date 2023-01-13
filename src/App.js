
import './App.css';
import Square from './Square'
import { useState } from 'react'




function App() {
  
 
  const [ squares, setSquare ] = useState(['','','','','','','','','']) 
  const [ player, setPlayer ] = useState(true)


  const handleClick = () => {
    setSquare(['','','','','','','','','']) 
    setPlayer(true)
  }

  const calcWinner = (arr) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i]
      if(arr[a] && 
        arr[a] === arr[b] && 
        arr[a] === arr[c]){
        return `${arr[a]} is the winner!`
      }
        
    }
      return "Who will win?"
  }
    
  
  
  
  return (
    <div className="App">
      <span>{calcWinner(squares)}</span>
      <div className='container'>
        {squares.map((ele,i) =>{
          return (
            <Square 
          setSquare={setSquare}
          index={i}
          squareVal={ele}
          squares={squares}
          player={player}
          setPlayer={setPlayer}/>
          )
        })}
      </div>
      <button onClick={handleClick} >Reset</button>
         
    </div>
  );
}

export default App;
