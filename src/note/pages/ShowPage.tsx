import * as React from 'react';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';

import Button from 'react-bootstrap/Button';

import NoteLayout from '../layouts/NoteLayout';
import withNoteService from '../hoc/withNoteService';
import { removeNote } from '../../store/actions/note';

const ShowPage: React.FunctionComponent = ({ list, id, removeNote }: any) => {
  const idx: number = list.findIndex((note: any) => note.id === id);
  const note = list[idx];
  if (!note) {
    return <Redirect to='/notes' />
  }

  const onDelete = (e: Event) => {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      removeNote(id);
      return <Redirect to='/notes' />
    }
  };

  return (
    <NoteLayout>
      <p>
        <Button variant='primary' to='/notes' as={Link}>
          Back to list
        </Button>
        <Button variant="danger" onClick={onDelete} style={{marginLeft: '20px'}}>Remove</Button>
      </p>

      <h3>{note.title}</h3>

      <p>{note.description}</p>
    </NoteLayout>
  )
};

interface StateProps {
  note: {
    list: Array<any>
  }
}

const mapStateToProps = ({ note: { list } }: StateProps) => {
  return { list };
};

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: any) => {
  return bindActionCreators({
    removeNote: (id: string) => removeNote(noteService, id)()
  }, dispatch);
};

export default compose(
  withNoteService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ShowPage);
