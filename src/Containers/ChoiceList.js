import React from 'react';
import ChoiceButton from '../Components/ChoiceButton';
import Stack from "@mui/joy/Stack"
import Card from "@mui/joy/Card";

const makeChoiceList = (emojis, handleClick) => {
    return emojis.map(emoji => <ChoiceButton emoji={emoji} handleClick={handleClick} />);
}

export default function ChoiceList({ emojis }) {
    return (
        <Card variant="soft" sx={{borderBottom: "0.1rem solid gray", width: "95%"}}>
            <Stack direction="row" width="100%" justifyContent="space-around" flexWrap="wrap">
                {makeChoiceList(emojis, e => { console.log(e.target.textContent) })}
            </Stack>
        </Card>
    )
}