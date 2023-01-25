import { connect } from "react-redux";
import { createNote } from "../reducers/noteReducer";
//import noteServervice from "../services/notes";

const NewNote = (props) => {
  console.log(createNote, "createnote");
  console.log(props.createNote, "withpropcreate");

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    props.createNote(content);
  };

  // const addNote = async (e) => {
  //   e.preventDefault();
  //   const content = e.target.note.value;
  //   e.target.note.value = "";
  //   const newNote = await noteServervice.createNew(content);
  //   dispatch(createNote(newNote));
  // };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (value) => {
      dispatch(createNote(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewNote);
