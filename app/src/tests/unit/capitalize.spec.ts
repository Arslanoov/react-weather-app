import { capitalize } from 'helpers/capitalize';

describe('Capitalize helper', () => {
  it('should work', () => {
    expect(capitalize('vasya')).toBe('Vasya');
    expect(capitalize('weather')).toBe('Weather');
    expect(capitalize('sunny')).toBe('Sunny');
  });
});
