import * as React from 'react'

import { NoteServiceConsumer } from '../contexts/NoteServiceContext'

const withNoteService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <NoteServiceConsumer>
        {
          (noteService) => {
            return (
              <Wrapped
                {...props}
                noteService={noteService}
              />
            )
          }
        }
      </NoteServiceConsumer>
    )
  }
}

export default withNoteService
