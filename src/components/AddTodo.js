import React , { useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 80%;
    padding:12px 20px;
    margin: 8px;
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 25px;
`;

const StyledButton = styled.button`
    background-image: linear-gradient(to right, #ffa6a1, #ff584f);
    width: 20%;
    cursor: pointer;
    border-radius: 20px;
    height: 20%;
    border: none;
    margin-left: 10px;
    color: #fff;
    padding: 12px;
    font-size: 16px;
    font-weight:bold;
`;

export default function AddTodo({ addTodo }) {
    
    // eslint-disable-next-line no-unused-vars
    const [title, setTitle] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={onSubmit} style={{ display: "flex", alignItems: "center", marginTop:"30px" }}>
        <StyledInput
            type="text"
            name="title"
            placeholder="Add Todo..."
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <StyledButton type="submit">Add</StyledButton>
        </form>
    );
}