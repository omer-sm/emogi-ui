import React from 'react';
import Stack from "@mui/joy/Stack"
import Typography from "@mui/joy/Typography"
import Card from "@mui/joy/Card"
import Divider from "@mui/joy/Divider";

export default function PlayerCard({isActive, points, name}) {
    return (
        <Card variant="soft" sx={{borderBottom: "0.1rem solid gray", flex: 1, 
        justifyContent: "flex-start", gap: "0.5rem"}}>
            <Typography level="title-lg" variant="soft" lineHeight="2.5rem" fontSize="1.5rem"
            color={isActive ? "primary" : "neutral"}>{name}</Typography>
            <Divider/>
            <Typography level="title-lg" fontSize="1.8rem">{points} points</Typography>            
        </Card>
    ) 
}