import { formatDateValue, datetimeToDate, datetimeToWeekday } from 'helpers/time';

describe('Time helpers', () => {
  test('formatDateValue', () => {
    expect(formatDateValue(1)).toBe('01');
    expect(formatDateValue(5)).toBe('05');
    expect(formatDateValue(10)).toBe('10');
    expect(formatDateValue(31)).toBe('31');
  });

  test('datetimeToDate', () => {
    expect(datetimeToDate('03.01.2021')).toBe('01.03.2021');
    expect(datetimeToDate('03.10.2021')).toBe('10.03.2021');
  });

  test('datetimeToWeekday', () => {
    expect(datetimeToWeekday('03.01.2021')).toBe('Monday');
    expect(datetimeToWeekday('03.10.2021')).toBe('Wednesday');
  });
});
