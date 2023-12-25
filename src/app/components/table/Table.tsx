
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const booksData = [
    { title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', rating: 5 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 5 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', rating: 4 },
];

const ComparisonTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {booksData.map((book, index) => (
                <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.rating}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default ComparisonTable;
