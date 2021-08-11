import api from 'api';

import { changeMetricSetting } from 'storage/settings';

export const onMetricChange = (metric: string) => {
  api.defaults.params.units = metric;
  changeMetricSetting(metric);
};
