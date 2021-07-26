import * as React from 'react';
import ErrorIndicator from '../ErrorIndicator/index';

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<any, State> {
  state: State = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
