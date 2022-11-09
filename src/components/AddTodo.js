import React from 'react'
import styled from 'styled-components';

const styledInput = styled.input`
    width: 80%;
    padding:12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 4px;
`;

const AddTodo = () => {
    return (
        <form style={{display:"flex", alignItems:"center"}}>
            <styledInput type="text" name="title" placeholder="Add Todo..." />
        </form>
    )
}

export default AddTodo