import { useSelector } from "react-redux";
import Note from "./Note";
import styles from "./styles.module.css";
import { getFilteredNotes } from "../redux/notes/notesSlice";

export default function NoteList() {
  const notes = useSelector(getFilteredNotes);

  return (
    <ul className={styles.wrapperr}>
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            description={note.description}
            backgroundColor={note.color}
          />
        ))
      ) : (
        <li>There is no note here.</li>
      )}
    </ul>
  );
}
