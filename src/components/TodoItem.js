import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 10px;
    background-color: #f4f4f4;
    padding:10px 20px;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`;

const ItemWrapper = styled.div`
    margin-top: 2rem;
    max-height: 300px;
`;

export default function TodoItem({ todo }) {
    return (
        <TitleContainer>{todo?.title}</TitleContainer>
    )
}