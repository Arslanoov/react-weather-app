import { getSetting } from 'storage/settings';
import { metrics } from 'const/metrics';

export const getDegMetric = () => {
  const metric = getSetting('metric');

  if (metric === metrics.Imperial) {
    return 'F';
  }

  if (metric === metrics.Standard) {
    return 'K';
  }

  if (metric === metrics.Metric) {
    return 'C';
  }

  return '';
};

export const getSpeedMetric = () => {
  const metric = getSetting('metric');

  if (metric === metrics.Imperial) {
    return 'km/h';
  }

  return 'm/s';
};
