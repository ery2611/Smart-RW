import React from 'react'
import { Box } from '@mui/material'

function index() {
  return (
    <Box sx={{
      border:'1px solid black',
      height: '450px',
      display: 'fluid',
      justifyContent:'flex-start'
    }}>
      <Box sx={{
        border:'1px solid blue',
        height:'50%',
        width:'100%'
      }}></Box>
      <Box sx={{
        border:'1px solid red',
        height:'50%',
        width:'100%'
      }}></Box>
    </Box>
  )
}

export default index