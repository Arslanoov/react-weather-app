import * as React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NoteLayout from '../layouts/NoteLayout';
import { addNote } from '../../store/actions/note';
import withNoteService from '../hoc/withNoteService';
import DummyNoteService from '../services/dummyNoteService';

const CreatePage: React.FunctionComponent = ({ addNote, history }: any) => {
  const [ title, setTitle ] = React.useState('');
  const [ description, setDescription ] = React.useState('');

  const onTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const onFormSubmit = (e: Event) => {
    e.preventDefault();
    addNote(title, description);
    history.push('/notes');
  };

  return (
    <NoteLayout>
      <h3>Create page</h3>
      <p>
        <Button variant='primary'  to='/notes' as={Link}>
          Back to list
        </Button>
      </p>

      <Form onSubmit={onFormSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={onTitleChange} type="title" placeholder="Enter note title" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={onDescriptionChange} as="textarea" rows="3" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </NoteLayout>
  )
};

const mapStateToProps = () => {
  return { };
};

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: { noteService: DummyNoteService }) => {
  return bindActionCreators({
    addNote: (title: string, description: string) => addNote(noteService, title, description)()
  }, dispatch);
};

export default compose(
  withNoteService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CreatePage);
