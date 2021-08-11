export const getSetting = (name: string): string => localStorage.getItem(`settings_${name}`) ?? 'imperial';

export const changeMetricSetting = (name: string) => {
  localStorage.setItem('settings_metric', name);
};
