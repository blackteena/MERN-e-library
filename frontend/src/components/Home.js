import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box padding='20px' display='flex' flexDirection='column' alignItems='center'>
        <Button LinkComponent={Link} to='/books' sx={{ marginTop: 3,background: 'orangered' }} variant='contained'>
          <Typography variant='h3'>
            View all products
          </Typography>
        </Button>
        <Typography variant='h4' sx={{marginTop: 3,maxWidth:'1200px'}}>
          "Get ready to revolutionize your reading experience with the E-library! Say goodbye to limited space and endless waitlists, the E-library offers you a vast collection of e-books, audiobooks, and magazines, all accessible at the touch of a button.
          From the latest bestsellers to timeless classics, the E-library has something for everyone. And with 24/7 access, you can indulge in your love for reading anytime, anywhere. Say goodbye to crowded shelves and limited choices, the E-library is your personal library, always open and always available.Start your journey into the world of endless possibilities right now. Your next adventure awaits!"
        </Typography>
      </Box>
    </div>
  )
}

export default Home



