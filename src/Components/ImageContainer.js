import React from 'react';
import AspectRatio from "@mui/joy/AspectRatio"

export default function ImageContainer({imageUrl}) {
    return (
        <AspectRatio sx={{width: "85%"}}>
            <img src="https://pbs.twimg.com/media/Bgm_k7DIUAA6uJ-.jpg" />
        </AspectRatio>
    )
}