import * as React from 'react';

import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';

import NoteLayout from '../layouts/NoteLayout';
import { getNotes } from '../../store/actions/note';
import withNoteService from '../hoc/withNoteService';
import DummyNoteService from '../services/dummyNoteService';
import NotesList from '../components/NotesList/index';

interface Props {
  getNotes: Function,
  list: Array<any>
}

const IndexPage = ({ getNotes, list }: Props) => {
  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <NoteLayout>
      <h3 className='text-center'>Notes</h3>
      <NotesList notes={list} />
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

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: { noteService: DummyNoteService }) => {
  return bindActionCreators({
    getNotes: getNotes(noteService)
  }, dispatch);
};

export default compose(
  withNoteService(),
  connect(mapStateToProps, mapDispatchToProps)
)(IndexPage);
