const prefixService = require('../prefix');

describe('prefix service', () => {
  test('match longest prefix', () => {
    prefix = prefixService.match("oDOFWTrgs123xq");

    expect(prefix).toEqual("oDOFWTrgs");
  });
});

describe('prefix service', () => {
  test('fail match longest prefix', () => {
    prefix = prefixService.match("_fail");

    expect(prefix).toEqual("");
  });
});
