import { AddTodo } from 'components';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-image: linear-gradient(to top, #ffa6a1, #ff584f);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width:600px;
  min-width: 455px;
  min-height: 50vh;
  padding: 20px;
  background-color: #fff;
  box-shadow: 5px 2px 44px 1px rgba(0,0,0,0.75) ;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Todo List</Title>
        <AddTodo />
      </Wrapper>
    </Container>
  )
}

export default App