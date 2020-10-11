import {
  ADD_NOTE,
  FETCH_NOTES,
  NoteActionTypes
} from './types/note';

import DummyNoteService from '../../note/services/dummyNoteService';
import { Dispatch } from 'redux';

const fetchNotes = (list: Array<any>) => {
  return {
    type: FETCH_NOTES,
    payload: list
  }
};

const addNoteRequest = (note: any) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
};

const getNotes = (noteService: DummyNoteService) => () => (dispatch: Dispatch) => {
  const list = noteService.getNotes();
  dispatch(fetchNotes(list));
};

const addNote = (noteService: DummyNoteService, title: string, description: string) => () => (dispatch: Dispatch) => {
  const id = noteService.addNote(title, description);
  dispatch(addNoteRequest({
    id,
    title,
    description
  }));
};

export {
  getNotes,
  addNote
};
