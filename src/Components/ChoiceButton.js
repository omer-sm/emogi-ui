import React from 'react';
import Button from "@mui/joy/IconButton"
import Typography from '@mui/joy/Typography';
export default function ChoiceButton({emoji, handleClick}) {
    return (
        <Button variant="soft" size="lg" onClick={e => handleClick(e)}><Typography fontSize="3rem">{emoji}</Typography></Button>
    )
}