import React from 'react';
import Input from "@mui/joy/Input"
import Button from "@mui/joy/Button"
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'

export default function JoinGameScreen({ gameId, setGameId, joinGame, createGame, playerName, setPlayerName }) {
    return (
        <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignContent: "center" }}>
            <Card sx={{maxHeight: "10rem"}}>
                <Stack gap={1} alignItems="center">
                    <Typography level="h2">Welcome to Emogi!</Typography>
                    <Stack direction="row">
                        <Stack>
                            <Typography level="h3">Enter name:</Typography>
                            <Input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)} />
                        </Stack>
                        <Stack>
                            <Typography level="h3">Enter game ID:</Typography>
                            <Input type="text" value={gameId} onChange={e => setGameId(parseInt(e.target.value) || 0)} />
                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <Button onClick={() => joinGame(gameId)}>Join game!</Button>
                        <Button onClick={() => createGame()}>Create a game!</Button>
                    </Stack>
                </Stack>
            </Card>
        </div>
    )
}