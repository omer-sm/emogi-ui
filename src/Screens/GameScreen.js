import React, { useEffect, useState } from 'react';
import Stack from "@mui/joy/Stack"
import PlayerListContainer from '../Containers/PlayerListContainer';
import ChoosingPlayerGameScreen from './ChoosingPlayerGameScreen';
import ActivePlayerGameScreen from './ActivePlayerGameScreen';
import { serverAddress } from '../config';

export default function GameScreen({ activePlayer, thisPlayer, gameId }) {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(serverAddress + "/get-lobby?lobby_id=" + gameId)
                .then(r => r.json())
                .then(r => {
                    setPlayers(r.players);
                })
                .catch(err => console.error(err))
        }, 5000);
        return () => clearInterval(interval);
    }, [gameId]);

    return (
        <Stack direction="row" justifyContent="flex-end">
            <PlayerListContainer
                activePlayer={activePlayer}
                p1={{ name: players[0] ? players[0].name : "", points: 3 }}
                p2={{ name: players[1] ? players[1].name : "", points: 3 }}
                p3={{ name: players[2] ? players[2].name : "", points: 3 }}
                p4={{ name: players[3] ? players[3].name : "", points: 3 }}
            />
            {activePlayer === thisPlayer ?
                <ActivePlayerGameScreen emoji="🐢" gameId={gameId} /> :
                <ChoosingPlayerGameScreen
                    emojis={["🐢", "🐵", "🐢", "🐵", "🐢", "🐵", "🐢", "🐵", "🐢", "🐵", "🐵", "🐵"]}
                    imageUrl="https://pbs.twimg.com/media/Bgm_k7DIUAA6uJ-.jpg"
                />
            }
        </Stack>
    );
}
