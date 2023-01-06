import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import noteReducer from "./reducers/noteReducer";

// const noteReducer = (state = [], action) => {
//   //   if (action.type === "NEW_NOTE") {
//   //     //state.push(action.data);
//   //     //return state;
//   //     return [...state, action.data];
//   //   }

//   //   return state;

//   switch (action.type) {
//     case "NEW_NOTE":
//       return state.concat(action.data);
//     case "TOGGLE_IMPORTANCE": {
//       const id = action.data.id;
//       const noteToChange = state.find((n) => n.id === id);
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     }
//     default:
//       return state;
//   }
// };

const store = createStore(noteReducer);

// store.dispatch({
//   type: "NEW_NOTE",
//   data: {
//     content: "the app state is in redux store",
//     important: true,
//     id: 1,
//   },
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   data: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });

// const generateId = () => Number((Math.random() * 1000000).toFixed(0));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
