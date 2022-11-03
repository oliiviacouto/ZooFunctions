const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrowError(new Error('The hour should represent a number'));
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrowError(new Error('The minutes should represent a number'));
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
