import React, { useState } from 'react';

import {
  Form,
  Input,
  Button,
  Tabs,
} from 'antd';
import { useFormik } from 'formik';

import { SearchForm } from 'interfaces/forms/searchForm';

import './index.scss';
import { SearchType } from 'interfaces/search';

const { TabPane } = Tabs;

type Props = {
  onSubmit: (form: SearchForm, type: SearchType) => void;
};

const CityFindForm: React.FC<Props> = ({ onSubmit }) => {
  const [currentTab, changeTab] = useState<SearchType>('city');

  const formik = useFormik({
    initialValues: {
      cityName: '',
      latitude: '',
      longitude: '',
      zipCode: '',
    },
    onSubmit(values: SearchForm) {
      onSubmit(values, currentTab);
    },
  });

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      className="search-form"
      onFinish={formik.handleSubmit}
    >
      <Tabs
        onTabClick={(name) => changeTab(name as SearchType)}
        defaultActiveKey="1"
        type="card"
        centered
      >
        <TabPane tab="City" key="city">
          <Form.Item
            label="Name"
            name="cityName"
          >
            <Input
              type="text"
              name="cityName"
              id="cityName"
              className="search-form__input"
              onChange={formik.handleChange}
              value={formik.values.cityName}
            />
          </Form.Item>
        </TabPane>
        <TabPane tab="Coordinates" key="coordinates">
          <Form.Item
            label="Latitude"
            name="latitude"
          >
            <Input
              type="text"
              name="latitude"
              id="latitude"
              className="search-form__input"
              onChange={formik.handleChange}
              value={formik.values.latitude}
            />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name="longitude"
          >
            <Input
              type="text"
              name="longitude"
              id="longitude"
              className="search-form__input"
              onChange={formik.handleChange}
              value={formik.values.longitude}
            />
          </Form.Item>
        </TabPane>
        <TabPane tab="ZIP code" key="zip">
          <Form.Item
            label="ZIP code"
            name="zipCode"
          >
            <Input
              type="text"
              name="zipCode"
              id="zipCode"
              className="search-form__input"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
            />
          </Form.Item>
        </TabPane>
      </Tabs>

      <div className="search-form__submit">
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default CityFindForm;
