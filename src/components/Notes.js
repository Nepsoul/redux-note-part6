import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Notes = (props) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {props.notes.map((note) => (
        <li key={note.id} onClick={() => dispatch(toggleImportanceOf(note.id))}>
          {note.content}
          <strong> {note.important ? "important" : ""}</strong>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  if (state.filter === "ALL") {
    return { notes: state.notes };
  }
  return {
    notes:
      state.filter === "IMPORTANT"
        ? state.notes.filter((note) => note.important)
        : state.notes.filter((note) => !note.important),
  };
};

const ConnectedNotes = connect(mapStateToProps)(Notes);
export default ConnectedNotes;
