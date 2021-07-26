import { Dispatch } from 'redux';
import {
  ADD_NOTE,
  FETCH_NOTES,
  UPDATE_NOTE,
  REMOVE_NOTE,
} from './types/note';

import NoteServiceInterface, { Note } from '../../note/services/noteService';

const fetchNotes = (list: Array<any>) => ({
  type: FETCH_NOTES,
  payload: list,
});

const addNoteRequest = (note: Note) => ({
  type: ADD_NOTE,
  payload: note,
});

const updateNoteRequest = (id: string, title: string, description: string) => ({
  type: UPDATE_NOTE,
  payload: {
    id,
    title,
    description,
  },
});

const removeNoteRequest = (id: string) => ({
  type: REMOVE_NOTE,
  payload: id,
});

const getNotes = (noteService: NoteServiceInterface) => () => (dispatch: Dispatch) => {
  const list = noteService.getNotes();
  dispatch(fetchNotes(list));
};

const addNote = (noteService: NoteServiceInterface, title: string, description: string) => () => (dispatch: Dispatch) => {
  const id = noteService.addNote(title, description);
  dispatch(addNoteRequest({
    id,
    title,
    description,
  }));
};

const updateNote = (noteService: NoteServiceInterface, note: Note) => () => (dispatch: Dispatch) => {
  noteService.updateNote(note.id, note.title, note.description);
  dispatch(updateNoteRequest(note.id, note.title, note.description));
};

const removeNote = (noteService: NoteServiceInterface, id: string) => () => (dispatch: Dispatch) => {
  noteService.removeNote(id);
  dispatch(removeNoteRequest(id));
};

export {
  getNotes,
  addNote,
  updateNote,
  removeNote,
};
