import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo, index) => (
          <Fragment key={index}>
            <Todo task={todo.task} completed={todo.completed} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
