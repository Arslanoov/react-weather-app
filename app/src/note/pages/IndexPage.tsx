import * as React from 'react'

import { Link } from 'react-router-dom'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button'

import NoteServiceInterface from '../services/noteService'
import NoteLayout from '../layouts/NoteLayout'
import { getNotes } from '../../store/actions/note'
import withNoteService from '../hoc/withNoteService'
import NotesList from '../components/NotesList/index'

interface Props {
  getNotes: Function,
  list: Array<any>
}

const IndexPage = ({ getNotes, list }: Props) => {
  React.useEffect(() => {
    getNotes()
  }, [])

  return (
    <NoteLayout>
      <h3 className="text-center">Notes</h3>

      <div className="row">
        <Button as={Link} className="mx-auto" variant="success" to="/create">Add note</Button>
      </div>

      <NotesList notes={list} />
    </NoteLayout>
  )
}

interface StateProps {
  note: {
    list: Array<any>
  }
}

const mapStateToProps = ({ note: { list } }: StateProps) => {
  return { list }
}

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: { noteService: NoteServiceInterface }) => {
  return bindActionCreators({
    getNotes: getNotes(noteService),
  }, dispatch)
}

export default compose(
  withNoteService(),
  connect(mapStateToProps, mapDispatchToProps),
)(IndexPage)
