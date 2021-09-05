import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import {
  searchCity,
  searchErrorSelector,
  searchItemSelector,
  searchLoadingSelector,
} from 'store/slices/search';
import { addSavedCity } from 'store/slices/savedCities';

import { toast } from 'react-toastify';

import { SearchForm } from 'interfaces/forms/searchForm';
import { SearchType } from 'interfaces/search';

import { capitalize } from 'helpers/capitalize';

import WeatherLayout from 'weather/layouts/weather-layout';
import CityFindForm from 'weather/components/presentational/search/city-find-form';
import WeatherCardRow from 'weather/components/presentational/weather-card-row';

import Loader from 'weather/components/presentational/loader';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const Search: React.FC<Props> = ({
  searchItem,
  search,
  error,
  add,
  loading,
}) => {
  const onAdd = async (name: string) => {
    await add(name);
    toast('City added to favourite', {
      type: 'success',
    });
  };

  if (error) {
    toast(capitalize(error), {
      type: 'error',
    });
  }

  return (
    <WeatherLayout>
      <div className="search">
        <div className="search__content">
          <h2 className="search__title">Search</h2>
          <CityFindForm onSubmit={(form, type) => search(form, type)} />
          <div className="search__result">
            {loading && !error && <Loader />}
            {searchItem && (
              <WeatherCardRow
                className="search__item search__item_expanded"
                data={searchItem}
                canDelete={false}
                onAdd={onAdd}
                canAdd
                extended
              />
            )}
          </div>
        </div>
      </div>
    </WeatherLayout>
  );
};

const mapStateToProps = (state: RootState) => ({
  searchItem: searchItemSelector(state),
  error: searchErrorSelector(state),
  loading: searchLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  search: (form: SearchForm, type: SearchType) => dispatch(searchCity({
    form,
    type,
  })),
  add: (name: string) => dispatch(addSavedCity(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
