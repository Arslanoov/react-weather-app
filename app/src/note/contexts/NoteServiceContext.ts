import * as React from 'react';

const {
  Provider: NoteServiceProvider,
  Consumer: NoteServiceConsumer,
} = React.createContext({});

export {
  NoteServiceProvider,
  NoteServiceConsumer,
};
