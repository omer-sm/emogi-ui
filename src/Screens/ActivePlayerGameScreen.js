import React, { useState } from 'react';
import Stack from "@mui/joy/Stack"
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from "@mui/joy/Button"
import { serverAddress } from '../config';

export default function ActivePlayerGameScreen({ emoji, gameId }) {
    const [userPicture, setUserPicture] = useState(null);
    const [base64Image, setBase64Image] = useState(null);

    const convertToBase64 = async (url) => {
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            setBase64Image(reader.result);
          };
          console.log(reader.result)
          return reader.result;
        } catch (error) {
          console.error('Error converting image:', error);
        }
      };

    const submitPic = (imageUrl) => {
        convertToBase64(imageUrl).then((b64img) => {
        fetch(serverAddress + "/upload-image", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: gameId, image_data: b64img})
          }).then(r => r.json()).then(r => {
            console.log(r)
          }).catch(err => console.error(err))
    })}

    const takePicture = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = document.createElement('video');
            video.srcObject = mediaStream;

            video.onloadedmetadata = () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                const pictureDataUrl = canvas.toDataURL('image/png');
                setUserPicture(pictureDataUrl);
                // setTimeout(() => , 5000)
                submitPic(pictureDataUrl)
                mediaStream.getTracks().forEach(track => track.stop());
            };
            video.play(); // Start playing the video
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    };

    return (
        <Stack width="100%" alignItems="center" justifyContent="center">
            <AspectRatio sx={{ width: "85%" }}>
                <Stack gap={1}>
                    <Typography level="h1" textAlign="center">Mog (imitate but like better) the emoji!</Typography>
                    <Typography level="h2">Your emoji is: {emoji}</Typography>
                    {userPicture && 
                    <Stack width="60%">
                        <AspectRatio sx={{width: "100%"}}>
                        <img src={userPicture} alt="User's picture" />
                        </AspectRatio>
                        <Typography level="title-lg">Image will be submitted shortly..</Typography>
                    </Stack>}
                    <Button onClick={takePicture} size="lg"><Typography level="title-lg" color="white">Take Picture</Typography></Button>
                </Stack>
            </AspectRatio>
        </Stack>
    )
}
