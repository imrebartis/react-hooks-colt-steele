import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

export const EditTodoForm = ({ id, task, editTodo, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      ></TextField>
    </form>
  );
};
