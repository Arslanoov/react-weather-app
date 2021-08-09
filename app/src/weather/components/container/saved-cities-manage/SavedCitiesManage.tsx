import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppDispatch } from 'store';
import { toggleEditMode } from 'store/slices/savedCities';

import ManageIcon from 'weather/components/presentational/manage-icon';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
  className?: string;
};

const SavedCitiesManage: React.FC<Props> = ({ toggleNode, className = '' }) => (
  <Link className="saved-cities-manage" to="/search">
    <ManageIcon className={className} onToggle={toggleNode} />
  </Link>
);

const mapStateToProps = () => ({
  // savedWeather: isEditModeSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleNode: () => dispatch(toggleEditMode()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedCitiesManage);
