import React from "react";
import styled from "styled-components";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { CheckCircleFilled, DeleteFilled } from "@ant-design/icons";

const TitleContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 10px;
    background-color: #f4f4f4;
    padding:10px 20px;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: ${(props) => (props.todoStatus ? "line-through" : "none")};
    cursor: pointer;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props?.color || "#000"};
`;

export default function TodoItem({ todo , markComplete , deleteTodo }) {
    const leadingActions = (id) => (
      <LeadingActions>
        <SwipeAction onClick={() => markComplete(id) }>
            <Icon color="#008000">
                <CheckCircleFilled />
            </Icon>
        </SwipeAction>
      </LeadingActions>
    );

    const trailingActions = (id) => (
      <TrailingActions>
        <SwipeAction destructive={true} onClick={() => deleteTodo(id)}>
          <Icon color="#ff0000" >
            <DeleteFilled />
          </Icon>
        </SwipeAction>
      </TrailingActions>
    );

    return (
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions(todo?.id)}
          trailingActions={trailingActions(todo?.id)}
        >
          <TitleContainer todoStatus={todo?.completed} >{todo?.title}</TitleContainer>
        </SwipeableListItem>
      </SwipeableList>
    );
}