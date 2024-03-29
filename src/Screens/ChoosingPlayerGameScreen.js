import React from 'react';
import Stack from "@mui/joy/Stack"
import ChoiceList from '../Containers/ChoiceList';
import ImageContainer from '../Components/ImageContainer';

export default function ChoosingPlayerGameScreen({emojis, imageUrl}) {
    return (
        <Stack width="100%" >
            <ImageContainer imageUrl={imageUrl} />
            <ChoiceList emojis={emojis} />
        </Stack>
    )
}