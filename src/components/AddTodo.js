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

const AddTodo = () => {

    const [title,setTitle] = useState('');

    return (
      <form style={{ display: "flex", alignItems: "center" }}>
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

export default AddTodo