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
      body: JSON.stringify({name: playerName, lobby_id: gameId})
    }).then(r => r.json()).then(r => {
      setIsInGame(true)
    }).catch(err => alert("Whoooopsie! " + err.error ? err.error : err))
  }
  const createGame = () => {
    fetch(serverAddress + "/create-lobby", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: playerName})
    }).then(r => r.json()).then(r => {
      alert("Your game has been created! Your ID is " + r.id + ". Send this to your friends!")
      setIsInGame(true)
    }).catch(err => alert("Whoooopsie! " + err.error ? err.error : err))
  }
  return (
    <Sheet height="100vh" width="100vw">
      {isInGame ? <GameScreen activePlayer={2} thisPlayer={2}/> :
       <JoinGameScreen gameId={gameId} setGameId={setGameId} isInGame={isInGame}
        joinGame={joinGame} playerName={playerName} createGame={createGame}
         setPlayerName={setPlayerName} />}
    </Sheet>
  );
}

export default App;
