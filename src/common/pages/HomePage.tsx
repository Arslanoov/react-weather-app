import * as React from 'react';

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';

interface Props {
  test: string
}

const HomePage: React.FunctionComponent<Props> = ({ test }: Props) => {
  return (
    <>
      <p>Home page</p>
      <p>{test}</p>
    </>
  )
};

interface StateProps {
  weather: {
    test: string
  }
}

const mapStateToProps = ({ weather: { test } }: StateProps) =>  {
  return { test };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
