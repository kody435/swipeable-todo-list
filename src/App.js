import { AddTodo, Todos } from 'components';
import React , {useState} from 'react'
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

  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Django",
      completed: false,
    },
  ]);

  return (
    <Container>
      <Wrapper>
        <Title>Todo List</Title>
        <AddTodo />
        <Todos todos={todos} />
      </Wrapper>
    </Container>
  )
}

export default App