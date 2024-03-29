import React from 'react';
import Stack from "@mui/joy/Stack"
import PlayerCard from '../Components/PlayerCard';
export default function PlayerListContainer({p1, p2, p3, p4, activePlayer}) {
    return (
        <Stack width="20rem" height="100vh">
            <PlayerCard isActive={activePlayer === 1} name={p1.name} points={p1.points}/>
            <PlayerCard isActive={activePlayer === 2} name={p2.name} points={p2.points}/>
            <PlayerCard isActive={activePlayer === 3} name={p3.name} points={p3.points}/>
            <PlayerCard isActive={activePlayer === 4} name={p4.name} points={p4.points}/>
        </Stack>
    )
}