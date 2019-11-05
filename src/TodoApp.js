import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import TodoList from './TodoList';
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "bla", completed: false },
    { id: 2, task: "bli", completed: true },
    { id: 3, task: "blö", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{ padding: 0, margin: 0, height: "100vh", background: "#fafafa" }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">todos with hooks</Typography>
        </ToolBar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
