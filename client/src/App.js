import React from 'react'
import {Typography,AppBar} from "@mui/material"




import VideoPlayer from './components/VideoPlayer'
import Notification from './components/Notification'
import Option from './components/Option'

import "./App.css"


const App = () => {
  return (
    <div className='parent'>
      <AppBar className='appBar' position='static' color='inherit'>

            <Typography variant='h2' align='center'>Video Chat App</Typography>
      </AppBar>
      <VideoPlayer className='videoBar'/>
            {/* video player components */}

        <Option className='option'>
            <Notification className='notification'/>
        </Option>
            {/* option components-> notifications */}
    </div>
  )
}
 
export default App
