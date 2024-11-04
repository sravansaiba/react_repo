import { useState } from "react";

// import React, { useState } from "react";

// const TicTacToe = () => {
//   // Initialize the board state
//   const [array, setArray] = useState([...Array(9).fill(null)]);
//   // Track whose turn it is (X goes first)
//   const [xturn, setXturn] = useState(true);
//   // Track the winner
//   const [winner, setWinner] = useState(null);

//   // Winning patterns: each sub-array represents a winning combination of indices
//   const winPatterns = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal wins
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical wins
//     [0, 4, 8], [2, 4, 6],            // Diagonal wins
//   ];

//   // Function to check for a winner
//   const checkWinner = (newArray) => {
//     for (let pattern of winPatterns) {
//       const [a, b, c] = pattern;
//       if (newArray[a] && newArray[a] === newArray[b] && newArray[a] === newArray[c]) {
//         setWinner(newArray[a]); // Set the winner ("X" or "O")
//         return true;
//       }
//     }
//     return false;
//   };

//   // Handle the box click
//   const handleBoxClick = (idx) => {
//     if (winner || array[idx]) return; // Prevent further moves if there's already a winner or the box is filled

//     const newArray = [...array];      // Create a copy of the current board
//     newArray[idx] = xturn ? "X" : "O"; // Mark the box with "X" or "O"
//     setArray(newArray);                // Update the board state

//     // Check if there's a winner
//     if (!checkWinner(newArray)) {
//       setXturn(!xturn);               // Toggle turns if no winner yet
//     }
//   };

//   // Reset the game
//   const resetGame = () => {
//     setArray([...Array(9).fill(null)]); // Reset the board
//     setXturn(true);                     // "X" goes first
//     setWinner(null);                    // Reset the winner
//   };

//   return (
//     <div className="flex flex-col items-center justify-center " >
//       <div className="grid grid-cols-3 w-72 h-72">
//         {array.map((value, idx) => (
//           <span
//             key={idx}
//             className="flex items-center justify-center border"
//             style={{ width: "72px", height: "72px", fontSize: "24px" ,border:"1px solid black"}}
//             onClick={() => handleBoxClick(idx)}
//           >
//             {value}
//           </span>
//         ))}
//       </div>
      
//       {/* Display winner or message */}
//       {winner ? (
//         <div className="mt-4 text-lg">
//           Winner: {winner}!
//         </div>
//       ) : (
//         <div className="mt-4 text-lg">
//           {array.includes(null) ? `Next turn: ${xturn ? "X" : "O"}` : "It's a draw!"}
//         </div>
//       )}

//       {/* Reset Button */}
//       <button
//         onClick={resetGame}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Reset Game
//       </button>
//     </div>
//   );
// };

// export default TicTacToe;

export default function TicTac(){
const [array,setArray]=useState([...Array(9).fill(null)])
const [xturn,setXturn]=useState(true)
const [winner,setWinner]=useState(null)


const winningPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8]
  
];

// function to check Winner
function checkWinner(newArray){
  for(let pattern of winningPatterns){
     const [a,b,c] = pattern;
     if(newArray[a] && newArray[a] === newArray[b] && newArray[a] === newArray[c]){
      setWinner(newArray[a]);
      return true;
     }
  }
  return false
}



//handling box click 
function handleClick(getCurrentidx){
 
  if (winner || array[getCurrentidx]) return; // Prevent further moves if there's already a winner or the box is filled


  const newArray=[...array];

  if (!newArray[getCurrentidx]){
    newArray[getCurrentidx]= xturn ? "X":"O";
    setArray(newArray)

    
  } 
   //  Check if there's a winner
   if (!checkWinner(newArray)) {
    setXturn(!xturn);               // Toggle turns if no winner yet
  }
};


//reset button
 function resetGame(){
  setArray([...Array(9).fill(null)])
  setXturn(true)
  setWinner(null)
 }

  return (
    
    <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3">
          {
            array.map((val,idx)=>(
              <span
              key={idx}
              className="flex items-center justify-center border"
              style={{border:"1px solid black",height:"72px",width:"72px",fontSize:"25px"}}
              onClick={()=>handleClick(idx)}>{val}</span>
            ))
          }
        </div>
         
        <div className="pt-5">
             {winner ?(
              <div>
                Winner : {winner}
              </div>
             ):(array.includes(null)?`Next turn ${xturn?"X":"O"}`:"It's a Draw!!")}
         </div>

        <div className="pt-5">
          <button onClick={resetGame}>reset game</button>
        </div>
    </div>
  )
}



