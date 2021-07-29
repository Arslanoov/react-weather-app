import { v4 as uuid } from 'uuid'
import NoteServiceInterface, { Note } from './noteService'

export default class LocalStorageNoteService implements NoteServiceInterface {
  getNotes(): Array<Note> {
    const notes = localStorage.getItem('notes')
    if (!notes) {
      localStorage.setItem('notes', '[]')
      return []
    }

    return JSON.parse(notes)
  }

  addNote(title: string, description: string): string {
    const id = uuid()
    const notes = this.getNotes()

    notes.push({
      id,
      title,
      description,
    })

    localStorage.setItem('notes', JSON.stringify(notes))

    return id
  }

  updateNote(id: string, title: string, description: string): void {
    const notes = this.getNotes()
    const idx: number = notes.findIndex((note: Note) => note.id === id)

    if (notes[idx]) {
      notes[idx] = {
        id,
        title,
        description,
      }
    }

    localStorage.setItem('notes', JSON.stringify(notes))
  }

  removeNote(id: string): void {
    let notes = this.getNotes()
    notes = notes.filter((note: Note) => note.id !== id)

    localStorage.setItem('notes', JSON.stringify(notes))
  }
}
