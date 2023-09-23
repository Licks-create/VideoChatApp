import React, { useRef } from 'react'
import { Grid,Typography,Paper } from '@mui/material'
import { SocketContext } from '../SocketContext'
import { useContext } from 'react'
import "./VideoPlayer.css"

const VideoPlayer = () => {

    const {call,callAccepted,callEnded,myVideo,userVideo,stream,me,name,setName,callUser,leaveCall,answercall}=useContext(SocketContext)
  return (
    <div>

    <Grid container className='videoParent' >

      {/* our own video */}
     {stream && (
     <Paper className='eachVideo'>
        <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
                {name|| "Name"} </Typography>
            <video playsInline muted ref={myVideo} autoPlay/>
        </Grid>
      </Paper>
      )}

      {/* others video */}
     {callAccepted && !callEnded && (
     <Paper className='eachVideo'>
        <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
                {call.name||"Name"} </Typography>
            <video playsInline ref={userVideo} autoPlay/>
        </Grid>
      </Paper>
      )}
    </Grid>
      </div>
  )
}

export default VideoPlayer
