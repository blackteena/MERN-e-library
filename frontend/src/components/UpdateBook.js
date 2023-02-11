import React, { useState } from 'react'
import axios from 'axios'
import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


const UpdateBook = () => {
    const [inputs, setInputs] = useState()

    const id = useParams().id

    const history = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:5000/books/${id}`)
            .then(res => setInputs(res.data.book))
    }, [id])

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            image: String(inputs.image),
            learn_more:String(inputs.learn_more),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/books'))
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            {inputs && (
                <form onSubmit={handleSubmit}>
                    <Box
                        display='flex'
                        flexDirection='column'
                        marginLeft='auto'
                        marginRight='auto'
                        marginTop={5}
                        maxWidth='500px'
                        padding='20px'
                    >
                        <FormLabel>Name</FormLabel>
                        <TextField onChange={handleChange} value={inputs.name} margin='normal' fullWidth variant='outlined' name='name' />
                        <FormLabel>Author</FormLabel>
                        <TextField onChange={handleChange} value={inputs.author} margin='normal' fullWidth variant='outlined' name='author' />
                        <FormLabel>Description</FormLabel>
                        <TextField onChange={handleChange} value={inputs.description} margin='normal' fullWidth variant='outlined' name='description' />
                        <FormLabel>Image</FormLabel>
                        <TextField onChange={handleChange} value={inputs.image} margin='normal' fullWidth variant='outlined' name='image' />
                        <FormLabel>Learn more(link)</FormLabel>
                        <TextField onChange={handleChange} value={inputs.learn_more} margin='normal' fullWidth variant='outlined' name='learn_more' />
                        <Button variant='contained' type='submit'>Update book</Button>
                    </Box>
                </form>
            )}
        </div>
    )
}

export default UpdateBook