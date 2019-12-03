import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Grid from "@material-ui/core/Grid";
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
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
      <Grid container justify="center" style={{ marginTop: "10px" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
