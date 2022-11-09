import axios from 'axios';
import { AddTodo, Todos } from 'components';
import React , {useState,useEffect} from 'react'
import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid';

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

const ItemWrapper = styled.div`
  margin-top: 2rem;
  max-height: 300px;
  overflow-y: auto;
`;

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [])
  
  const getTodos = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodos(res?.data));
  };

  const addTodo = async (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        res.data.id = uuidv4();
        setTodos([...todos, res?.data])});
  }

  return (
    <Container>
      <Wrapper>
        <Title>Todo List</Title>
        <AddTodo addTodo={addTodo} />
        <ItemWrapper>
          <Todos todos={todos} />
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
}

export default App