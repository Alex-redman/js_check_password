/* eslint-disable max-len */
'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('12345678')).toEqual('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssw0rd!')).toEqual(true);
  });

  it(`should return 'false' when the password is less than 8 characters`, () => {
    expect(checkPassword('P@sw0rd')).toEqual(false);
  });

  it(`should return 'false' when the password is more than 16 characters`, () => {
    expect(checkPassword('P@ssw0rd!P@ssw0rd!')).toEqual(false);
  });

  it(`should return 'false' when password without big letter`, () => {
    expect(checkPassword('p@ssw0rd!')).toEqual(false);
  });

  it(`should return 'false' when password without small letter`, () => {
    expect(checkPassword('P@SSW0RD!')).toEqual(false);
  });

  it(`should return 'false' when password without special character`, () => {
    expect(checkPassword('Passw0rd')).toEqual(false);
  });

  it(`should return 'false' when password with spaces`, () => {
    expect(checkPassword('P@s sw0rd!')).toEqual(false);
  });
});
