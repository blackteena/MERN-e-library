import React, {useState} from 'react'
import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox } from '@mui/material'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'


const AddBook = () => {
    const history=useNavigate()

    const [inputs,setInputs]=useState({
        name:'',
        author:'',
        description:'',
        image:'',
        learn_more:'',
    })  

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const sendRequest=async()=>[
        await axios.post('http://localhost:5000/books',{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            image:String(inputs.image),
            learn_more:String(inputs.learn_more),
        })
    ]

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
    }

    return (
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
                <Button variant='contained' type='submit'>Add book</Button>
            </Box> 
        </form>
    )
}

export default AddBook