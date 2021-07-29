import { Dispatch } from 'redux'

import { NoteAction } from '../actions'
import { NoteActionType } from '../action-types'

import NoteServiceInterface, { Note } from '../../note/services/noteService'

export const getNotes = (noteService: NoteServiceInterface) => {
  return async (dispatch: Dispatch<NoteAction>) => {
    try {
      const list = noteService.getNotes()
      dispatch({
        type: NoteActionType.FETCH_NOTES,
        payload: list,
      })
    } catch (e) {
      // TODO: Add catch
    }
  }
}

export const addNote = (noteService: NoteServiceInterface, title: string, description: string) => {
  return async (dispatch: Dispatch<NoteAction>) => {
    try {
      const id = noteService.addNote(title, description)
      dispatch({
        type: NoteActionType.ADD_NOTE,
        payload: {
          id,
          title,
          description,
        },
      })
    } catch (e) {
      // TODO: Add catch
    }
  }
}

export const updateNote = (noteService: NoteServiceInterface, note: Note) => {
  return async (dispatch: Dispatch<NoteAction>) => {
    try {
      await noteService.updateNote(note.id, note.title, note.description)
      dispatch({
        type: NoteActionType.UPDATE_NOTE,
        payload: note,
      })
    } catch (e) {
      // TODO: Add catch
    }
  }
}

export const removeNote = (noteService: NoteServiceInterface, id: string) => {
  return async (dispatch: Dispatch<NoteAction>) => {
    try {
      await noteService.removeNote(id)
      dispatch({
        type: NoteActionType.REMOVE_NOTE,
        payload: id,
      })
    } catch (e) {
      // TODO: Add catch
    }
  }
}
