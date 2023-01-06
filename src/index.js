import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

const noteReducer = (state = [], action) => {
  if (action.type === "NEW_NOTE") {
    state.push(action.data);
    return state;
  }

  return state;
};

const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
});

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const App = () => {
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    console.log(content, "content");
    event.target.note.value = "";
    store.dispatch({
      type: "NEW_NOTE",
      data: {
        content,
        important: false,
        id: generateId(),
      },
    });
  };

  const toggleImportance = (id) => {
    store.dispatch({
      type: "TOGGLE_IMPORTANCE",
      data: { id },
    });
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {console.log(addNote, "addnote")}
      <ul>
        {store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => root.render(<App />);
renderApp();

store.subscribe(renderApp);
