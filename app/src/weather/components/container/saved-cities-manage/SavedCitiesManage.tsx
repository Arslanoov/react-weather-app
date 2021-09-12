import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ManageIcon from 'weather/components/presentational/manage-icon';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & {
  className?: string;
};

const SavedCitiesManage: React.FC<Props> = ({ className = '' }) => (
  <Link className="saved-cities-manage" to="/search">
    <ManageIcon className={className} />
  </Link>
);

const mapStateToProps = () => ({
  // savedWeather: isEditModeSelector(state),
});

export default connect(
  mapStateToProps,
)(SavedCitiesManage);
