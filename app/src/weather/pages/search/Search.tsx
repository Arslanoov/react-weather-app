import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { searchCity, searchItemSelector } from 'store/slices/search';

import { SearchForm } from 'interfaces/forms/searchForm';
import { SearchType } from 'interfaces/search';

import WeatherLayout from 'weather/layouts/weather-layout/WeatherLayout';
import CityFindForm from 'weather/components/presentational/search/city-find-form';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const Search: React.FC<Props> = ({ searchItem, search }) => (
  <WeatherLayout>
    <div className="search">
      <div className="search__content">
        <h2 className="search__title">Search</h2>
        <CityFindForm onSubmit={(form, type) => search(form, type)} />
        {searchItem && JSON.stringify(searchItem)}
      </div>
    </div>
  </WeatherLayout>
);

const mapStateToProps = (state: RootState) => ({
  searchItem: searchItemSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  search: (form: SearchForm, type: SearchType) => dispatch(searchCity({
    form,
    type,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
