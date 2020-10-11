import {
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

const getNotes = (noteService: DummyNoteService) => () => (dispatch: Dispatch) => {
  const list = noteService.getNotes();
  dispatch(fetchNotes(list));
};

export {
  getNotes
};
