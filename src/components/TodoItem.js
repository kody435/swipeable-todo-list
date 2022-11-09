import React from "react";
import styled from "styled-components";

export default function TodoItem({ todo }) {
    return (
        <div>{todo?.title}</div>
    )
}