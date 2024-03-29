import React from 'react';
import Input from "@mui/joy/Input"
import Button from "@mui/joy/Button"
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'

export default function JoinGameScreen({gameId, setGameId, joinGame, playerName, setPlayerName}) {
    return (
        <Card>
            <Typography level="h3">Enter game ID:</Typography>
            <Input type="text" value={gameId} onChange={e => setGameId(e.target.valueAsNumber)} />
            <Button onClick={() => joinGame(gameId)}>Join!</Button>
        </Card>
    )
}