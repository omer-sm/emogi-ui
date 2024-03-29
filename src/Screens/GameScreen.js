import React from 'react';
import Stack from "@mui/joy/Stack"
import PlayerListContainer from '../Containers/PlayerListContainer';
import ChoosingPlayerGameScreen from './ChoosingPlayerGameScreen';
import ActivePlayerGameScreen from './ActivePlayerGameScreen';

export default function GameScreen({activePlayer, thisPlayer}) {
    return (
        <Stack direction="row" justifyContent="flex-end">
            <PlayerListContainer activePlayer={activePlayer}
                p1={{ name: "TurtleMonkey", points: 3 }}
                p2={{ name: "TurtleMonkey", points: 3 }}
                p3={{ name: "TurtleMonkey", points: 3 }}
                p4={{ name: "TurtleMonkey", points: 3 }} />
            {activePlayer === thisPlayer ? <ActivePlayerGameScreen emoji="🐢"/> 
            : <ChoosingPlayerGameScreen emojis={["🐢", "🐵", "🐢", "🐵", "🐢", "🐵", "🐢", "🐵", "🐢", "🐵", "🐵", "🐵"]} imageUrl="https://pbs.twimg.com/media/Bgm_k7DIUAA6uJ-.jpg"/> }
        </Stack>
    )
}