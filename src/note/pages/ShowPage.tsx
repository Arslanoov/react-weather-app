import * as React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';

import Button from 'react-bootstrap/Button';

import NoteLayout from '../layouts/NoteLayout';
import withNoteService from '../hoc/withNoteService';

const ShowPage: React.FunctionComponent = ({ list, match: { params: { id } } }: any) => {
  const idx: number = list.findIndex((note: any) => note.id === id);
  const note = list[idx];

  return (
    <NoteLayout>
      <p>
        <Button variant='primary' to='/notes' as={Link}>
          Back to list
        </Button>
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(
  withNoteService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ShowPage);
