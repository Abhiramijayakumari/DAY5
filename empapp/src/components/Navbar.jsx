import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box>
      <br /><br />
        <AppBar>
           
            <Toolbar>
            
                <Typography variant='h6'>Employee_App</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Button variant="contained" >

                    <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                        Add
                    </Link>
            </Button>&nbsp;&nbsp;
                <Button variant="contained" >
                    <Link to={"/a"} style={{textDecoration:"none", color:"white"}}>
                        View
                    </Link>
            </Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
