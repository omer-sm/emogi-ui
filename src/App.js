import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sheet from "@mui/joy/Sheet"
import Stack from "@mui/joy/Stack"
import GameScreen from './Screens/GameScreen';
import JoinGameScreen from './Screens/JoinGameScreen';
import { serverAddress } from './config';

function App() {
  const [gameId, setGameId] = React.useState(0)
  const [isInGame, setIsInGame] = React.useState(false)
  const [playerName, setPlayerName] = React.useState("")
  const joinGame = () => {
    fetch(serverAddress + "/join-lobby", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: playerName, lobby_id: gameId, ip: "0.0.0.0"})
    }).then(r => r.json()).then(r => {
      console.log(r)
    }).catch(err => console.error(err))
    //try join game, then if good:
    setIsInGame(true)
    //else
    alert("Whooopsie! Can't join game, lobby might be full.")
  }
  
  return (
    <Sheet height="100vh" width="100vw">
      {isInGame ? <GameScreen activePlayer={2} thisPlayer={2}/> :
       <JoinGameScreen gameId={gameId} setGameId={setGameId} isInGame={isInGame}
        joinGame={joinGame} playerName={playerName} setPlayerName={setPlayerName} />}
    </Sheet>
  );
}

export default App;
