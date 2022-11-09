import React , { useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 80%;
    padding:12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 25px;
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
      </form>
    );
}

export default AddTodo