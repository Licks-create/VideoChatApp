import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { SocketContext } from '../SocketContext'


const Notification = () => {
const {call,callAccepted,callEnded,myVideo,userVideo,stream,me,name,setName,callUser,leaveCall,answercall} = useContext(SocketContext)
  return (
    <>
      {
        call.isReceivedCall && !callAccepted && (
            <div style={{display:"flex",justifyContent:"center",margin:"1rem"}}>

                <h1>{call.name} is calling...</h1>

                <Button variant='contained' color='primary' onClick={answercall}
                >
                    Answer
                </Button>

            </div>
        )
      }
    </>
  )
}

export default Notification
