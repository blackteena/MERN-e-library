import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Book = ({ book }) => {
  const [reload, setReload] = useState(false);

  const { description, image, name, author, _id, learn_more } = book

  const deleteHandler = () => {
    axios.delete(`http://localhost:5000/books/${_id}`)
    setReload(true);
  }

  useEffect(() => {
    if (reload) {
      window.location.reload();
    }
  }, [reload]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography sx={{ height: 80 }} gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {author}
        </Typography>
        <Typography sx={{ height: 80 }} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
        <Button size="small"><a href={learn_more}>Learn More</a></Button>
        <IconButton onClick={deleteHandler} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Book;


