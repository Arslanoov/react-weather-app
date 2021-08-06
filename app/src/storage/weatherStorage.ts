const key = 'savedCities';

export const saveCities = (items: string[]): void => localStorage.setItem(key, JSON.stringify(items));
export const getSavedCities = (): string[] => {
  const items: string[] | null = JSON.parse(localStorage.getItem(key) as string);
  if (!items) {
    saveCities([]);
    return [];
  }

  return items as string[];
};

export const saveCity = (name: string): void => {
  const cities = getSavedCities();
  cities.push(name);
  saveCities([...Array.from(new Set(cities))]);
};

export const removeCity = (name: string): void => {
  const cities = getSavedCities();
  const newCitiesList = cities.filter((city) => city !== name);
  saveCities([...Array.from(new Set(newCitiesList))]);
};
