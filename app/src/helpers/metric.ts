import { getSetting } from 'storage/settings';
import { metrics } from 'const/metrics';

export const getDegMetric = () => {
  const metric = getSetting('metric');

  if (metric === metrics.Imperial) {
    return 'C';
  }

  if (metric === metrics.Standart) {
    return 'K';
  }

  return 'F';
};

export const getSpeedMetric = () => {
  const metric = getSetting('metric');

  if (metric === metrics.Imperial) {
    return 'm/h';
  }

  return 'm/s';
};
