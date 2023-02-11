import React, { useState, useEffect } from 'react';
import Book from './book/Book'
import axios from 'axios'
import './Books.css'

const Books = () => {
    const URL = 'http://localhost:5000/books';

    const [books, setBooks] = useState();

    const [value,setValue]=useState('')

    useEffect(() => {
        axios.get(URL).then(res => setBooks(res.data.books))
    }, [])

    const filteredBooks=books&&books.filter(book=>{
        return book.name.toLowerCase().includes(value.toLowerCase())||book.author.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <form>
                <input type="searce" placeholder="Searce here..." onChange={e => setValue(e.target.value)} />
            </form>
            <ul>
                {filteredBooks && filteredBooks.map((book) => (
                    <li key={book._id}>
                        <Book book={book} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books