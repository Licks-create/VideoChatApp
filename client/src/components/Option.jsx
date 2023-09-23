import React, { useContext, useState } from 'react'
import { Button,TextField,Grid,Typography,Container,Paper } from '@mui/material'
import {CopyToClipboard} from "react-copy-to-clipboard"

import {Assignment, Phone, PhoneDisabled} from "@mui/icons-material"
import { SocketContext } from '../SocketContext'


const Option = ({children}) => {
    const {call,callAccepted,callEnded,myVideo,userVideo,stream,me,name,setName,callUser,leaveCall,answercall}=useContext(SocketContext)

    
    const [idToCall,setIdToCall]=useState('');

  return (
    <Container style={{width:"100%"}} >
        <Paper elevation={10}>
            <form style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Grid container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Grid xs={12} md={6} item>
                            <Typography gutterBottom variant='h6'>
                                Account Info
                            </Typography>
                            <TextField fullWidth label="name" value={name} onChange={(e)=>setName(e.target.value)}/>

                            <CopyToClipboard text={me} >
                                <Button variant='contained' color='primary' fullWidth
                                 startIcon={<Assignment/>}
                                 fontSize="large">
                                        copy your ID
                                </Button>
                            </CopyToClipboard>
                    </Grid>

                </Grid>

                <Grid container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Grid xs={12} md={6} item>
                            <Typography gutterBottom variant='h6'>
                                Make a call
                            </Typography>
                            <TextField fullWidth label="Id to call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)}/>

                            {
                                callAccepted && !callEnded ? (
                                    <Button variant='contained' color='secondary' startIcon={<PhoneDisabled fontSize='large'/>}
                                    fullWidth
                                    onClick={()=>leaveCall()}
                                    >
                                        Hang Up
                                    </Button>
                                ):(
                                    <Button
                                    variant='contained' color='primary' startIcon={<Phone fontSize='large'/>}
                                    fullWidth
                                    onClick={()=>callUser(idToCall)}
                                    >
                                        Connect
                                    </Button>
                                )
                            }
                    </Grid>

                </Grid>
            </form>
      {children}
        </Paper>      
    </Container>
  )
}

export default Option
