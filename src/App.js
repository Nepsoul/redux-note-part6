import React from "react";
import { toggleImportanceOf, createNote } from "./reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    //console.log(content, "content");
    event.target.note.value = "";
    // store.dispatch({
    //   type: "NEW_NOTE",
    //   data: {
    //     content,
    //     important: false,
    //     id: generateId(),
    //   },
    // });

    dispatch(createNote(content));
  };

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
