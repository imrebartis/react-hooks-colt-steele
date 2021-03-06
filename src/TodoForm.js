import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "10px 0", padding: "0 10px" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
